"use client"

import { useSearchParams } from "next/navigation"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

/** "See you on Monday." from ?day=, or a generic line if no day was picked. */
export function PickedDay() {
  const day = useSearchParams().get("day")
  return <>{day && days.includes(day) ? `See you on ${day}.` : "See you soon."}</>
}
