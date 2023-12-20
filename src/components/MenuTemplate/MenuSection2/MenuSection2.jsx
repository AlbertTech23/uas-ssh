import MenuMaker from "../MenuMaker";

function MenuSection2({ menuData, menuImage }) {
  return (
    <div className="flex flex-wrap-reverse justify-center xl:py-16 lg:py-16 md:py-16 py-8">
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
        <img
          src={menuImage}
          alt="Menu"
          className="xl:w-auto xl:ms-0 lg:w-[550px] lg:ms-8 md:w-[550px] md:ms-8 w-[250px]"
        />
      </div>
    </div>
  );
}

export default MenuSection2;
