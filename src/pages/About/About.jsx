import "./About.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  OurStrength,
  Header,
  BottomAboutUs,
  Chef,
  Testimonials,
  AboutUsHeader,
  WhoWeAre,
  Stats,
  Footer,
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
      <Header />
      <AboutUsHeader />
      <div data-aos="fade-up">
        <WhoWeAre />
      </div>
      <div data-aos="fade-up">
        <Stats />
      </div>
      <div data-aos="fade-up">
        <OurStrength />
      </div>
      <div data-aos="fade-up">
        <Chef />
      </div>
      <div data-aos="fade-up">
        <BottomAboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;
