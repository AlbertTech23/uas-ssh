import "./Home.scss";

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
  return (
    <div className="home-page">
      <Header />
      <AboutComponent />
      <TodaySpecial />
      <OurMenu />
      <Stats />
      <BottomHome />
      <Footer />
    </div>
  );
};

export default Home;
