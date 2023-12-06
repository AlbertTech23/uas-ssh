import "./BottomHome.scss";

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
      <div className="testi-container justify-center pt-28 flex flex-wrap">
        <div className="testi-left mb-6 mb-md-14 mb-lg-0">
          <span className="heading-left">What people</span>
          <span className="heading-left">are saying</span>
          <span className="heading-left">about us.</span>
          <button onClick={() => console.log("Clicked")}>Read More</button>
        </div>
        <div className="testi-right flex flex-wrap justify-center">
          {testiData.map((testi, key) => (
            <div
              className="testi-card relative p-8 pt-14 flex flex-col justify-between md:m-5 md:ms-16 mt-16"
              key={key}
            >
              <div className="commaAsset absolute top-[-35px] left-[35px]">
                <img className="" src="src/assets/comma.svg" alt="" />
              </div>
              <div className="testi-card-body">{testi.review}</div>
              <div className="testi-card-footer flex">
                <img
                  src={`src/assets/${testi.picture}`}
                  alt="testi"
                  className="testi-card-footer-img rounded-full w-12 me-5"
                />
                <div className="testi-card-header flex flex-col">
                  <span className="testi-card-header-name">
                    {testi.firstName}{" "}
                    <span className="testi-card-header-lastname">
                      {testi.lastName}
                    </span>
                  </span>
                  <span className="testi-card-header-on">on {testi.on}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reservationContainer flex pb-24">
        <div className="leftRes relative">
          <img src="src/assets/fotoreservasi1.png" alt="reserve" />
        </div>
        <div className="rightRes relative">
          <img
            className="rectRes xl:top-[75px] xl:left-[-15px] lg:top-[75px] lg:left-[-15px] top-[-75px] left-[150px]"
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
