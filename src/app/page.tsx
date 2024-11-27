import About from '../components/home/About';
import Experience from '../components/home/Experience';
import Certifications from '../components/home/Certifications';
import { AllProjects } from '../components/home/AllProjects';
import Parallax from '../components/home/Parallax';
import SkillsParallax from '../components/home/SkillsParallax';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <Parallax />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950">
        <About />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black">
        <SkillsParallax />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950">
        <AllProjects />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black">
        <Experience />
      </section>
      
      <section className="relative bg-white dark:bg-neutral-950">
        <Certifications />
      </section>
      
      <section className="relative bg-neutral-50 dark:bg-black">
        <Contact />
      </section>
    </>
  );
}
