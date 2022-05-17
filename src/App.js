import Accordian from "./components/Accordian";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Solution from "./components/solution/Solution";

import "./index.css";
function App() {
  return (
    <>
      <Hero />
      <Service />
      <Solution />
      <Accordian />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
