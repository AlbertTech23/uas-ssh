import { useEffect, useState } from "react";
import "./Testimonials.scss";
import { TestiCard } from "../TestiCard";

const Testimonials = () => {
  const testiData = [
    {
      picture: "MaleC1",
      firstName: "John",
      lastName: "Doe",
      on: "rendang",
      review: "Makanannya membuat saya bergoyang.",
    },
    {
      picture: "FemaleC1",
      firstName: "Jane",
      lastName: "Doe",
      on: "services",
      review: "Pelayanan yang sangat memuaskan.",
    },
    {
      picture: "FemaleC2",
      firstName: "Mei",
      lastName: "Mei",
      on: "interior",
      review: "Cantik banget, nyaman pastinya!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testiData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testiData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="testimonials-container flex flex-col items-center">
      <div className="testi-title pt-10 pb-3">Testimonials</div>
      <img
        className="batik-pattern"
        src="src/assets/batik-line2.svg"
        alt="batik-line"
      />

      {!isWideScreen && (
        <div className="carousel w-full relative flex justify-center">
          <div className="leftButton flex justify-center items-center ms-[6px] me-3 pt-16">
            <a
              href="#"
              className="buttonLeftRight"
              onClick={(e) => {
                e.preventDefault();
                prevSlide();
              }}
            >
              ❮
            </a>
          </div>
          <div className="md:pt-12 carousel-item">
            {testiData.map((testi, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === currentSlide ? "block" : "hidden"
                }`}
              >
                <TestiCard {...testi} />
              </div>
            ))}
          </div>
          <div className="rightButton flex justify-center items-center ms-1 me-2 pt-16">
            {" "}
            <a
              href="#"
              className=" buttonLeftRight"
              onClick={(e) => {
                e.preventDefault();
                nextSlide();
              }}
            >
              ❯
            </a>
          </div>
        </div>
      )}

      {isWideScreen && (
        <div className="testi-right flex flex-wrap justify-center pt-6">
          {testiData.map((testi) => (
            <div key={`${testi.firstName}-${testi.lastName}`} className="m-10">
              <TestiCard {...testi} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
