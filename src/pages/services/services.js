import "./services.css"
import { massageList } from '../../components/dataBase'
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

export default function Services(){

    const firstHalfArray = massageList.slice(0, massageList.length / 2)
    const secondHalfArray = massageList.slice(massageList.length / 2);

    return(
        <>
            <Navbar 
                bg='navbar whiteBG' 
                navLinkColor='navMenuLinks black'
                logoColor='logoP black'
                burgerGivenColor='burgerMenuBlack'
            />

            <div className="Services">
                <h1 className="thirdHeader">Services</h1>

                <div className="massages">
                    <div className="firstHalf">
                        {
                            firstHalfArray.map( (item) => {
                                return(
                                    <div className="massageCard" key={item.name}>
                                        <img src={item.image} className="massageCardImg" alt="massage card image" />

                                        <div className="massageCardDesc">
                                            <h2 className="massageHeader">{item.name}</h2>
                                            <p className="shortDescr">{item.shortDescription}</p>
                                            <Link to={`/pages/massages/massages/${item.id}`}><div className="massageBTN">Explore</div></Link>
                                            
                                        </div>

                                    </div>
                                )
                            })
                        }
                        
                    </div>

                    {/* *************************** */}

                    <div className="secondtHalf">
                        {
                            secondHalfArray.map( (item) => {
                                return(
                                    <div className="massageCard" key={item.id}>
                                        <img src={item.image} className="massageCardImg" alt="massage card image" />

                                        <div className="massageCardDesc">
                                            <h2 className="massageHeader">{item.name}</h2>
                                            <p className="shortDescr">{item.shortDescription}</p>
                                            <Link to={`/pages/massages/massages/${item.id}`}><div className="massageBTN">Explore</div></Link>
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