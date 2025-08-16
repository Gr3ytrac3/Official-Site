import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/60 bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-2">
          <div className="text-base font-semibold text-neutral-900">RedKernel</div>
          <p className="text-sm text-neutral-600">
            Linux kernel exploitation, syscall manipulation, eBPF telemetry & evasion, and LSM bypass research.
          </p>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold text-neutral-900">Navigate</div>
          <ul className="space-y-1 text-sm text-neutral-700">
            <li>
              <Link className="hover:text-neutral-900" href="/research">
                Research
              </Link>
            </li>
            <li>
              <Link className="hover:text-neutral-900" href="/advisories">
                Advisorises
              </Link>
            </li>
            <li>
              <Link className="hover:text-neutral-900" href="/lab">
                Lab
              </Link>
            </li>
            <li>
              <Link className="hover:text-neutral-900" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold text-neutral-900">Legal</div>
          <ul className="space-y-1 text-sm text-neutral-700">
            <li>
              <Link className="hover:text-neutral-900" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:text-neutral-900" href="/terms-of-service">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="hover:text-neutral-900" href="/disclosure">
                Responsible Disclosure
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold text-neutral-900">Contact</div>
          <ul className="space-y-1 text-sm text-neutral-700">
            <li>cyberdevhq@proton.me</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-neutral-600">
          <span>© {new Date().getFullYear()} RedKernel</span>
          <span>Focused. Responsible. Evidence-driven.</span>
        </div>
      </div>
    </footer>
  )
}
