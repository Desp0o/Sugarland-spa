import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { massageList } from "../dataBase"


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
                
                 {
                    massageList.map((slide) => {
                        return(
                           
                           
                           <Link className="massageBlock" to={`/pages/massages/massages/${slide.linkName}`}>
                            <img className="massageBlock_cover" src={slide.image} alt={slide.alt}/>
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
                        )
                    })
                 }  
                    

               
            </div>
        </>
    );
}


export default MassageSlider