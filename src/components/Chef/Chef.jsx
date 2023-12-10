import "./Chef.scss";

const Chef = () => {
  return (
    <div className="chef-container">
      <div className="chef1 flex ">
        <div className="chef-img w-1/2">
          <img
            src="src/components/Chef/Images/Chef1.svg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="chef-desc flex flex-col items-center w-1/2">
          <span className="chef-quote">
            “A modern restaurant with a menu that will make your mouth water.”
          </span>
          <h1 className="chef-name mt-20">Anthony Holiday</h1>
          <span className="chef-title">Head Chef</span>
        </div>
      </div>
      <div className="chef2 flex ">
        <div className="chef-desc flex flex-col items-center w-1/2">
          <span className="chef-quote">
            “With great cooking skills come great responsibility in serving the
            best.”
          </span>
          <h1 className="chef-name mt-20">Ricky Jap</h1>
          <span className="chef-title">Sous Chef</span>
        </div>
        <div className="chef-img w-1/2">
          <img
            src="src/components/Chef/Images/Chef2.svg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Chef;
