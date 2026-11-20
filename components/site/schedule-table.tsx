import { ClockIcon } from "lucide-react"

import { schedule } from "@/lib/site"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/** Weekly class times (shadcn/ui Table). Plain HTML table so search engines can read it. */
export function ScheduleTable({ caption }: { caption?: string }) {
  return (
    <Table>
      {caption && <caption className="sr-only">{caption}</caption>}
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="font-heading tracking-wider uppercase">Day</TableHead>
          <TableHead className="text-right font-heading tracking-wider uppercase">Class time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedule.map(({ day, time }) => (
          <TableRow key={day} className={cn(!time && "text-muted-foreground")}>
            <TableCell className="py-4 font-heading text-lg font-semibold tracking-wide uppercase">{day}</TableCell>
            <TableCell className="py-4 text-right text-base">
              {time ? (
                <span className="inline-flex items-center gap-2 font-medium">
                  <ClockIcon className="size-4 text-brand" aria-hidden="true" /> {time}
                </span>
              ) : (
                "No class"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
