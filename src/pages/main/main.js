import { useEffect } from "react";

import MainSlider from "../../components/mainSlider/mainSlider";
import SectionSecond from "./secondSection/sectionSecond";
import Navbar from '../../components/navbar/navbar'
import OurServices from "./ourServices/ourServices";
import FAQ from "./FAQ/FAQ";

import burgerWhite from '../../components/images/burgerMenu.webp'
import burgerBlack from '../../components/images/burgerMenuBlack.webp'
import React from "react";


const  Home = ()=>{

    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])

    return(
        <>
        <Navbar burgerWhite={burgerWhite} burgerBlack={burgerBlack}/>
        <MainSlider />
        <OurServices />
        <FAQ />
        <SectionSecond />
        </>
    )
}

export default Home;