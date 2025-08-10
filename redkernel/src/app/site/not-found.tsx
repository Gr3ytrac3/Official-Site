import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[50vh] max-w-6xl place-items-center px-4 py-16 text-center">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Page not found</h1>
        <p className="mt-2 text-neutral-700">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Link href="/" className="text-sm font-medium text-neutral-900 underline">
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
