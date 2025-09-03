import { Section } from "@/components/section"
import Link from "next/link"

export default function DisclosurePage() {
  return (
    <Section title="Responsible Disclosure" subtitle="Secure channels and expectations.">
      <div className="prose prose-neutral max-w-none prose-p:my-3 text-[#e5e5e5]">
        <p>
          I operate with responsible disclosure to strengthen the ecosystem. Vendors receive sufficient detail to
          reproduce and validate issues.
        </p>
        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:cyberdevhq@proton.me">cyberdevhq@proton.me</a>
        </p>
        <h3>Timelines</h3>
        <ul>
          <li>Initial vendor contact with minimal PoC and reproduction steps.</li>
          <li>Follow-ups at 7/14/30 days as appropriate.</li>
          <li>Public disclosure after fix or agreed timeline.</li>
        </ul>
        <p>
          See <Link href="/advisories">Advisories</Link> for current work.
        </p>
      </div>
    </Section>
  )
}
