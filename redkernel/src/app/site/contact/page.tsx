"use client"

import type React from "react"

import { Section } from "@/components/section"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(() => setSent(true), 300) // Simulate
  }

  return (
    <Section title="Contact" subtitle="For research collaboration or disclosure.">
      <div className="mx-auto max-w-xl rounded-lg border border-neutral-200 bg-white/80 p-5">
        {sent ? (
          <div className="text-sm text-neutral-700">
            Thanks — message sent. I’ll reply from{" "}
            <span className="font-medium text-neutral-900">cyberdevhq@proton.me</span>.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-neutral-900" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="h-10 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-400"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-neutral-900" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 transition focus:border-neutral-400"
              />
            </div>
            <Button type="submit">Send</Button>
          </form>
        )}
      </div>
    </Section>
  )
}
