import "./About.scss";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <h1>About</h1>
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
