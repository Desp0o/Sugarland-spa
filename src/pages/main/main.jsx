import { useEffect } from "react";

import MainSlider from "../../components/mainSlider/mainSlider";
import SectionSecond from "./secondSection/sectionSecond";
import Navbar from '../../components/navbar/navbar'
import OurServices from "./ourServices/ourServices";
import FAQ from "./FAQ/FAQ";

import burgerWhite from '../../components/images/burgerMenu.webp'
import burgerBlack from '../../components/images/burgerMenuBlack.webp'
import React from "react";
import SEO from "../../components/SEO";


const  Home = ()=>{

    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])

    return(
        <>
        <SEO title="Sugarland Spa Mobile Massage Therapy" description="Sugarland Spa Mobile Massage Therapy, Luxury massage at your place, We will bring high quality spa services at your place, Sugarland spa comes to you to provide the best service,Deep Tissue Massage,  Swedish Massage, Ashiatsu Barefoot Massage, Thai Massage, Hot Stone Massage, Prenatal Massage, Four Hand Massage, Couples Massage, Cupping Massage, Wood Therapy Massage, Honey Massage, Body Scrub, Lymphatic Drainage Massage, Lomi Lomi Massage."/>
        <Navbar burgerWhite={burgerWhite} burgerBlack={burgerBlack}/>
        <MainSlider />
        <OurServices />
        <FAQ />
        <SectionSecond />
        </>
    )
}

export default Home;