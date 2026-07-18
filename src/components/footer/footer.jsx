import "./footer.css"

export default function Footer(){
    return(
            <footer className="footer">

                <div className="footer_inner">
                    <h2 className="footerHeader">Namour Massage</h2>

                    <div className="footerInner">

                        <div className="aboutUs">
                            <h3>About Us</h3>
                            <p>
                                Namour Massage
                                Will bring luxury quality services at your location whatever you are home, hotel,office and etc
                                all our therapists are licensed and experienced have a vast background in massage therapy
                            </p>
                        </div>

                        <div className="workingHours">
                            <h3>Working Hours</h3>
                            <p>Monday - Sunday</p>
                            <p>6AM - 12AM</p>
                        </div>

                        <div className="contactUs">
                            <h3>Contact</h3>
                            <p>T: 786 531 0916</p>
                            <p>Namourmassage@gmail.com	</p>
                            <p>245 ne 14th st, <br/>
                            <span></span>Miami Florida,<br/>
                            <span></span>33132</p>
                        </div>
                    </div>

                    <p className="rights">Copyright © 2026 by Namour Massage | All Rights Reserved</p>
                </div>

            </footer>
    )
}