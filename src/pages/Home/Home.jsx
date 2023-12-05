import "./Home.scss";
import {
  AboutComponent,
  TodaySpecial,
  Header,
  Footer,
  Stats,
  BottomHome,
} from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Header />
      <AboutComponent />
      <TodaySpecial />
      <Stats />
      <BottomHome />
          <button
        className="sementara absolute"
        onClick={() => {
          navigate("about");
        }}
      >
        GO TO ABOUT PAGE
      </button>
      <Footer />

    </div>
  );
};

export default Home;
