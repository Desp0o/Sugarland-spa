import CardForSection from "../../../components/cardForSection/cardForSection"
import "./sectionSecond.css"

import team from "../../../components/images/icons/team.webp"
import service from "../../../components/images/icons/service.webp"
import rehabilate from "../../../components/images/icons/rehabilate.webp"

export default function SectionSecond(){
    return(
        <>
            <div className="secondSec">
                <h1 className="secHeader">How Sugarland Spa Works</h1>

                <div className="secCards">
                    <CardForSection icon={team} description="Specialized Team"/>
                    <CardForSection icon={service} description="Quality Service"/>
                    <CardForSection icon={rehabilate} description="Rehabilitate"/>
                </div>
            </div>
        </>
    )
}