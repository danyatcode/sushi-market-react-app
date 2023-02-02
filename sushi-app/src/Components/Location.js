export default function Location(){
    return(
        <section className="location">
            <div className="location-content">
                
            <div className="reservation-blank">
                    <span className="span-reservation">reservation</span>
                    <hr className="reservation-blank-hr"></hr>
                    <span className="span-opening">opening time</span>

                    <div className="shcedule">
                        <div className="open-date">
                            <div className="day">Weekdays</div>    
                            <div className="horiz-line"></div>    
                            <div className="time">9:00 - 22:00</div>    
                        </div>
                        <div className="open-date">
                            <div className="day">Saturdays</div>
                            <div className="horiz-line"></div>    
                            <div className="time">10:00 - 22:00</div>    
                        </div>
                        <div className="open-date">
                            <div className="day">Sundays</div>    
                            <div className="horiz-line"></div>    
                            <div className="time">11:00 - 22:00</div>    
                        </div>
                    </div>

                    <span className="span-book">BOOK YOUR TABLE FOR<br></br> LUNCH OR DINNER</span>

                    <button className="button-visit">visit us</button>
                </div>

                
                <div className="location-inner">
                    <div className="location-subtitle">
                        是非お越しください！
                    </div>
                    <div className="location-title">
                        COME AND VISIT US!
                    </div>
                    <div className="location-suptitle">
                        Lorem ipsum dolor sit amet, adipiscing elit. Cras tristique feugiat elementum eu accumsan, aliquet nunc adipide accumsan.
                    </div>
                </div>

                
            </div>

            <div style={{backgroundImage : 'url(./images/dislocation.png)'}}className="dislocation-bg"></div>
        </section>
    )
}