function MenuMaker(props) {
  return (
    <div className="menu-card-container flex flex-wrap lg:mt-5 md:mt-5">
      <div className="menu-desc ms-6">
        <div className="menu-desc-title">{props.title}</div>
        <div className="menu-desc-description">{props.description}</div>
      </div>
      <div className="menu-desc-price flex justify-center items-center xl:w-auto xl:h-[50px] xl:px-10 xl:py-2 xl:ms-10 lg:w-auto lg:h-[50px] lg:px-10 lg:py-2 lg:ms-10 md:w-auto md:h-[50px] md:px-10 md:py-2 md:ms-10 w-[150px] py-2 ms-6 mt-3">
        {props.price}
      </div>
    </div>
  );
}

export default MenuMaker;
