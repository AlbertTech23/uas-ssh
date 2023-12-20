import React, { useState } from 'react';
import "./PackageCard.scss";
import closeHover from "../assets/close.svg";

function PackageCard(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="flex-container">
            <div className="card card-bordered rounded-lg xl:my-8 my-2 relative">
                <div
                    className="packageCard flex items-end justify-center card-image relative overflow-hidden rounded-lg"
                    onMouseEnter={() => setIsShown(true)}>
                    <img 
                        src={props.img}
                        className="menu-image xl:w-[507px] xl:h-[302px] lg:w-[400px] lg:h-[234px] md:w-[330px] md:h-[196px] rounded-[10px] object-cover object-center brightness-down"
                        alt={props.name}
                    />

                    <h1 className="packageLetter absolute">
                        {props.name}
                    </h1>

                    <div id="desktopPack" className={`cardHover absolute xl:w-[507px] xl:h-[302px] lg:w-[400px] lg:h-[234px] md:w-[330px] md:h-[196px] rounded-[10px] ${isShown ? 'visible' : 'hidden'}`}>
                        <button onClick={() => setIsShown(false)}>
                            <img className="closeButton mt-[9px] ml-[11px] md:h-[18px] md:w-[18px] h-[26px] w-[26px]" src={closeHover} alt="Close" />
                        </button>
                        <p className="packHeading">{props.name}</p>
                        <p className="packSubheading">PACKAGE</p>

                        <div className="lg:mx-8 md:mx-6 md:mt-2 mx-10 mt-5 grid grid-cols-2 grid-rows-2 gap-2">
                            <div>
                                <div className="flex justify-start">
                                    <button className="packButton">Appetizers</button>
                                </div>
                                <div className="flex justify-start">
                                    <p className="packAmount">{props.appA1}&nbsp;</p>
                                    <p className="packName">{props.appN1}</p>
                                </div>
                                <div className="flex justify-start">
                                    <p className="packAmount">{props.appA2}&nbsp;</p>
                                    <p className="packName">{props.appN2}</p>
                                </div>
                                <div className="flex justify-start">
                                    <p className="packAmount">{props.appA3}&nbsp;</p>
                                    <p className="packName">{props.appN3}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-end">
                                    <button className="packButton">Main Course</button>
                                </div>
                                <div className="flex justify-end">
                                    <p className="packAmount">{props.mainA1}&nbsp;</p>
                                    <p className="packName">{props.mainN1}</p>
                                </div>
                                <div className="flex justify-end">
                                    <p className="packAmount">{props.mainA2}&nbsp;</p>
                                    <p className="packName">{props.mainN2}</p>
                                </div>
                                <div className="flex justify-end">
                                    <p className="packAmount">{props.mainA3}&nbsp;</p>
                                    <p className="packName">{props.mainN3}</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-start">
                                    <button className="packButton">Desserts</button>
                                </div>
                                <div className="flex justify-start">
                                    <p className="packAmount">{props.desA1}&nbsp;</p>
                                    <p className="packName">{props.desN1}</p>
                                </div>
                                <div className="flex justify-start">
                                    <p className="packAmount">{props.desA2}&nbsp;</p>
                                    <p className="packName">{props.desN2}</p>
                                </div>
                                <div className="flex justify-start">
                                    <p className="packAmount">{props.desA3}&nbsp;</p>
                                    <p className="packName">{props.desN3}</p>
                                </div>
                            </div>
                            <div>
                            <div className="flex justify-end">
                                    <button className="packButton">Drinks</button>
                                </div>
                                <div className="flex justify-end">
                                    <p className="packAmount">{props.drinkA1}&nbsp;</p>
                                    <p className="packName">{props.drinkN1}</p>
                                </div>
                                <div className="flex justify-end">
                                    <p className="packAmount">{props.drinkA2}&nbsp;</p>
                                    <p className="packName">{props.drinkN2}</p>
                                </div>
                                <div className="flex justify-end">
                                    <p className="packAmount">{props.drinkA3}&nbsp;</p>
                                    <p className="packName">{props.drinkN3}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageCard;
