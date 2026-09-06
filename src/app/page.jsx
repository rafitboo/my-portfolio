import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import FAQ from '@/components/FAQ';


export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <Projects />
      <Experience />
      <FAQ />
    </main>
  );
}