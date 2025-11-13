// frontend/src/app/page.tsx
import Hero from './components/Hero';
import Mission from './components/Mission';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import HowItWorks from './components/HowItWorks';
import StartLearning from './components/StartLearning';
import Fees from './components/Fees';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <AboutUs />
      <Courses />
      <HowItWorks />
      <StartLearning />
      <Fees />
      <Reviews />
      <Contact />
    </main>
  );
}