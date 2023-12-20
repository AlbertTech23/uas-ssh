import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  AboutComponent,
  TodaySpecial,
  Header,
  Footer,
  Stats,
  BottomHome,
  OurMenu,
} from "../../components";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="home-page">
      <Header />
      <div data-aos="fade-up">
        <AboutComponent />
      </div>
      <div data-aos="fade-up">
        <TodaySpecial />
      </div>
      <div data-aos="fade-up">
        <OurMenu />
      </div>
      <div data-aos="fade-up">
        <Stats />
      </div>
      <div data-aos="fade-up">
        <BottomHome />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
