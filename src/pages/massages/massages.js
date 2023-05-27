import { useParams } from "react-router-dom"
import { massageList } from "../../components/dataBase";
import Navbar from "../../components/navbar/navbar";
import "./massages.css"

export default function Massages(){
    const { id } = useParams();
    const massage = massageList[id]
    console.log(massage);
    
    
    return(
        <>
        <Navbar 
            bg='navbar whiteBG' 
            navLinkColor='navMenuLinks black'
            logoColor='logoP black'
        />
        <div className="massageBody">
            <img className="massagebodyCover" src={massage.image} alt="massage body cover"/>
            <p>{massageList[id].name}</p>
            {massage.description.paragraph1 ? <p>{massage.description.paragraph1}</p> : ''}
            {massage.description.paragraph2 ? <p>{massage.description.paragraph2}</p> : ''}
            {massage.description.paragraph3 ? <p>{massage.description.paragraph3}</p> : ''}
            {massage.description.paragraph4 ? <p>{massage.description.paragraph4}</p> : ''}
        </div>
        </>
        
    )
}