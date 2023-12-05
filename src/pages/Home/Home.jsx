import "./Home.scss";
import { AboutComponent, TodaySpecial, Header, Footer } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Header />
      <AboutComponent />
      <TodaySpecial />
      <Footer />
      <button
        className="sementara"
        onClick={() => {
          navigate("about");
        }}
      >
        GO TO ABOUT PAGE
      </button>
    </div>
  );
};

export default Home;
