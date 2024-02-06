import CardForSection from "../../../components/cardForSection/cardForSection"
import "./sectionSecond.css"

import team from "../../../components/images/icons/leaf1.webp"
import service from "../../../components/images/icons/leaf2.webp"
import rehabilate from "../../../components/images/icons/leaf3.webp"
import mobile from "../../../components/images/icons/leaf4.webp"

export default function SectionSecond(){
    return(
        <>
            <div className="secondSec">

                <div className="secondSec_inner">

                    <h2 className="secHeader">How Sugarland Spa Works</h2>

                    <div className="secCards">
                        <CardForSection icon={team} title="Specialized Team" description="Expert therapists providing specialized massages and spa treatments"/>
                        <CardForSection icon={service} title="Quality Service" description="Elevate your senses with our unrivaled quality service in massage and spa"/>
                        <CardForSection icon={rehabilate} title="Rehabilitate" description="Our massage and spa services offer a perfect blend of relaxation and rehabilitation"/>
                        <CardForSection icon={mobile} title="Mobile" description="Spa service delivered to your doorstep for ultimate relaxation"/>
                    </div>

                </div>
            </div>
        </>
    )
}