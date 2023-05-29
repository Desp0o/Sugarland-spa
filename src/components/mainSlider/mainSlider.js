import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./mainSlider.css"

import mainImage from '../images/mainImage.webp'
import deepTissue from '../images/massages/deepTissue.webp'
import lomiLomi from '../../components/images/massages/lomilomi.webp'

const sliderArr = [
    {
        image: `${mainImage}`,
        alt: 'main massage slider 1',
        header:'Sugarland Spa',
        text1:'Mobile massage therapy',
        text2: 'Luxury massage at your place'
    },

    {
        image: `${deepTissue}`,
        alt: 'main massage slider 2',
        header:'Sugarland Spa',
        text1:'We will bring high quality spa services at your place',
        text2: 'All you need to give us call'
    },

    {
        image: `${lomiLomi}`,
        alt: 'main massage slider 3',
        header:'Sugarland Spa',
        text1:'Sugarland spa comes to you to provide the best service',
        text2: ''
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
    }, [index])

    return (
        <>
            <div className="slider">
                {sliderArr.map((item, slideIndex) => {


                    let sliderimg = 'sliderIMG'
                    let overlay = 'overlayImage'
                    let SugarlandSpa = 'SugarlandSpa'
                    let SugarlandSpa2 = 'SugarlandSpa2'
                    let LuxuryMassage = 'LuxuryMassage'

                    index === slideIndex ? sliderimg = 'sliderIMG sliderIMG_active' : sliderimg = 'sliderIMG'
                    index === slideIndex ? SugarlandSpa = 'SugarlandSpa' : SugarlandSpa = 'SugarlandSpa opacity0'
                    index === slideIndex ? SugarlandSpa2 = 'SugarlandSpa2' : SugarlandSpa2 = 'SugarlandSpa2 opacity0'
                    index === slideIndex ? LuxuryMassage = 'LuxuryMassage' : LuxuryMassage = 'LuxuryMassage opacity0'
                    
                    return (
                        <div className="sliderWrapper" key={slideIndex}>
                            <div className={overlay} />
                            <img className={sliderimg} src={item.image} alt={item.alt} />

                            <div className="mainBgTexts">
            
                                <h1 className={SugarlandSpa}>{item.header}</h1> 
                                <p className={SugarlandSpa2}>{item.text1}</p> 
                                <p className={LuxuryMassage}>{item.text2}</p>

                                
                            </div>
                           
                        </div>
                    )


                })}
                        <Link to='/pages/services/services'>
                            <div className='mainBTN'>
                                <p>Explore</p>
                            </div>
                        </Link>
            </div>
        </>
    )
}