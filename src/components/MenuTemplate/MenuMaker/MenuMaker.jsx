function MenuMaker(props) {
  return (
    <div className="menu-card-container flex flex-wrap xl:mt-5 lg:mt-5 md:mt-5 mt-8">
      <div className="menu-desc ms-6">
        <div className="menu-desc-title">{props.title}</div>
        <div className="menu-desc-description">{props.description}</div>
      </div>
      <div className="menu-desc-price flex justify-center items-center xl:w-52 xl:h-[50px] xl:py-2 xl:ms-10 lg:w-52 lg:h-[50px] lg:py-2 lg:ms-10 md:w-52 md:h-[50px] md:py-2 md:ms-10 w-[150px] py-2 ms-6 mt-3">
        {props.price}
      </div>
    </div>
  );
}

export default MenuMaker;
