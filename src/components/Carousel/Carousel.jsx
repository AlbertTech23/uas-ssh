import React, { useState } from "react";
import '../Carousel/StyleCarousel.css'
import { image } from './data';
import kiri from '../../assets/gambar/left.png'
import kanan from '../../assets/gambar/right.png'
import nasi from '../../assets/gambar/nasi.jpg'

function Carousel() {
    const [idImage, setIdIamge] = useState(0)

    const mystyle = {
        backgroundImage: `url(${image[idImage].images})`
    }

    return (
        <div className="contain">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image[0].images} className="gambar" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 mt-5">
                        <div className="fix-posisi">
                            <a href="#slide4" className="btn-neutral"><img className="kiri" src={kiri} /></a>
                        </div>
                        <div className="text">
                            <h1>{image[0].nama}</h1>
                            <span className="coba-para">{image[0].desk}</span>
                            <button type="button" className="button btn1"><span>OUR MENU</span></button>
                        </div>
                        <div className="fix-posisi">
                            <a href="#slide2" className="btn-neutral"><img className="kanan" src={kanan} /></a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image[1].images} className="gambar" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="fix-posisi">
                            <a href="#slide1" className="btn-neutral"><img className="kiri" src={kiri} /></a>
                        </div>
                        <div className="text">
                            <h1>{image[1].nama}</h1>
                            <span className="coba-para">{image[1].desk}</span>
                            <button type="button" className="button btn1">OUR MENU</button>
                        </div>
                        <div className="fix-posisi">
                            <a href="#slide3" className="btn-neutral"><img className="kanan" src={kanan} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;