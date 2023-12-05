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
      <Stats />
      <BottomHome />
      <Footer />
    </div>
  );
};

export default Home;
