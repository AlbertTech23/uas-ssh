import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  OurStrength,
  Chef,
  BottomAboutUs,
  AboutUsHeader,
} from "../../components";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div className="about-page">
      <AboutUsHeader />
      <div data-aos="fade-up">
        <OurStrength />
      </div>
      <div data-aos="fade-up">
        <Chef />
      </div>
      <div data-aos="fade-up">
        <BottomAboutUs />
      </div>
    </div>
  );
};

export default About;
