import { ClockIcon } from "lucide-react"

import { classes } from "@/lib/site"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/**
 * Weekly schedule: one tab per class (shadcn/ui Tabs), each holding a plain HTML table
 * of days and times so search engines can read it. Data lives in `classes` (lib/site.ts).
 */
export function ScheduleTable() {
  return (
    <Tabs defaultValue={classes[0].id} className="gap-6">
      <div className="pb-2">
        <TabsList variant="line" className="h-auto! w-full flex-wrap justify-start gap-1">
          {classes.map((c) => (
            <TabsTrigger
              key={c.id}
              value={c.id}
              className="flex-none px-3.5 py-2.5 font-heading text-[13px] font-bold tracking-[0.06em] uppercase data-active:text-brand! after:bg-brand!"
            >
              {c.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {classes.map((c) => (
        // forceMount keeps every class in the static HTML (for search engines); inactive tabs are hidden.
        <TabsContent key={c.id} value={c.id} forceMount className="flex flex-col gap-4 data-[state=inactive]:hidden">
          <h3 className="text-[22px] font-bold">{c.name}</h3>
          <p className="text-[15px] text-muted-foreground">{c.description}</p>
          <Table>
            <caption className="sr-only">{c.name} class times at Red Horse Combat Sports</caption>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-heading tracking-wider uppercase">Day</TableHead>
                <TableHead className="text-right font-heading tracking-wider uppercase">Class time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {c.days.map((day) => (
                <TableRow key={day}>
                  <TableCell className="py-4 font-heading text-lg font-semibold tracking-wide uppercase">{day}</TableCell>
                  <TableCell className="py-4 text-right text-base">
                    <span className="inline-flex items-center gap-2 font-medium">
                      <ClockIcon className="size-4 text-brand" aria-hidden="true" /> {c.time}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      ))}
    </Tabs>
  )
}
