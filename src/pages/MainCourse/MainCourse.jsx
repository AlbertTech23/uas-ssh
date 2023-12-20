import "./MainCourse.scss";
import { MenuTemplate } from "../../components";
import rendang from "../../assets/Rendang.svg";
import naniura from "../../assets/Naniura.svg";
import satpad from "../../assets/SatePadang.svg";

const menu1 = [
  {
    id: 1,
    title: "Rendang",
    description: "Slow-cooked beef in flavorful spices.",
    price: "Rp 250.000",
  },
  {
    id: 2,
    title: "Prime Beef Rib Infusion",
    description: "Premium slow-cooked beef ribs.",
    price: "Rp 250.000",
  },
  {
    id: 3,
    title: "Medanese Duck Vermicelli",
    description: "Medanese duck-infused vermicelli delight.",
    price: "Rp 150.000",
  },
  {
    id: 4,
    title: "Artisanal Chicken Dish",
    description: "Artfully prepared artisanal chicken delight.",
    price: "Rp 120.000",
  },
];

const menu2 = [
  {
    id: 1,
    title: "Naniura",
    description: "Gourmet marinated fish, exquisite flavors.",
    price: "Rp 250.000",
  },
  {
    id: 2,
    title: "Na Tinombur",
    description: "Sophisticated fusion dish with exotic flavors.",
    price: "Rp 250.000",
  },
  {
    id: 3,
    title: "Gourmet Patin Fish Delicacy",
    description: "Gourmet simmered Patin fish dish.",
    price: "Rp 200.000",
  },
  {
    id: 4,
    title: "Luxury in Sour-spiced Fish",
    description: "Sour-spiced fish, a culinary delight.",
    price: "Rp 200.000",
  },
];

const menu3 = [
  {
    id: 1,
    title: "Sate Padang",
    description: "Elegant and flavorful Padang-style skewers.",
    price: "Rp 100.000",
  },
  {
    id: 2,
    title: "Cipera",
    description: "Fusion cuisine at its finest.",
    price: "Rp 180.000",
  },
  {
    id: 3,
    title: "Soto Padang",
    description: "Elegance in a bowl, rich flavors.",
    price: "Rp 120.000",
  },
  {
    id: 4,
    title: "Fine Vermicelli Curry",
    description: "Delicate vermicelli in rich curry sauce. ",
    price: "Rp 150.000",
  },
];

const MainCourse = () => {
  const teaserText = "MAINSTAGE DELIGHTS";
  const menuDataSets = [menu1, menu2, menu3];
  const menuImageSets = [rendang, naniura, satpad];

  return (
    <div className="MenuBigContainer">
      <MenuTemplate
        teaserText={teaserText}
        menuDataSets={menuDataSets}
        menuImageSets={menuImageSets}
      />
    </div>
  );
};

export default MainCourse;
