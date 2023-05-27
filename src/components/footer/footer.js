import "./footer.css"

export default function Footer(){
    return(
        <>
            <div className="footer">

                <h1 className="footerHeader">Sugarland Spa & Mobile Massage Therapy</h1>

                <div className="footerInner">

                    <div className="aboutUs">
                        <h2>About Us</h2>
                        <p>
                            Sugarland spa 
                            Mobile massage therapy 
                            Will bring luxury quality services at your location whatever you are home, hotel,office and etc
                            all our therapists are licensed and experienced have a vast background in massage therapy
                        </p>
                    </div>

                    <div className="workingHours">
                        <h2>Working Hours</h2>
                        <p>Monday - Sunday</p>
                        <p>6AM - Midnight</p>
                    </div>

                    <div className="contactUs">
                        <h2>Contact</h2>
                        <p>T:</p>
                        <p>M:</p>
                        <p>Email:</p>
                        <p>Adress:</p>
                    </div>
                </div>

                <p className="rights">Copyright © 2023 by Sugarland Spa & Mobile Massage Therapy | All Rights Reserved</p>
            </div>
        </>
    )
}