import "./Home.scss";
import { AboutComponent } from "../../components";
import { OurMenu } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <AboutComponent />
      
      <button
        className="sementara"
        onClick={() => {
          navigate("about");
        }}
      >
        GO TO ABOUT PAGE
      </button>
      <OurMenu />
    </div>
  );
};

export default Home;
