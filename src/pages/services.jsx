import { useEffect } from "react";
import "./services.css"
import { massageList } from '../components/dataBase'
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import SEO from "../components/SEO";
import logoBlack from '../components/images/logoBlack.webp'
import burgerBlack from '../components/images/burgerMenuBlack.webp'

export default function Services() {

    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])

    return (
        <>
            <SEO title="Sugarland Spa Mobile Massage Therapy" description="Sugarland Spa Mobile Massage Therapy, Luxury massage at your place, We will bring high quality spa services at your place, Sugarland spa comes to you to provide the best service,Deep Tissue Massage,  Swedish Massage, Ashiatsu Barefoot Massage, Thai Massage, Hot Stone Massage, Prenatal Massage, Four Hand Massage, Couples Massage, Cupping Massage, Wood Therapy Massage, Honey Massage, Body Scrub, Lymphatic Drainage Massage, Lomi Lomi Massage."/>

            <Navbar
                bg='navbar whiteBG'
                navLinkColor='navMenuLinks black'
                logoColor={logoBlack}
                burgerWhite={burgerBlack} 
                burgerBlack={burgerBlack}
                firstLoad={burgerBlack}
            />

            <div className="Services">
                <div className="services_inner">
                    <h2 className="thirdHeader">Sugarland's Services</h2>

                    <div className="massages">
                        <div className="firstHalf">
                            {
                                massageList.map((item) => {
                                    return (
                                        <div className="massageCard" key={item.name}>
                                            <img loading="lazy" src={item.image} className="massageCardImg" alt="massage card" />

                                            <div className="massageCardDesc">
                                                <h2 className="massageHeader">{item.name}</h2>
                                                <p className="shortDescr">{item.shortDescription}</p>
                                                <Link title={item.linkTitle} to={`/pages/massages/${item.linkName}`}>
                                                    <div className="massageBTN">About</div>
                                                </Link>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}