import { Link } from "react-router-dom"
import MassageSlider from "../../../components/massageSlider/massageSlider"
import "./ourServices.css"
import flower from "../../../components/images/132.png"

export default function OurServices(){
    return(
        <>
            <div className="OurServices">
                <h1 className="thirdHeader">our services</h1>

                <div className="massageSlider">
                    <MassageSlider />
                </div>

                <div className="serviceBTN">
                    <Link to='/pages/services/services'>
                        <p>See More</p>
                    </Link>
                    
                </div>
            </div>
        
        </>
    )
}