import "./cardForSection.css"
export default function CardForSection(props){
    return(
        <div className="cardSmall">
            <img className="cardSmallIcon" src={props.icon} alt="card icon"/>

            <h5 className="cardSmallTitle">{props.title}</h5>
            <p className="cardSmallDescription">{props.description}</p>
        </div>
    )
}