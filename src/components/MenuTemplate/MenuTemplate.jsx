import React from "react";
import MenuSection from "./MenuSection";
import MenuSection2 from "./MenuSection2";
import garis from "./Images/Garis.svg";
import pempek from "./Images/PempekKapalSelam.svg";
import lumpia from "./Images/Lumpia.svg";
import tofu from "./Images/Tofu.svg";
import "./MenuTemplate.scss";

const menu1 = [
  {
    id: 1,
    title: "Pempek Kapal Selam",
    description: "Savory fish cake, a delectable Indonesian delicacy.",
    price: "Rp 70.000",
  },
  {
    id: 2,
    title: "Crispy Garden Delights",
    description: "Crispy vegetable fritters, a savory indulgence of textures.",
    price: "Rp 45.000",
  },
  {
    id: 3,
    title: "Tempting Tapioca Morsels",
    description: "Crispy fried snacks, a flavorful and satisfying treat.",
    price: "Rp 30.000",
  },
  {
    id: 4,
    title: "Luxurious Tapioca Delicacies",
    description: "Chewy tapioca balls, delightful in every flavorful bite.",
    price: "Rp 40.000",
  },
];

const menu2 = [
  {
    id: 1,
    title: "Lumpia",
    description: "Golden spring rolls, a visual and flavorful delight.",
    price: "Rp 45.000",
  },
  {
    id: 2,
    title: "Lenggang",
    description: "Fragrant coconut pancake, a delightful sweet sensation.",
    price: "Rp 50.000",
  },
  {
    id: 3,
    title: "Burgo",
    description: "Sumptuous stuffed tofu, a luxurious culinary masterpiece.",
    price: "Rp 110.000",
  },
  {
    id: 4,
    title: "Risoles",
    description: "Crispy filled crepes, savory bites of exquisite flavors.",
    price: "Rp 30.000",
  },
];

const menu3 = [
  {
    id: 1,
    title: "Stuffed Tofu Sophistication",
    description: "Stuffed tofu, a visual and flavorful masterpiece.",
    price: "Rp 30.000",
  },
  {
    id: 2,
    title: "Spicy Beef Sensation",
    description: "Spicy beef delicacy, a gourmet's delight in richness.",
    price: "Rp 110.000",
  },
  {
    id: 3,
    title: "Lamang Tapai",
    description: "Fragrant sticky rice, an aromatic culinary treasure.",
    price: "Rp 190.000",
  },
  {
    id: 4,
    title: "Batiah",
    description: "Sweet and spicy salad, a flavorful and satisfying treat.",
    price: "Rp 110.000",
  },
];

const MenuTemplate = () => {
  return (
    <div className="menuTemplate">
      <div className="menuHeader flex flex-col items-center mb-10">
        <span className="pt-10 pb-5">TANTALIZING TEASERS</span>
        <img src={garis} alt="Garis" />
      </div>
      <MenuSection menuData={menu1} menuImage={pempek} />
      <MenuSection2 menuData={menu2} menuImage={lumpia} />
      <MenuSection menuData={menu3} menuImage={tofu} />
      <div className="menuCategories flex justify-center items-center mt-5 pb-10">
        <button className="px-14">Appetizers</button>
        <button className="px-14">Main Course</button>
        <button className="px-14">Desserts</button>
        <button className="px-14">Drinks</button>
      </div>
    </div>
  );
};

export default MenuTemplate;
