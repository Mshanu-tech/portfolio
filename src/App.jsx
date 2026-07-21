import { useState, Suspense, lazy } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import MobileTabBar from "./components/MobileTabBar";
import FloatingActionButton from "./components/FloatingActionButton";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./sections/Hero";
import useLenis from "./hooks/useLenis";

// Below-the-fold sections are code-split so the initial bundle stays lean.
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Services = lazy(() => import("./sections/Services"));
const Experience = lazy(() => import("./sections/Experience"));
const Achievements = lazy(() => import("./sections/Achievements"));
const CtaBanner = lazy(() => import("./sections/CtaBanner"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return <div className="h-[40vh]" aria-hidden="true" />;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useLenis();

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Services />
          <Experience />
          <Achievements />
          <CtaBanner />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <MobileTabBar />
      <FloatingActionButton />
    </>
  );
}
