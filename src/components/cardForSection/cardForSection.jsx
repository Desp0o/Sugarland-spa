import "./cardForSection.css"
export default function CardForSection(props){
    return(
        <div className="cardSmall">
            <img className="cardSmallIcon" src={props.icon} alt="sugarland spa mobile massage bg icon"/>

            <p className="cardSmallTitle">{props.title}</p>
            <p className="cardSmallDescription">{props.description}</p>
        </div>
    )
}