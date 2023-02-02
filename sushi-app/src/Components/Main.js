import Data from '../Data'

export default function Main(){

    const allItems = [...Data.sushi, ...Data.ramen, ...Data.drinks, ...Data.desserts].map( item => 
        {
            return <div className="item">
                <div className="item-div-image">
                    <img 
                        src={item.image} 
                        alt="#" 
                        className="item-image"
                    >
                    </img>
                    <div className="item-price">${item.price}</div>
                </div>

                <h4 className="item-name">{item.name}</h4>
                <hr className="item-hr"></hr>
                <p className="item-description">
                    {item.description}
                </p>
            </div>
        }
        );

    return(
        

        <div className="main-container">
            <div className="main-buttons">
                <button className="button-filter filter-all active">All</button>
                <button className="button-filter filter-sushi">Sushi</button>
                <button className="button-filter filter-desserts">Desserts</button>
                <button className="button-filter filter-drinks">Drinks</button>
                <button className="button-filter filter-other">Other</button>
            </div>
            <div className="main-items">
                {allItems}
            </div>
        </div>
    )
}