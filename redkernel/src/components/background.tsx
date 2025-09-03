import React from 'react';

export default function Background() {
  return (
    <div className="aria-hidden=true className=pointer-events-none fixed inset-0 -z-10">
      {/* Base Gradient Vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(1200px 800px at 80% -10%, rgba(0,0,0,0.06), rgba(0,0,0,0) 50%), radial-gradient(1000px 600px at -10% 90%, rgba(0,0,0,0.04), rgba(0,0,0,0))',
      }} />

      {/* Reading Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(to right, #0f0f0f 1px, transparent 1px), linear-gradient(to bottom, #0f0f0f 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(900px 700px at 50% 30%, black, transparent 70%)',
      }} />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%\' height=\'100%\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }} />
    </div>
  );
}