import "./Drinks.scss";
import { MenuTemplate } from "../../components";
import elixir from "../../assets/Elixir.svg";
import pandan from "../../assets/Pandan.svg";
import avocado from "../../assets/Avocado.svg";

const menu1 = [
  {
    id: 1,
    title: "Passion Fruit Elixir",
    description: "Vibrant passion fruit syrup, a tropical indulgence.",
    price: "Rp 20.000",
  },
  {
    id: 2,
    title: "Royal Medley of Juices",
    description: "Regal fruit juice medley, a luxurious blend.",
    price: "Rp 30.000",
  },
  {
    id: 3,
    title: "Elixir of Secang Tranquility",
    description: "Earthy elixir renowned for its soothing qualities.",
    price: "Rp 10.000",
  },
  {
    id: 4,
    title: "Golden Egg-Infused Elegance",
    description: "Golden tea infused with egg, a unique blend.",
    price: "Rp 20.000",
  },
];

const menu2 = [
  {
    id: 1,
    title: "Exquisite Pandan Infusion",
    description: "Pandan bliss in creamy coconut, a sweet delight.",
    price: "Rp 45.000",
  },
  {
    id: 2,
    title: "Corn Euphoria",
    description: "Chilled corn elixir, a refreshing and luxurious drink.",
    price: "Rp 50.000",
  },
  {
    id: 3,
    title: "Aia Aka",
    description: "Chilled tropical elixir, a luxurious escape.",
    price: "Rp 110.000",
  },
  {
    id: 4,
    title: "Warm Pandan Indulgence",
    description: "Warm pandan euphoria, inviting and delightful.",
    price: "Rp 30.000",
  },
];

const menu3 = [
  {
    id: 1,
    title: "Frothy Avocado Delight",
    description: "Creamy avocado froth, a luxurious and indulgent drink.",
    price: "Rp 20.000",
  },
  {
    id: 2,
    title: "Exquisite Sweet Tea Infusion",
    description: "An aromatic indulgence for connoisseurs.",
    price: "Rp 15.000",
  },
  {
    id: 3,
    title: "Opulent Lychee-Infused tea",
    description:
      "A harmonious fusion of fragrant tea leaves and succulent lychee essence",
    price: "Rp 20.000",
  },
  {
    id: 4,
    title: "Velvety Avocado Elixir",
    description:
      "A velvety concoction of ripe avocados, blended to creamy perfection.",
    price: "Rp 25.000",
  },
];

const Drinks = () => {
  const teaserText = "SIP & SAVOR";
  const menuDataSets = [menu1, menu2, menu3];
  const menuImageSets = [elixir, pandan, avocado];

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

export default Drinks;
