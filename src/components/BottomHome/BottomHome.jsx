import "./BottomHome.scss";
import { TestiCard } from "../TestiCard";
import cloud from "../../assets/cloud.png";
import rectRest from "../../assets/rectRes.png";
import { useNavigate } from "react-router-dom";
import reservasi1 from "../../assets/fotoreservasi1.png";

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
];

const BottomHome = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="imageContainer">
      <div className="testi-container justify-center pt-28 flex flex-wrap ">
        <div className="testi-left mb-6 mb-md-14 mb-lg-0">
          <span className="heading-left">What people</span>
          <span className="heading-left">are saying</span>
          <span className="heading-left">about us.</span>
          <button
            onClick={() => {
              navigate("/about");
              scrollToTop();
            }}
          >
            Read More
          </button>
        </div>
        <div className="testi-right flex flex-wrap justify-center md:ms-10">
          {testiData.map((testi, key) => (
            <TestiCard key={key} {...testi} />
          ))}
        </div>
      </div>

      <div className="reservationContainer flex pb-24">
        <div className="leftRes relative">
          <img src={reservasi1} alt="reserve" />
        </div>
        <div className="rightRes relative">
          <img
            className="rectRes xl:top-[75px] xl:left-[-15px] lg:top-[-75px] lg:left-[150px] md:top-[-75px] md:left-[150px] top-[-75px] left-[100px]"
            src={rectRest}
            alt="rectRes"
          />
          <div className="rightContent ms-14 md:mt-14 mt-6">
            <div className="resText flex flex-col pb-5">
              <span>WE ARE</span>
              <span>WATING</span>
              <span>
                FOR <span className="popBold">YOU</span>
              </span>
            </div>
            <button
              className="buttonReservation"
              onClick={() => {
                navigate("/reservation");
                scrollToTop();
              }}
            >
              BOOK A TABLE
            </button>
            <img className="cloud absolute" src={cloud} alt="awan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHome;
