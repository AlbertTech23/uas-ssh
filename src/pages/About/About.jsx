import "./About.scss";
import {
  OurStrength,
  Chef,
  BottomAboutUs,
  AboutUsHeader,
} from "../../components";

const About = () => {
  return (
    <div className="about-page">
      <AboutUsHeader />
      <OurStrength />
      <Chef />
      <BottomAboutUs />
    </div>
  );
};

export default About;
