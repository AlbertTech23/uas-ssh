import "./Home.scss";
import { AboutComponent, TodaySpecial, Header, Footer } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Header />
      <button
        className="sementara absolute"
        onClick={() => {
          navigate("about");
        }}
      >
        GO TO ABOUT PAGE
      </button>
      <AboutComponent />

      <TodaySpecial />

      <Footer />
    </div>
  );
};

export default Home;
