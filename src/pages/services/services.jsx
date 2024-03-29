import { useEffect } from "react";
import "./services.css"
import { massageList } from '../../components/dataBase'
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

import logoBlack from '../../components/images/logoBlack.webp'
import burgerBlack from '../../components/images/burgerMenuBlack.webp'

export default function Services() {

    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])

    return (
        <>
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
                                                <Link title={item.linkTitle} to={`/pages/massages/massages/${item.linkName}`}>
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