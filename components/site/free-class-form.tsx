"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { LoaderIcon } from "lucide-react"

import { classes, cta, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/** Class choices built from the schedule, plus "not sure". */
const dayRange = (days: string[]) =>
  days.length > 1 ? `${days[0].slice(0, 3)}–${days[days.length - 1].slice(0, 3)}` : days[0]
const classOptions = [
  ...classes.map((c) => ({ value: c.name, label: `${c.name} (${dayRange(c.days)} ${c.time})` })),
  { value: "Not sure yet", label: "Not sure yet" },
]
const experienceOptions = ["Never", "A little", "Yes, regularly"]

type Errors = Partial<Record<"name" | "contact" | "class", string>>

/**
 * Free-class booking form, handled by Netlify Forms.
 * Field names must match public/__forms.html exactly, or Netlify drops the submission.
 */
export function FreeClassForm() {
  const router = useRouter()
  const [status, setStatus] = React.useState<"idle" | "sending" | "error">("idle")
  const [errors, setErrors] = React.useState<Errors>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const next: Errors = {}
    if (!String(data.get("name") ?? "").trim()) next.name = "Add your name so we know who’s coming."
    if (!String(data.get("contact") ?? "").trim())
      next.contact = "Add a phone number or email so we can confirm your class."
    if (!data.get("class")) next.class = "Pick a class. Not sure? Choose “Not sure yet”."
    setErrors(next)
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0]
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    setStatus("sending")
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      const picked = String(data.get("class"))
      const query = picked === "Not sure yet" ? "" : `?class=${encodeURIComponent(picked)}`
      router.push(`/free-class/thanks/${query}`)
    } catch {
      setStatus("error")
    }
  }

  const fieldError = (id: keyof Errors) =>
    errors[id] ? (
      <p id={`${id}-error`} className="text-sm text-destructive">
        {errors[id]}
      </p>
    ) : null

  return (
    <form
      name="free-class"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={onSubmit}
      className="flex flex-col gap-6 rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card) sm:p-8"
    >
      <input type="hidden" name="form-name" value="free-class" />
      <input type="hidden" name="subject" value="New free class request from the website" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <h2 className="text-3xl font-bold">Book your free class</h2>

      <div className="grid gap-2">
        <Label htmlFor="name">Your name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="h-11"
        />
        {fieldError("name")}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact">Phone or email</Label>
        <Input
          id="contact"
          name="contact"
          autoComplete="tel"
          aria-invalid={!!errors.contact}
          aria-describedby={errors.contact ? "contact-error" : "contact-help"}
          className="h-11"
        />
        {fieldError("contact") ?? (
          <p id="contact-help" className="text-sm text-muted-foreground">
            So your coach can confirm your class.
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="class">Which class do you want to try?</Label>
        <select
          id="class"
          name="class"
          defaultValue=""
          aria-invalid={!!errors.class}
          aria-describedby={errors.class ? "class-error" : "class-help"}
          className={cn(
            "h-11 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive md:text-sm",
            "[&>option]:bg-card"
          )}
        >
          <option value="" disabled>
            Pick a class
          </option>
          {classOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {fieldError("class") ?? (
          <p id="class-help" className="text-sm text-muted-foreground">
            Not sure? Pick any. We’ll help you choose.
          </p>
        )}
      </div>

      <fieldset className="grid gap-3">
        <legend className="mb-1 text-sm font-medium">Have you trained before?</legend>
        <div className="flex flex-wrap gap-2">
          {experienceOptions.map((o) => (
            <label
              key={o}
              className="flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2.5 text-sm has-checked:border-brand has-checked:bg-brand/10"
            >
              <input type="radio" name="experience" value={o} className="accent-(--brand)" />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong sending your request. Please try again, or call {site.phone}.
        </p>
      )}

      <div className="flex flex-col gap-2">
        <Button
          type="submit"
          size="lg"
          disabled={status === "sending"}
          className="h-12 font-heading text-base tracking-wide uppercase"
        >
          {status === "sending" ? (
            <>
              <LoaderIcon className="animate-spin" /> Sending…
            </>
          ) : (
            cta.submit
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground">We reply the same day.</p>
      </div>
    </form>
  )
}
