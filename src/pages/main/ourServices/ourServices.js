import { Link } from "react-router-dom"
import MassageSlider from "../../../components/massageSlider/massageSlider"
import "./ourServices.css"

export default function OurServices(){
    return(
        <>
            <div className="OurServices">

                <div className="OurServices_inner">
                    <h2 className="thirdHeader">sugarland's services</h2>

                    <div className="massageSlider">
                        <MassageSlider />
                    </div>

                    <Link to='/pages/services/services'>
                        <div className="serviceBTN">
                                <p>See More</p>
                        </div>
                    </Link>
                </div>
            </div>
        
        </>
    )
}