import AccordionSection from "./components/Accordion/AccordionSection";
import CallToAction from "./components/CallToAction/CallToAction";
import Carousel from "./components/Carousel/Carousel";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import OurServices from "./components/OurServices/OurServices";
import SalesTeams from "./components/SalesTeams/SalesTeams";
import ServiceFeatures from "./components/ServiceFeatures/ServiceFeatures";

function Home() {
  return (
    <>
      <Carousel />
      <HowItWorks />
      <OurServices />
      <SalesTeams />
      <hr className="mx-24 border-dashed border-info" />
      <ServiceFeatures />
      <hr className="mb-20 mx-24 border-dashed border-info" />
      <CallToAction />
      <CustomerReview />
      <AccordionSection />
    </>
  );
}

export default Home;
