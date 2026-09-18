import MarqueeImport from "react-fast-marquee";
import brand1 from "../../../../assets/brands/amazon.png";
import brand2 from "../../../../assets/brands/amazon_vector.png";
import brand3 from "../../../../assets/brands/casio.png";
import brand4 from "../../../../assets/brands/moonstar.png";
import brand5 from "../../../../assets/brands/randstad.png";
import brand6 from "../../../../assets/brands/star.png";
import brand7 from "../../../../assets/brands/start_people.png";

const Marquee = MarqueeImport.default ?? MarqueeImport;

function Brands() {
  return (
    <Marquee pauseOnHover={true} speed={30}>
      <img className="mx-24" src={brand1} alt="brand-logo" />
      <img className="mx-24" src={brand2} alt="brand-logo" />
      <img className="mx-24" src={brand3} alt="brand-logo" />
      <img className="mx-24" src={brand4} alt="brand-logo" />
      <img className="mx-24" src={brand5} alt="brand-logo" />
      <img className="mx-24" src={brand6} alt="brand-logo" />
      <img className="mx-24" src={brand7} alt="brand-logo" />
    </Marquee>
  );
}

export default Brands;
