import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { hero, focus, research as researchItems } from "@/lib/content"
import Background from '@/components/background';
import { section } from "framer-motion/client";

export default function Home() {
  return (

    <div className="min-h-screen text-gray-900 font-sans bg-[#171717]">
      <Background />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#e5e5e5]">Kernel Security Engineer • Exploit Dev • Red Team Ops </h1>
        <p className="text-xl mb-8 text-[#e5e5e5]">CVE & zero-day hunter — specializing in kernel internals, exploit engineering, and offensive research.</p> {/* Placeholder from Framer */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Access Kernel Insights</button>
      </section>

      {/* Latest Research/Advisories Grid (repurposed from Latest Templates) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#e5e5e5]">Our Latest Research Advisories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example cards - replace with your content */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white/70">
            <h3 className="text-xl font-semibold mb-2">Syscall Proxying in Confined Environments</h3>
            <p className="text-gray-600 mb-4">Explores syscall-level indirection to evade userland hooks.</p>
            <p className="text-blue-600 font-bold">$Free Access</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white/70">
            <h3 className="text-xl font-semibold mb-2">eBPF for Stealth Telemetry</h3>
            <p className="text-gray-600 mb-4">Tradeoffs and detection counters of eBPF-based implants.</p>
            <p className="text-blue-600 font-bold">$Free Access</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white/70">
            <h3 className="text-xl font-semibold mb-2">Practical LSM Chaining</h3>
            <p className="text-gray-600 mb-4">Granular hook selection to minimize runtime.</p>
            <p className="text-blue-600 font-bold">$Free Access</p>
          </div>
          {/* Add more cards as needed */}
        </div>

      </section>

      {/* Blog/News & Updates */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#e5e5e5]">News & Updates</h2>
        <p className="text-lg mb-6 text-center text-[#e5e5e5]">Explore a wealth of kernel security insights, trends, and expert resources to stay informed.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example blog cards */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white/70">
            <h3 className="text-xl font-semibold mb-2">Kernel CVE Reproduction Methodology</h3>
            <p className="text-gray-600">From Patch to PoC - 7/15/2025</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition bg-white/70">
            <h3 className="text-xl font-semibold mb-2">Primer: Syscall Manipulation</h3>
            <p className="text-gray-600">For Red Team Operations - 6/30/2025</p>
          </div>
        </div>
      </section>

      {/* Join Community/Contact */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#e5e5e5]">Join Our Community</h2>
        <p className="text-lg mb-6 text-[#e5e5e5]">No Spam. Only sweet content and updates on our research.</p>
        {/* Simple form */}
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded " />
          <button type="submit" className="bg-black text-white w-full p-3 rounded hover:bg-gray-800">Subscribe</button>
        </form>
      </section>
    </div>

  );
}
