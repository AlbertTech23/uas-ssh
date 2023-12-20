import "./OurStrength.scss";
import str1 from "../../assets/str1.svg";
import str2 from "../../assets/str2.svg";
import str3 from "../../assets/str3.svg";
import str4 from "../../assets/str4.svg";

const OurStrength = () => {
  const data = [
    {
      title: "Hygienic Food",
      description:
        "We provide the best quality food with hygienic and clean environment.",
      image: str1,
    },
    {
      title: "Skilled Chefs",
      description: "Our chefs are proven highly skilled and experienced.",
      image: str2,
    },
    {
      title: "Fresh Environtment",
      description: "The best place to enjoy your meal with fresh air.",
      image: str3,
    },
    {
      title: "Event & Party",
      description: "Celebrate your precious moments with us.",
      image: str4,
    },
  ];

  return (
    <div className="ourStrContainer flex flex-col  ">
      <div className="titleContainer flex flex-col mt-14 justify-center items-center">
        <span className="subtitle">Why Choose Us?</span>
        <span className="main-title m-3">OUR STRENGTH</span>
        <img
          className="batik-pattern m-5"
          src="/src/assets/batik-line.svg"
          alt="batik-cosmetics"
        ></img>
      </div>
      <div className="contentContainer flex flex-wrap justify-center items-center xl:me-20 xl:ms-20 lg:me-3 lg:ms-3 md:me-5 md:ms-5 sm:me-0 sm:ms-0 mb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="cardStrContainer flex flex-col justify-center items-center md:ps-10 md:pe-10 pe-5 ps-5 lg:m-10 md:m-8 sm:m-5 m-3"
          >
            <img src={item.image} alt="our-strength"></img>
            <span className="card-title mt-3">{item.title}</span>
            <span className="card-description mt-3">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStrength;
