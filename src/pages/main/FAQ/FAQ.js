import AccordionItem from "../../../components/accordionItem/accordionItem"
import "./FAQ.css"

export default function FAQ(){
    return(
        <>
            <div className="faq">

                <h1 className="faqHeader">FAQ</h1>

                <div className="accordion">
                    <AccordionItem />
                </div>
            </div>
        </>
    )
}