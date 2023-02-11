export default function Delivery(){
    return(
        <section className="delivery-section">
            <div className="delivery-content">
                <div className="delivery-inners">
                    <div className="delivery-subtitle">
                        オンライン注文
                    </div>
                    <div className="delivery-title">
                        ORDER VIA APP
                    </div>
                    <div className="delivery-suptitle">
                        Order today from wherever you want
                    </div>
                </div>            
                <div className="delivery-links">
                    <div>
                        <a className="delivery-btn" href="https://www.ubereats.com/" target="value">
                            <img src='./images/icons/uber-eats.svg' alt='#'></img>
                        </a>
                    
                        <a className="delivery-btn" href="https://www.doordash.com/" target="value">
                            <img src='./images/icons/doordash.svg' alt='#'></img>
                        </a>

                        <a className="delivery-btn" href="https://www.grubhub.com/" target="value">
                            <img src='./images/icons/grudhub.svg' alt='#'></img>
                        </a>
                    </div>
                    <div>
                        <a className="delivery-btn" href="https://postmates.com/" target="value">
                            <img src='./images/icons/postmates.svg' alt='#'></img>
                        </a>
                        <a className="delivery-btn" href="https://www.rappi.com.mx/" target="value">
                            <img src='./images/icons/rappi.svg' alt='#'></img>
                        </a>
                        <a className="delivery-btn" href="https://www.didi-food.com/" target="value">
                            <img src='./images/icons/didi.svg' alt='#'></img>
                        </a>
                    </div>
                </div>
            </div>    
        </section>
    )
}