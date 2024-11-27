import About from '../components/home/About';
import Experience from '../components/home/Experience';
import Certifications from '../components/home/Certifications';
import { AllProjects } from '../components/home/AllProjects';
import Parallax from '../components/home/Parallax';
import SkillsParallax from '../components/home/SkillsParallax';
import Contact from '../components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Parallax /> */}
      <About />
      {/* <SkillsParallax /> */}
      <AllProjects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
