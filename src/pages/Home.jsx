import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import AboutTSN from "../components/AboutTSN";
import PastOutpouring from "../components/PastOutpouring";
import Experience from "../components/Experience";
import EventDetails from "../components/EventDetails";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <AboutTSN />
      <PastOutpouring />
      <Experience />
      <EventDetails />
    </>
  );
}

export default Home;