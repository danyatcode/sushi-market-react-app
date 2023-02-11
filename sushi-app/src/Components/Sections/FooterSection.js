export default function Footer(){
    return(
        <section className="section-footer">
            <div className="footer-grid">

                <div className="footer-inner">
                    <img style={{filter : "invert(1)"}} alt="sushi" src="./images/icons/sushi.svg" className="footer-inner-logo"></img>
                    <div className="footer-inner-description">
                        Lorem ipsum dolor sit amet, litem adipiscing elit. Cras tristique feugiat.
                    </div>
                    <div className="footer-inner-socials">
                        <a className="social-button" href="https://twitter.com/">
                            <span className="footer-social-icon icon-twitter" alt="Twitter"></span>
                        </a>
                        <a className="social-button" href="https://twitter.com/">
                            <span className="footer-social-icon icon-facebook" alt="Facebook"></span>
                        </a>
                        <a className="social-button" href="https://twitter.com/">
                            <span className="footer-social-icon icon-instagram" alt="Instagram"></span>
                        </a>
                        <a className="social-button" href="https://twitter.com/">
                            <span className="footer-social-icon icon-linkedin" alt="LinkedIn"></span>
                        </a>
                    </div>
                </div>

                <div className="footer-pages">
                    <nav>
                        <h5 className="footer-pages-title">pages</h5>
                        <ul>
                            <li><button className="footer-link-btn">Home</button></li>
                            <li><button className="footer-link-btn">Menu</button></li>
                            <li><button className="footer-link-btn">Delivery</button></li>
                            <li><button className="footer-link-btn">Locate us</button></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-utility-pages">
                    <nav>
                        <h5 className="footer-utility-title">utility pages</h5>
                        <ul>
                            <li><button className="footer-link-btn">Start Here</button></li>
                            <li><button className="footer-link-btn">Password Protected</button></li>
                            <li><button className="footer-link-btn">Styleguide</button></li>
                            <li><button className="footer-link-btn">Changelog</button></li>
                            <li><button className="footer-link-btn">Placeholder</button></li>
                        </ul>
                    </nav>
                </div>

                <div className="footer-visit">
                    <span className="span-footer-visit">visit us!</span>

                    <div className="footer-visit-item">
                        <div className="visit-item-info">
                            <span className="visit-item-city">Chinatown, la</span>
                            <span className="visit-item-address">934-235 N. Broadway Los Angeles, CA 90334</span>
                        </div>
                        <div className="footer-item-pic">
                            <img className="footer-pic-img" alt="restourant" width="200px" src="./images/locations/1.jpg"></img>
                        </div>
                    </div>

                    <div className="footer-visit-item">
                        <div className="visit-item-info">
                            <span className="visit-item-city">Chinatown, la</span>
                            <span className="visit-item-address">934-235 N. Broadway Los Angeles, CA 90334</span>
                        </div>
                        <div className="footer-item-pic">
                            <img className="footer-pic-img" alt="restourant" width="200px" src="./images/locations/2.jpg"></img>
                        </div>
                    </div>

                    <div className="footer-visit-item">
                        <div className="visit-item-info">
                            <span className="visit-item-city">Chinatown, la</span>
                            <span className="visit-item-address">934-235 N. Broadway Los Angeles, CA 90334</span>
                        </div>
                        <div className="footer-item-pic">
                            <img className="footer-pic-img" alt="restourant" width="200px" src="./images/locations/3.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}