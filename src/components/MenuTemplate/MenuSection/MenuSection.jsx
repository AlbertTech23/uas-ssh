import MenuMaker from "../MenuMaker";

function MenuSection({ menuData, menuImage }) {
  return (
    <div className="flex justify-center py-16">
      <div className="menu-img">
        <img src={menuImage} alt="Menu" />
      </div>
      <div className="menu-detail flex flex-col justify-around mb-2">
        {menuData.map((menuItem) => (
          <MenuMaker
            key={menuItem.id}
            title={menuItem.title}
            description={menuItem.description}
            price={menuItem.price}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
