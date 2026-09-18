import Carousel from "./components/Carousel/Carousel";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import OurServices from "./components/OurServices/OurServices";
import SalesTeams from "./components/SalesTeams/SalesTeams";

function Home() {
  return (
    <>
      <Carousel />
      <HowItWorks />
      <OurServices />
      <SalesTeams />
      <hr className="mb-20 w-full border-dashed border-info" />
    </>
  );
}

export default Home;
