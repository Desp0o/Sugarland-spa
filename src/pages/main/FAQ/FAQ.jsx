import AccordionItem from "../../../components/accordionItem/accordionItem"
import "./FAQ.css"

export default function FAQ(){
    return(
            <section className="faq">

                <div className="faq_inner">

                    <h2 className="faqHeader">FAQ</h2>

                    <div className="accordion">
                        <AccordionItem />
                    </div>

                </div>
            </section>
    )
}