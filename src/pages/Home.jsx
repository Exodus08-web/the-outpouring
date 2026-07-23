import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import PastOutpouring from "../components/PastOutpouring";
import Experience from "../components/Experience";
import NextSteps from "../components/NextSteps";
import EventDetails from "../components/EventDetails";
import PartnerSection from "../components/PartnerSection";
import Testimonies from "../components/Testimonies";
import AboutOutpouring from "../components/AboutOutpouring";
import AboutMission from "../components/AboutMission";
import Footer from "../components/Footer";


function Home() {
  return (
      <>
  <Navbar />
  <Hero />
  <Countdown />
  <AboutOutpouring />
  <PastOutpouring />
  <Testimonies />
  <AboutMission />
  <Experience />
  <NextSteps />
  <PartnerSection />
  <EventDetails />
  <Footer />
</>
  );
}

export default Home;