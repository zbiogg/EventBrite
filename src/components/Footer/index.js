/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'

function Footer() {
    
    return (
        <div>
            <footer className="site-footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-3">
                            <h6>Use Eventbrite</h6>
                            <ul className="footer-links">
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Eventbrite Mobile App</a></li>
                                <li><a href="#">COVID-19 (Coronavirus) Resources</a></li>
                                <li><a href="#">Eventbrite Check-In App</a></li>
                                <li><a href="#">Reserved Seating</a></li>
                                <li><a href="#">Content Standards</a></li>
                                <li><a href="#">Eventbrite App Marketplace</a></li>
                                <li><a href="#">RFID</a></li>
                                <li><a href="#">COVID-19 (Coronavirus) Resources</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-3 col-md-3">
                            <h6>Plan Events</h6>
                            <ul className="footer-links">
                                <li><a href="#">Conferences</a></li>
                                <li><a href="#">classNamees & Workshops</a></li>
                                <li><a href="#">Nonprofits & Fundraisers</a></li>
                                <li><a href="#">Reunions</a></li>
                                <li><a href="#">Sell Tickets</a></li>
                                <li><a href="#">Event Management & Planning</a></li>
                                <li><a href="#">Event Registration</a></li>
                                <li><a href="#">Online RSVP</a></li>

                            </ul>
                        </div>

                        <div className="col-xs-3 col-md-3">
                            <h6>Find Events</h6>
                            <ul className="footer-links">
                                <li><a href="#">Things to do in Toronto</a></li>
                                <li><a href="#">Things to do in Vancouver</a></li>
                                <li><a href="#">Things to do in Calgary</a></li>
                                <li><a href="#">Things to do in Ottawa</a></li>
                                <li><a href="#">Things to do in Montreal</a></li>
                                <li><a href="#">Things to do in Edmonton</a></li>
                                <li><a href="#">Things to do in London</a></li>
                                <li><a href="#">Things to do in Halifax</a></li>
                                <li><a href="#">Virtual Events</a></li>
                                <li><a href="#">All Cities</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-3 col-md-3">
                            <h6>Connect With Us</h6>
                            <ul className="footer-links">
                                <li><a href="#">Contact Support</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-2 col-md-2">
                            <p>© 2022 Eventbrite</p>
                        </div>

                        <div className="col-xs-8 col-md-8">
                            <ul className="v-effect-link" >
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Press</a></li>
                                <li><a href="#">Investors</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Developers</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Accessibility</a></li>
                                <li><a href="#">Cookies</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-2 col-md-2">
                            <select name="cars" id="cars" style={{backgroundColor:'#33353d',color:'rgb(255,255,255)'}}>
                                <option value="volvo">Canada(EN)</option>
                                <option value="saab">South Korea</option>
                                <option value="opel">Vietnamese</option>
                                <option value="audi">Japan</option>
                            </select>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
