import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./mainSlider.css"
import "../../pages/main/main.css"

import mainImage from '../images/mainImage.webp'
import deepTissue from '../images/massages/deepTissue.webp'
import lomiLomi from '../../components/images/massages/lomilomi.webp'

const sliderArr = [
    {
        image: `${mainImage}`,
        header:'',
        text1:'Mobile massage therapy',
        text2: '',
        text3: 'Luxury massage at your place'
    },

    {
        image: `${deepTissue}`,
        header:'',
        text1:'We will bring high quality spa services at your place',
        text2: 'All you need to give us call',
        text3: ''
    },

    {
        image: `${lomiLomi}`,
        header:'',
        text1:'Sugarland spa comes to you to provide the best service',
        text2: '',
        text3: ''
    }
]

export default function MainSlider() {

    const [index, setIndex] = useState(0)
    const slideLength = sliderArr.length

    useEffect(() => {

        const textTimer = setInterval(() => {
            if (index === slideLength - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }

        }, 6000)

        return () => {
            clearInterval(textTimer)
        }
    }, [index, slideLength])

    return (
        <>
            <div className="slider">
                {sliderArr.map((item, slideIndex) => {


                    let sliderimg = 'sliderIMG'
                    let overlay = 'overlayImage'
                    let SugarlandSpa = 'SugarlandSpa'
                    let SugarlandSpa2 = 'SugarlandSpa2'
                    let LuxuryMassage = 'LuxuryMassage'
                    let marginText = 'LuxuryMassageMargin'

                    index === slideIndex ? sliderimg = 'sliderIMG sliderIMG_active' : sliderimg = 'sliderIMG'
                    index === slideIndex ? SugarlandSpa = 'SugarlandSpa' : SugarlandSpa = 'SugarlandSpa opacity0'
                    index === slideIndex ? SugarlandSpa2 = 'SugarlandSpa2' : SugarlandSpa2 = 'SugarlandSpa2 opacity0'
                    index === slideIndex ? LuxuryMassage = 'LuxuryMassage' : LuxuryMassage = 'LuxuryMassage opacity0'
                    index === slideIndex ? marginText = 'LuxuryMassageMargin' : LuxuryMassage = 'LuxuryMassageMargin opacity0'
                    
                    return (
                        <div className="sliderWrapper" key={slideIndex}>
                            <div className={overlay} />
                            <img className={sliderimg} src={item.image} alt="main slider image" />

                            <div className="mainBgTexts">
            
                                <h1 className={SugarlandSpa}>Sugarland Spa</h1> 
                                <p className={SugarlandSpa2}>{item.text1}</p> 
                                <p className={LuxuryMassage}>{item.text2}</p>
                                <p className={marginText}>{item.text3}</p>

                                
                            </div>
                           
                        </div>
                    )


                })}
                        <Link to='/pages/services/services' title="sugarland spa mobile massage services">
                            <div className='mainBTN'>
                                <p>Explore</p>
                            </div>
                        </Link>
            </div>
        </>
    )
}