function MenuMaker(props) {
  return (
    <div className="menu-card-container flex">
      <div className="menu-desc ms-6">
        <div className="menu-desc-title">{props.title}</div>
        <div className="menu-desc-description">{props.description}</div>
      </div>
      <div className="menu-desc-price h-[50px] flex justify-center items-center px-10 py-2 ms-10">
        {props.price}
      </div>
    </div>
  );
}

export default MenuMaker;
