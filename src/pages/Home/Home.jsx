import "./Home.scss";

import {
  AboutComponent,
  TodaySpecial,
  Header,
  Footer,
  Stats,
  BottomHome,
  OurMenu,
  ScrollToTop,
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
      <OurMenu />
      <Stats />
      <BottomHome />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
