import "./cardForSection.css"
export default function CardForSection(props){
    return(
        <div className="cardSmall">
            <img className="cardSmallIcon" src={props.icon} alt="card icon"/>

            <h2 className="cardSmallTitle">{props.title}</h2>
            <p className="cardSmallDescription">{props.description}</p>
        </div>
    )
}