"use client"

import { useSearchParams } from "next/navigation"

import { classes } from "@/lib/site"

/** "See you at Beginner class." from ?class=, or a generic line if none was picked. */
export function PickedDay() {
  const picked = classes.find((c) => c.name === useSearchParams().get("class"))
  return <>{picked ? `See you at ${picked.name} class.` : "See you soon."}</>
}
