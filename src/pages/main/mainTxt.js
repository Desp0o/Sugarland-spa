import { Link } from 'react-router-dom'
import './main.css'

export default function MainTxt(){
    return(
        <div className="mainBgTexts">
            
            <p className="SugarlandSpa">Sugarland Spa & Mobile massage therapy</p> 
            <h1 className='LuxuryMassage'>Luxury massage at your place</h1>

            <Link to='/pages/services/services'>
                <div className='mainBTN'>
                    <p>Explore</p>
                </div>
            </Link>
        </div>
    )
}