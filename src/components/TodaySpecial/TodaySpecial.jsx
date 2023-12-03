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

const media1024 = window.matchMedia("(max-width: 1024px)");
const media768 = window.matchMedia("(max-width: 800px)");
const media425 = window.matchMedia("(max-width: 450px)");

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
      "Nasi Kuning, hidangan khas Indonesia yang terbuat dari beras yang dimasak dengan santan...",
    rating: "4.5",
  },
  {
    id: 3,
    img: "src/components/TodaySpecial/Images/AddOns.png",
    title: "Add Ons",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
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
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    borderRadius: "10px",
    border: "4px solid #f6be61",
    width: "400px",
  };

  const menuStyle = {
    display: "flex",
    marginTop: "176px",
  };

  if (media1024.matches) {
    cardStyle.width = "260px";
    menuStyle.marginTop = "60px";
  }

  if (media768.matches) {
    cardStyle.width = "280px";
    menuStyle.marginTop = "60px";
  }

  if (media425.matches) {
    cardStyle.width = "240px";
    menuStyle.marginTop = "45px";
    cardStyle.backgroundPosition = "bottom";
  }

  return (
    <a href="#" className="specialContainer relative">
      <div className="specialCard " style={cardStyle}>
        <div className="menuDesc" style={menuStyle}>
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

function Carousel() {
  const totalSlides = special.length;
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides ? 1 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? totalSlides : prevSlide - 1
    );
  };

  const renderCarouselItems = () => {
    return special.map(createSpecialCard).map((item, index) => (
      <div
        key={`slide${index + 1}`}
        className={`carousel-item relative w-350px m-5 ${
          index + 1 === currentSlide ? "active" : ""
        }`}
      >
        {item}
      </div>
    ));
  };

  return <div className="carousel relative">{renderCarouselItems()}</div>;
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

  const isMobile = windowWidth <= 800;

  const specialStyle = {
    marginTop: "190px",
  };

  if (media1024.matches) {
    specialStyle.marginTop = "140px";
  }

  if (media768.matches) {
    specialStyle.marginTop = "73.5px";
    specialStyle.width = "415px";
    specialStyle.marginRight = "20px";
  }

  if (media425.matches) {
    specialStyle.marginTop = "35px";
    specialStyle.width = "375px";
  }

  return (
    <div className="todaySpecial">
      <div className="top">
        <div className="specialPosition absolute">
          <div
            className="special flex justify-evenly me-4"
            style={specialStyle}
          >
            <button className="prev btn-circle">❮</button>
            {isMobile ? <Carousel /> : special.map(createSpecialCard)}
            <button className="next btn-circle">❯</button>
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
