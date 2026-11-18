"use client"

import * as React from "react"
import { CheckCircle2Icon, LoaderIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

/**
 * Contact form handled by Netlify Forms.
 * Field names must match public/__forms.html exactly, or Netlify drops the submission.
 */
export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-3 rounded-(--radius-card) border bg-card p-8">
        <CheckCircle2Icon className="size-10 text-brand" aria-hidden="true" />
        <h2 className="text-3xl font-bold">Message sent</h2>
        <p className="text-muted-foreground">Thanks for reaching out. We’ll get back to you fast.</p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card) sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="New message from the Red Horse website" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <h2 className="text-3xl font-bold">Contact us</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="first-name">First name *</Label>
          <Input id="first-name" name="first-name" autoComplete="given-name" required className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="last-name">Last name *</Label>
          <Input id="last-name" name="last-name" autoComplete="family-name" required className="h-11" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" required className="h-11" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Comment or message</Label>
        <Textarea id="message" name="message" rows={5} placeholder="Interested in a free class? Questions about classes?" />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          Something went wrong sending your message. Please try again, or call us directly.
        </p>
      )}

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
          "Send message"
        )}
      </Button>
    </form>
  )
}
