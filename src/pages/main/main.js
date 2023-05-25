import MainSlider from "../../components/mainSlider/mainSlider";
import MainTxt from "./mainTxt"
import SectionSecond from "./secondSection/sectionSecond";
import Navbar from '../../components/navbar/navbar'
export default function Home(){
    return(
        <>
        <Navbar />
        <MainSlider />
        <MainTxt />
        <SectionSecond />
        </>
    )
}