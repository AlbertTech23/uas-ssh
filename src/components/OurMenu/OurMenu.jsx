import "./OurMenu.scss";
import MenuCard from "./MenuCard";
import ourmenu from "./assets/ourmenu.png";
import menu3 from "./assets/menu3.png";
// import "./fonts/Forum-Regular.ttf";

const OurMenu = () => {
  const MenuInfo = [
    {
      id: 1,
      name: "Appetizers",
      image: menu3,
    },
    {
      id: 2,
      name: "Desserts",
      image: menu3,
    },
    {
      id: 3,
      name: "Main Dishes",
      image: menu3,
    },
    {
      id: 4,
      name: "Drinks",
      image: menu3,
    },
  ];

  return (
    <div className="flex-1 items-center container mx-auto mt-12">
      <div className="flex flex-col items-center justify-center mt-7 mb-7">
        <h1 id="heading">- OUR MENU -</h1>
        <img src={ourmenu}></img>
      </div>
      <div className="mx-2 mt-16 mb-16 md:ml-20 md:mr-20 grid grid-cols-2 grid-rows-2 gap-20 place-items-center">
        {MenuInfo.map((menuItem) => (
          <div key={menuItem.id}>
            <MenuCard name={menuItem.name} image={menuItem.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
