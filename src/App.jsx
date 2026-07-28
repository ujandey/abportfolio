import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Spiritual from "./components/Spiritual";
import Intro from "./components/Intro";
import GenAI from "./components/GenAI";
import Events from "./components/Events";
import FeaturedMoments from "./components/FeaturedMoments";
import Speaking from "./components/Speaking";
import Hunger from "./components/Hunger";
import Podcast from "./components/Podcast";
import Comics from "./components/Comics";
import GalleryMasonry from "./components/GalleryMasonry";
import Books from "./components/Books";
import Statement from "./components/Statement";
import Pillars from "./components/Pillars";
import CompaniesSection from "./components/CompaniesSection";
import Accelerator from "./components/Accelerator";
import Mentorship from "./components/Mentorship";
import TechStack from "./components/TechStack";
import Global from "./components/Global";
import MediaWall from "./components/MediaWall";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import BioPage from "./components/BioPage";
import TechnologyPage from "./components/TechnologyPage";
import DrawingsPage from "./components/DrawingsPage";
import PhotographyPage from "./components/PhotographyPage";
import MediaEntertainmentPage from "./components/MediaEntertainmentPage";
import LatestSpeaksPage from "./components/LatestSpeaksPage";
import MentoringPage from "./components/MentoringPage";
import InvestmentsPage from "./components/InvestmentsPage";
import PressNewsPage from "./components/PressNewsPage";
import VirtualRealityPage from "./components/VirtualRealityPage";
import BlogPage from "./components/BlogPage";
import "./App.css";

const ACCENT = "#2f6bff";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (path === "/bio") {
    return <BioPage />;
  }

  if (path === "/technology") {
    return <TechnologyPage />;
  }

  if (path === "/drawings") {
    return <DrawingsPage />;
  }

  if (path === "/photography") {
    return <PhotographyPage />;
  }

  if (path === "/media-entertainment") {
    return <MediaEntertainmentPage />;
  }

  if (path === "/latest-speaks") {
    return <LatestSpeaksPage />;
  }

  if (path === "/mentoring") {
    return <MentoringPage />;
  }

  if (path === "/investments") {
    return <InvestmentsPage />;
  }

  if (path === "/press-news") {
    return <PressNewsPage />;
  }

  if (path === "/virtual-reality") {
    return <VirtualRealityPage />;
  }

  if (path === "/blog") {
    return <BlogPage />;
  }

  return (
    <div className="site">
      <Nav />
      <Hero accent={ACCENT} />
      <StatsBar />
      <FeaturedMoments />
      <Events accent={ACCENT} />
      <Intro />
      <Speaking />
      <CompaniesSection />
      <Accelerator />
      <Mentorship />
      <Hunger />
      <Podcast />
      <Spiritual />
      <Comics />
      <GalleryMasonry />
      <Books />
      <Statement />
      <GenAI />
      <Pillars />
      <TechStack />
      <Global />
      <MediaWall />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
