import MenuMaker from "../MenuMaker";

function MenuSection({ menuData, menuImage }) {
  return (
    <div className="flex flex-wrap justify-center py-16">
      <div className="menu-img">
        <img
          src={menuImage}
          alt="Menu"
          className="xl:w-auto xl:ms-0 lg:w-[550px] lg:ms-8 md:w-[550px] md:ms-8 w-[250px]"
        />
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
