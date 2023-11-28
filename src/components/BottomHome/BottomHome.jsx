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
      <div className="testi-container pt-36 pl-40 flex flex-wrap">
        <div className="testi-left mb-14 mb-md-14 mb-lg-0">
          <span className="heading-left">What people</span>
          <span className="heading-left">are saying</span>
          <span className="heading-left">about us.</span>
          <button onClick={() => console.log("Clicked")}>Read More</button>
        </div>
        <div className="testi-right flex flex-wrap">
          {testiData.map((testi, key) => (
            <div
              className="testi-card relative p-8 pt-14 flex flex-col justify-between m-5 ms-16"
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
    </div>
  );
};

export default BottomHome;
