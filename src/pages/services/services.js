import "./services.css"
import { massageList } from '../../components/dataBase'
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

import burgerWhite from '../../components/images/burgerMenu.webp'
import burgerBlack from '../../components/images/burgerMenuBlack.webp'

export default function Services() {

    return (
        <>
            <Navbar
                bg='navbar whiteBG'
                navLinkColor='navMenuLinks black'
                logoColor='logoP black'
                burgerWhite={burgerBlack} 
                burgerBlack={burgerBlack}
                firstLoad={burgerBlack}
            />

            <div className="Services">
                <h1 className="thirdHeader">Services</h1>

                <div className="massages">
                    <div className="firstHalf">
                        {
                            massageList.map((item) => {
                                return (
                                    <div className="massageCard" key={item.name}>
                                        <img src={item.image} className="massageCardImg" alt="massage card" />

                                        <div className="massageCardDesc">
                                            <h2 className="massageHeader">{item.name}</h2>
                                            <p className="shortDescr">{item.shortDescription}</p>
                                            <Link to={`/pages/massages/massages/${item.id}`}>
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
        </>
    )
}