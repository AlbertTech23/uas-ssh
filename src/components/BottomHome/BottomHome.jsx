import "./BottomHome.scss";
import { TestiCard } from "../TestiCard";

const testiData = [
  {
    picture: "MaleC1.png",
    firstName: "John",
    lastName: "Doe",
    on: "rendang",
    review: "Makanannya membuat saya bergoyang.",
  },
  {
    picture: "FemaleC1.png",
    firstName: "Jane",
    lastName: "Doe",
    on: "services",
    review: "Pelayanan yang sangat memuaskan.",
  },
];

const BottomHome = () => {
  return (
    <div className="imageContainer">
      <div className="testi-container justify-center pt-28 flex flex-wrap ">
        <div className="testi-left mb-6 mb-md-14 mb-lg-0">
          <span className="heading-left">What people</span>
          <span className="heading-left">are saying</span>
          <span className="heading-left">about us.</span>
          <button onClick={() => console.log("Clicked")}>Read More</button>
        </div>
        <div className="testi-right flex flex-wrap justify-center md:ms-10">
          {testiData.map((testi, key) => (
            <TestiCard key={key} {...testi} />
          ))}
        </div>
      </div>

      <div className="reservationContainer flex pb-24">
        <div className="leftRes relative">
          <img src="src/assets/fotoreservasi1.png" alt="reserve" />
        </div>
        <div className="rightRes relative">
          <img
            className="rectRes xl:top-[75px] xl:left-[-15px] lg:top-[75px] lg:left-[-15px] md:top-[-75px] md:left-[150px]"
            src="src/assets/rectRes.png"
            alt="rectRes"
          />
          <div className="rightContent ms-14 mt-14">
            <div className="resText flex flex-col pb-5">
              <span>WE ARE</span>
              <span>WATING</span>
              <span>
                FOR <span className="popBold">YOU</span>
              </span>
            </div>
            <button className="buttonReservation">BOOK A TABLE</button>
            <img
              className="cloud absolute top-[50px] right-[-75px] w-[200px] xl:w-max lg:w-max"
              src="src/assets/cloud.png"
              alt="awan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHome;
