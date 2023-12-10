import MenuMaker from "../MenuMaker";

function MenuSection2({ menuData, menuImage }) {
  return (
    <div className="flex justify-center py-16">
      <div className="menu-detail flex flex-col justify-around mb-2 me-5">
        {menuData.map((menuItem) => (
          <MenuMaker
            key={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            price={menuItem.price}
          />
        ))}
      </div>
      <div className="menu-img me-5">
        <img src={menuImage} alt="Menu" />
      </div>
    </div>
  );
}

export default MenuSection2;
