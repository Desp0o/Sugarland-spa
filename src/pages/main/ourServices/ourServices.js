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

                <Link to='/pages/services/services'>
                    <div className="serviceBTN">
                            <p>See More</p>
                    </div>
                </Link>
            </div>
        
        </>
    )
}