import "./TodaySpecial.scss";
import { useState, useEffect, useRef } from "react";
import rendang from "../../assets/RendangSpecial.svg";
import ambon from "../../assets/AmbonSpecial.svg";
import pempek from "../../assets/PempekSpecial.svg";
import { useNavigate } from "react-router-dom";

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
    img: rendang,
    title: "Rendang",
    description:
      "A slow-cooked, aromatic masterpiece with tender beef, coconut milk, lemongrass, and exotic spices.",
    rating: "4.9",
    routing: "/maincourse",
  },
  {
    id: 2,
    img: pempek,
    title: "Pempek Kapal Selam",
    description: "Savory fish cake, a delectable Indonesian delicacy.",
    rating: "4.7",
    routing: "/appetizers",
  },
  {
    id: 3,
    img: ambon,
    title: "Bika Ambon",
    description:
      "A sweet and fluffy Indonesian cake, known for its honeycomb texture and rich pandan or coconut flavor.",
    rating: "4.6",
    routing: "/desserts",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};

function createSpecialCard(special) {
  return (
    <SpecialCard
      key={special.id}
      img={special.img}
      title={special.title}
      description={special.description}
      rating={special.rating}
      routing={special.routing}
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
  const navigate = useNavigate();

  const cardStyle = {
    backgroundImage: `url(${props.img})`,
  };

  return (
    <a
      onClick={() => {
        navigate(`${props.routing}`);
        scrollToTop();
      }}
      className="specialContainer relative"
    >
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
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;

    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchEndX.current - touchStartX.current;

      if (current === 0 && deltaX > 0) {
        touchEndX.current = touchStartX.current;
      } else if (current === length - 1 && deltaX < 0) {
        touchEndX.current = touchStartX.current;
      }
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchEndX.current - touchStartX.current;

      if (deltaX > 50) {
        prevSlide();
      } else if (deltaX < -50) {
        nextSlide();
      }

      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

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
    <div
      className="carouselContainer"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel flex items-center justify-center py-4">
        <button
          className="leftArrow btn-circle left-5"
          onClick={prevSlide}
          style={{ display: current === 0 ? "none" : "block" }}
        >
          ❮
        </button>
        {special.map((special, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            style={{
              transform: `translateX(${100 * (index - current)}%)`,
              transition: "transform 0.5s ease",
            }}
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
        ))}
        <button
          className="rightArrow btn-circle right-5"
          onClick={nextSlide}
          style={{ display: current === length - 1 ? "none" : "block" }}
        >
          ❯
        </button>
      </div>
    </div>
  );
}

function ServiceCard(props) {
  const navigate = useNavigate();
  return (
    <div className="cardContainer">
      <div className="evenly">
        <div className="serviceCard">
          <div className="num">{props.num}</div>
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          <button
            className="arrow"
            onClick={() => {
              navigate("/about");
              scrollToTop();
            }}
          >
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
