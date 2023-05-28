import { Link } from 'react-router-dom'
import './main.css'

export default function MainTxt(){
    return(
        <div className="mainBgTexts">
            
            <h1 className="SugarlandSpa">Sugarland Spa</h1> 
            <p className="SugarlandSpa2">Mobile massage therapy </p> 
            <p className='LuxuryMassage'>Luxury massage at your place</p>

            <Link to='/pages/services/services'>
                <div className='mainBTN'>
                    <p>Explore</p>
                </div>
            </Link>
        </div>
    )
}