import React from 'react';
import ShowedItem from './ShowedItem';
export default function Main(props){
    
    const [showedItem, setShowedItem] = React.useState({item : [], isShowed : false})

    React.useEffect( () => {
        if(showedItem.isShowed){
            const showedElement = document.getElementsByClassName('showed-item');
            showedElement[0].animate(
                [
                  {opacity : '0'},
                  {opacity : '0.5'},
                  {opacity : '1'}
                ], 
                {
                  duration : 350,
                  iterations : 1
                }
            );
        }
    }, [showedItem]);

    function openItem(id){
        setShowedItem(prevShowedItem => {
            return {
                ...prevShowedItem, 
                item : props.allItems.find(element => {
                    return element.id === id? element : false
                }
                ), 
                isShowed : true
            }
         });
    }
    

    function closeItem(){
        setShowedItem(prevShowedItem => {
            return {
                ...prevShowedItem, 
                isShowed : false
            }
         });
    }
    const itemList = props.allItems.map( item => {

        return <div key={props.id()} className="item" onClick={() => openItem(item.id)}>
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
            {item.predescription}
        </p>
    </div>

    });
    
    return(

        <div className="main-container">
            {
                showedItem.isShowed && 
                <ShowedItem 
                    showedItem={showedItem}
                    closeItem={closeItem}
                    addItemToCart={props.addItemToCart}
                />
            }

            <div className="main-buttons">
                
                <button className="button-filter filter-all active" onClick={() => props.handleTypeBtnClick('All', 'filter-all')}
                >
                    All
                </button>

                <button className="button-filter filter-sushi" onClick={() => props.handleTypeBtnClick('Sushi', 'filter-sushi')}
                >
                    Sushi
                </button>

                <button className="button-filter filter-desserts" onClick={() => props.handleTypeBtnClick('Desserts', 'filter-desserts')}
                >
                    Desserts
                </button>

                <button className="button-filter filter-drinks" onClick={() => props.handleTypeBtnClick('Drinks', 'filter-drinks')}
                >
                    Drinks
                </button>

                <button className="button-filter filter-other" onClick={() => props.handleTypeBtnClick('Other', 'filter-other')}
                >
                    Other
                </button>

            </div>
            <div className="main-items">
                {itemList}
            </div>
        </div>

    )
}