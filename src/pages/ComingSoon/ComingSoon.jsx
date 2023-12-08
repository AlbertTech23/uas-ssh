import "./ComingSoon.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../../assets/SSH - LOGO.svg";
import batikpattern from "../../assets/comingsoonbatik.svg";

const ComingSoon = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="comingsoon-container justify-center">
      <div
        className="middle-content flex flex-col items-center"
        // data-aos="fade-up"
      >
        <img
          className="logo-ssh-comingsoon mb-10"
          src={logo}
          alt="logo-ssh"
          data-aos="fade-up"
        />
        <span
          className="above-footer"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          WE'RE STILL
        </span>
        <span
          className="above-footer-title mb-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Cooking Our Website
        </span>
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          src={batikpattern}
          alt="batik-pattern"
        />
        <span
          className="above-footer-subtitle mt-8 mb-16"
          data-aos="fade-up"
          data-aos-delay="1300"
          data-aos-duration="4000"
        >
          We are going to launch our website very soon!
        </span>
      </div>
      <div className="footer-comingsoon">
        <span className="footer-word">
          Copyright © <span className="footer-bold">Sumatra Sizzle House</span>{" "}
          | All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default ComingSoon;
