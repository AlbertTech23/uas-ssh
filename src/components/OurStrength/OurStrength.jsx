import "./OurStrength.scss";

const OurStrength = () => {
  return (
    <div className="ourStrContainer flex flex-col  ">
      <div className="titleContainer flex flex-col mt-14 justify-center items-center">
        <span className="subtitle">Why Choose Us?</span>
        <span className="main-title">OUR STRENGTH</span>
        <img
          className="batik-pattern"
          src="/src/assets/patternbatik.svg"
          alt="batik-cosmetics"
        ></img>
      </div>
    </div>
  );
};

export default OurStrength;
