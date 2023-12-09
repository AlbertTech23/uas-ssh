import "./404PageNotFound.scss";
import NotFound from "../../assets/404NotFound.svg";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="NotFoundContainer flex flex-col justify-center items-center">
      <img className="w-[35%]" src={NotFound} alt="404NotFound" />
      <span className="notfoundtitle">PAGE NOT FOUND</span>
      <span className="notfoundsubtitle">
        The page you're looking for doesn't exist or has been moved
      </span>
      <button className="buttonNotFound mt-10" onClick={navigate("/")}>
        BACK TO HOME
      </button>
    </div>
  );
};

export default PageNotFound;
