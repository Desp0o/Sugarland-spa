import { useState, useEffect } from "react"

import "./mainSlider.css"

import lomiLomiMassage from '../images/lomilomiMassage.jpg'
import thaiMassage from '../images/thaiMassage.jpg'

const sliderArr = [
    {
        image: `${lomiLomiMassage}`,
        alt: 'bla1'

    },

    {
        image: `${thaiMassage}`,
        alt: 'bla2'
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


                    if (index === 1) {
                        sliderimg = 'sliderIMG sliderIMG_active'
                    }

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