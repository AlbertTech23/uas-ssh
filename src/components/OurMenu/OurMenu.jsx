import "./OurMenu.scss";
import MenuCard from "./MenuCard";
import ourmenu from "./assets/ourmenu.png";
import appetizers from "./assets/appetizers.svg";
import desserts from "./assets/desserts.svg";
import maincourse from "./assets/maincourse.svg";
import drinks from "./assets/drinks.svg";
import { useNavigate } from "react-router-dom";
// import "./fonts/Forum-Regular.ttf";

const OurMenu = () => {
  const navigate = useNavigate();

  const MenuInfo = [
    {
      id: 1,
      name: "Appetizers",
      image: appetizers,
      routing: "/appetizers",
    },
    {
      id: 2,
      name: "Desserts",
      image: desserts,
      routing: "/desserts",
    },
    {
      id: 3,
      name: "Main Course",
      image: maincourse,
      routing: "/maincourse",
    },
    {
      id: 4,
      name: "Drinks",
      image: drinks,
      routing: "/drinks",
    },
  ];

  return (
    <div className="flex-1 items-center container mx-auto mt-12 mb-12">
      <div className="flex flex-col items-center justify-center mt-7 mb-7">
        <h1 id="heading">- OUR MENU -</h1>
        <img src={ourmenu}></img>
      </div>

      <div className="mx-2 mt-16 md:ml-20 md:mr-20 grid grid-cols-2 grid-rows-2 place-items-center">
        {MenuInfo.map((menuItem) => (
          <div key={menuItem.id}>
            <MenuCard
              name={menuItem.name}
              image={menuItem.image}
              routing={menuItem.routing}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
