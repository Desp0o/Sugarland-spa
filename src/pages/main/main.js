import MainSlider from "../../components/mainSlider/mainSlider";
import MainTxt from "./mainTxt"
import SectionSecond from "./secondSection/sectionSecond";
import Navbar from '../../components/navbar/navbar'
import OurServices from "./ourServices/ourServices";
import FAQ from "./FAQ/FAQ";


export default function Home(){
    return(
        <>
        <Navbar />
        <MainSlider />
        <MainTxt />
        <SectionSecond />
        <OurServices />
        <FAQ />
        </>
    )
}