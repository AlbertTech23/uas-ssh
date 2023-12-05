import { Chef } from "../../components";
import "./About.scss";
import { useNavigate } from "react-router-dom";
import { OurStrength } from "../../components";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <h1>About</h1>

     

      <OurStrength />
 <Chef />
      <button
        className="sementara"
        onClick={() => {
          navigate("/");
        }}
      >
        GO TO HOME PAGE
      </button>
    </div>
  );
};

export default About;
