import "./footer.css"

export default function Footer(){
    return(
        <>
            <div className="footer">

                <h2 className="footerHeader">Sugarland Spa Mobile Massage Therapy</h2>

                <div className="footerInner">

                    <div className="aboutUs">
                        <h3>About Us</h3>
                        <p>
                            Sugarland spa 
                            Mobile massage therapy 
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
                        <p>T: 786 414 4947</p>
                        <p>info@sugarlandspamassage.com	</p>
                        <p>245 ne 14th st, <br/>
                        <span></span>Miami Florida,<br/>
                        <span></span>33132</p>
                    </div>
                </div>

                <p className="rights">Copyright © 2023 by Sugarland Spa Mobile Massage Therapy | All Rights Reserved</p>
            </div>
        </>
    )
}