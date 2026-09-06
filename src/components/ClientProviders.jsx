"use client";

import dynamic from 'next/dynamic';
import CustomCursor from './CustomCursor';

// The dynamic import with ssr: false is now safely inside a Client Component
const ParticlesBackground = dynamic(
  () => import('@/components/ParticlesBackground'), 
  { ssr: false }
);

export default function ClientProviders() {
  return (
    <>
      <ParticlesBackground />
      <CustomCursor />
    </>
  );
}