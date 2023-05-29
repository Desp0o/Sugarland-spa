import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { massageList } from "../dataBase"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./massageSlider.css";


const MassageSlider = ()=> {
    const [slideNumber, setSlideNumber] = useState('3')

    useEffect(()=>{
        if(window.innerWidth < 1300){
            setSlideNumber(2)
        }

        if(window.innerWidth < 800){
            setSlideNumber(1)
        }
    },[])
    return (
        <>
            <div className="sliderContainer">
                <Swiper
                    slidesPerView={slideNumber}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper"
                >
                    {
                        massageList.map((slide) => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <Link to={`/pages/massages/massages/${slide.id}`}>
                                        <img src={slide.image} alt="massage slider"/>
                                        <h2 
                                            className={
                                                slide.name === "Ashiatsu barefoot massage" ||
                                                slide.name ===  "Wood therapy massage" ||
                                                slide.name ===  "Lymphatic drainage massage"
                                                                ? "sliderSwiperHeaderSmall" : 'sliderSwiperHeader'
                                            }
                                        >
                                            {slide.name}
                                        </h2>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </>
    );
}


export default MassageSlider