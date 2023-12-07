import "./ComingSoon.scss";

const ComingSoon = () => {
  return (
    <div className="comingsoon-container justify-center">
      <div className="middle-content flex flex-col items-center ">
        <img
          className="logo-ssh-comingsoon mb-10"
          src="src/assets/gambar/SSH_-_LOGO 1.png"
          alt="logo-ssh"
        />
        <span className="above-footer">WE'RE STILL</span>
        <span className="above-footer-title mb-5">Cooking Our Website</span>
        <img src="src/assets/comingsoonbatik.svg" alt="batik-pattern" />
        <span className="above-footer-subtitle mt-8 mb-16">
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
