import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { massageList } from "../components/dataBase";
import Navbar from "../components/navbar/navbar";
import "./massages.css"
import burgerBlack from '../components/images/burgerMenuBlack.webp'
import logoBlack from '../components/images/logoBlack.webp'
import SEO from "../components/SEO";

export default function Massages(){
    const { linkName } = useParams();
    const massage = massageList.find(massage => massage.linkName === linkName);
    
    useEffect(()=>{
        document.body.classList.remove('overflowHidden');
    },[])
    
    return(
        <>
        <SEO title={massage.name} description={massage.description.paragraph1} />

        <Navbar
                bg='navbar whiteBG'
                navLinkColor='navMenuLinks black'
                logoColor={logoBlack}
                burgerWhite={burgerBlack} 
                burgerBlack={burgerBlack}
                firstLoad={burgerBlack}
        />

        <div className="massageBody">

            <div className="massageBody_inner">

                <img className="massagebodyCover" src={massage.image} alt={massage.alt}/>
                <h2 className="massageBodyHeader">{massage.name}</h2>
                {massage.description.paragraph1 ? <p>{massage.description.paragraph1}</p> : ''}
                {massage.description.paragraph2 ? <p>{massage.description.paragraph2}</p> : ''}
                {massage.description.paragraph3 ? <p>{massage.description.paragraph3}</p> : ''}
                {massage.description.paragraph4 ? <p>{massage.description.paragraph4}</p> : ''}

                {massage.description.header2 ? <h2>{massage.description.header2}</h2> : ''}

                {massage.description.paragraph5 ? <p>{massage.description.paragraph5}</p> : ''}

                {massage.description.list.listHeader1 ? <h4>{massage.description.list.listHeader1}</h4> : ''}
                {massage.description.list.listParagraph1 ? <p>{massage.description.list.listParagraph1}</p> : ''}

                {massage.description.list.listHeader2 ? <h4>{massage.description.list.listHeader2}</h4> : ''}
                {massage.description.list.listParagraph2 ? <p>{massage.description.list.listParagraph2}</p> : ''}
                {massage.description.list.listParagraphInner1 ? <p>{massage.description.list.listParagraphInner1}</p> : ''}
                {massage.description.list.listParagraphInner2 ? <p>{massage.description.list.listParagraphInner2}</p> : ''}
                {massage.description.list.listParagraphInner3 ? <p>{massage.description.list.listParagraphInner3}</p> : ''}

                {massage.description.list.listHeader3 ? <h4>{massage.description.list.listHeader3}</h4> : ''}
                {massage.description.list.listParagraph3 ? <p>{massage.description.list.listParagraph3}</p> : ''}

                {massage.description.list.listHeader4 ? <h4>{massage.description.list.listHeader4}</h4> : ''}
                {massage.description.list.listParagraph4 ? <p>{massage.description.list.listParagraph4}</p> : ''}

                {massage.description.list.listHeader5 ? <h4>{massage.description.list.listHeader5}</h4> : ''}
                {massage.description.list.listParagraph5 ? <p>{massage.description.list.listParagraph5}</p> : ''}

                {massage.description.list.listHeader6 ? <h4>{massage.description.list.listHeader6}</h4> : ''}
                {massage.description.list.listHeader7 ? <h4>{massage.description.list.listHeader7}</h4> : ''}

                {massage.description.paragraph6 ? <p>{massage.description.paragraph6}</p> : ''}
            </div>

        </div>
        </>
        
    )
}