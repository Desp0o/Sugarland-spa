import { useState } from "react"
import "./accordionItem.css"

export default function AccordionItem(){

    const [activeItem, setActiveItem] = useState(null);

    const accordionItems = [
        { title: 'Why mobile massage?', content: 'Because spa service comes to you' },
        { title: 'Why you need to choose Sugarland spa mobile massage therapy?', content: 'Because Sugarland spa mobile massage therapy have the best massage therapist. We will bring to you high quality services. you\'ll be feeling relaxed, your blood will be flowing and your muscles should feel like jello.' },
        { title: 'How will a massage benefit me?', content: 'Massage is one of the healthiest and easiest ways to manage pain, tension, and stress. Practicing self-care can help people cope better with difficulties in daily living and has been shown to significantly reduce anxiety.' },
        { title: 'What type of lotion/oil our therapists use?', content: 'Sugarland spa uses biotin massage Creme and lotion which is professional products' },
        { title: 'What measures are taken to avoid hygiene issues?', content: 'Exposed surfaces are thoroughly cleaned and sanitized using an environmentally friendly cleaner. New linens are used for each session' },
        { title: 'What massage therapy treatment would work best for me?', content: 'The technique that works best for you depends on how you’re feeling We offer a variety of treatments. What techniques are used to treat each client, is left up to Sugarland spa mobile massage therapist to decide after you have communicated with them what kind of problems you’re having. You can always request a specific type of massage and confirm ahead of time that your knowledge therapist specializes in that technique.' },
        { title: 'How Sugarland spa Mobile massage therapy work?', content: 'We make the process of massage therapy as easy as possible. We come to your place Whatever you are. Our therapists bring their table and other equipment to you. All you have to do is give us a call. We’re happy to do the rest!' },
        { title: 'Is a massage once a month necessary?', content: 'Having a massage therapy treatment once a month is useful if you have preventative measure that you want to take, or if you want to manage stress. If you want to alleviate an injury or chronic tightness then Sugarland spa recommend trying to get treatment down in weekly sessions.' },
        { title: 'What are the different types of services you offer?', content: 'Sugarland spa Mobile massage therapy offer Ashiatsu,Lymphatic Drainage, Four Hands massage, deep tissue Swedish and much more!' },
      ];

    return(
        <>
            <div className="accordionContainer">
                {
                    accordionItems.map((accordion, index) => {
                        return(
                                <div className="accordionItem" key={index} onClick={() => {
                                        if(activeItem === index){
                                            setActiveItem(null)
                                        }else{
                                            setActiveItem(index)
                                        }
                                    }}
                                >
                                    <div className="accordionQuestion">
                                        <p>{accordion.title}</p>
                                    </div>

                                    <div className={activeItem === index ? "accordionAnswer accordionAnswerActive" : "accordionAnswer"}>
                                    <p>{accordion.content}</p>
                                    </div>
                                </div>
                        )
                    })
                }

            </div>
        </>
    )
}