import { useState, useEffect } from "react"

import "./mainSlider.css"

import mainImage from '../images/mainImage.webp'
import deepTissue from '../images/massages/deepTissue.webp'
import bodyScrub from '../images/massages/bodyScrub.webp'

const sliderArr = [
    {
        image: `${mainImage}`,
        alt: 'bla1'

    },

    {
        image: `${deepTissue}`,
        alt: 'bla2'
    },

    {
        image: `${bodyScrub}`,
        alt: 'bla3'
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


                    index === slideIndex ? sliderimg = 'sliderIMG sliderIMG_active' : sliderimg = 'sliderIMG'
                    index === overlay    ? overlay   = 'overlayImageDeactive' : overlay = 'overlayImage'
                    
                    return (
                        <div className="sliderWrapper" key={slideIndex}>
                            <div className={overlay} />
                            <img className={sliderimg} src={item.image} alt={item.alt} />
                           
                        </div>
                    )


                })}
            </div>
        </>
    )
}