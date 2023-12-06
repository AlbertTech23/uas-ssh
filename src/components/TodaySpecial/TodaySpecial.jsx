import "./TodaySpecial.scss";
import { useState, useEffect } from "react";

const service = [
  {
    id: 1,
    num: "01",
    title: "Fresh Ingredients",
    description:
      "From crisp vegetables to succulent meats, each ingredient reflects our commitment to quality and authenticity.",
  },
  {
    id: 2,
    num: "02",
    title: "Skilled Chefs",
    description:
      "Our skilled chefs craft culinary masterpieces with passion and expertise, ensuring every dish is a celebration of flavor and artistry.",
  },
  {
    id: 3,
    num: "03",
    title: "Incredible Menu",
    description:
      "Showcases a fusion of bold Sumatran flavors and innovative culinary creations, inviting you on a remarkable gastronomic journey.",
  },
];

const special = [
  {
    id: 1,
    img: "src/components/TodaySpecial/Images/SatePadang.png",
    title: "Sate Padang",
    description:
      "Sate Padang, hidangan yang memikat selera dengan potongan daging sapi yang empuk...",
    rating: "4.9",
  },
  {
    id: 2,
    img: "src/components/TodaySpecial/Images/NasiKuning.png",
    title: "Nasi Kuning",
    description:
      "Nasi Kuning, hidangan khas Indonesia yang terbuat dari beras yang dimasak dengan santan.",
    rating: "4.5",
  },
  {
    id: 3,
    img: "src/components/TodaySpecial/Images/AddOns.png",
    title: "Add Ons",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Vey good...",
    rating: "4.7",
  },
];

function createSpecialCard(special) {
  return (
    <SpecialCard
      key={special.id}
      img={special.img}
      title={special.title}
      description={special.description}
      rating={special.rating}
    />
  );
}

function createServiceCard(service) {
  return (
    <ServiceCard
      key={service.id}
      num={service.num}
      title={service.title}
      description={service.description}
    />
  );
}

function SpecialCard(props) {
  const cardStyle = {
    backgroundImage: `url(${props.img})`,
  };

  return (
    <a href="#" className="specialContainer relative">
      <div className="specialCard" style={cardStyle}>
        <div className="menuDesc flex">
          <div className="specialDesc">
            <div className="title">{props.title}</div>
            <div className="description">{props.description}</div>
          </div>
          <div className="rating">
            <div className="ratingNum">{props.rating}</div>
            <img src="src/components/TodaySpecial/Images/Star.svg" alt="Star" />
          </div>
        </div>
      </div>
    </a>
  );
}

function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = special.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(special) || special.length <= 0) {
    return null;
  }

  return (
    <div className="carouselContainer">
      <div className="carousel flex items-center justify-center py-4">
        <button className="leftArrow btn-circle left-5" onClick={prevSlide}>
          ❮
        </button>
        {special.map((special, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <a href="#" className="specialContainer relative">
                  <div
                    className="carouselCard"
                    style={{ backgroundImage: `url(${special.img})` }}
                  >
                    <div className="menuDesc flex">
                      <div className="specialDesc">
                        <div className="title">{special.title}</div>
                        <div className="description">{special.description}</div>
                      </div>
                      <div className="rating">
                        <div className="ratingNum">{special.rating}</div>
                        <img
                          src="src/components/TodaySpecial/Images/Star.svg"
                          alt="Star"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          );
        })}
        <button className="rightArrow btn-circle right-5" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </div>
  );
}

function ServiceCard(props) {
  return (
    <div className="cardContainer">
      <div className="evenly">
        <div className="serviceCard">
          <div className="num">{props.num}</div>
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          <button className="arrow">
            <img src="src/components/TodaySpecial/Images/Arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

const TodaySpecial = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 950;

  return (
    <div className="todaySpecial">
      <div className="top">
        <div className="specialPosition absolute w-full">
          <div className="special flex justify-evenly">
            {isMobile ? <Carousel /> : special.map(createSpecialCard)}
          </div>
        </div>
        <img src="src/components/TodaySpecial/Images/TopImg.svg" alt="" />
      </div>
      <div className="bottom">
        <div className="serviceContainer flex flex-wrap justify-around pt-30  items-center">
          <div className="service">{service.map(createServiceCard)}</div>
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;
