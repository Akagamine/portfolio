import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Metrics from './sections/Metrics.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Education from './sections/Education.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-16 bg-surface min-h-[calc(100vh-5rem)]">
        <Hero />
        <Metrics />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
