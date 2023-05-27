import MainSlider from "../../components/mainSlider/mainSlider";
import MainTxt from "./mainTxt"
import SectionSecond from "./secondSection/sectionSecond";
import Navbar from '../../components/navbar/navbar'
import OurServices from "./ourServices/ourServices";
import FAQ from "./FAQ/FAQ";

import burgerWhite from '../../components/images/burgerMenu.webp'
import burgerBlack from '../../components/images/burgerMenuBlack.webp'

export default function Home(){
    return(
        <>
        <Navbar burgerWhite={burgerWhite} burgerBlack={burgerBlack}/>
        <MainSlider />
        <MainTxt />
        <SectionSecond />
        <OurServices />
        <FAQ />
        </>
    )
}