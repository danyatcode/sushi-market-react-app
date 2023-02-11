export default function Cart(props){

    function subtotal(){
        let totalCount = 0;
        props.cartItems.forEach( element => {
            totalCount += element.price * element.count;
        })
        return totalCount.toFixed(2)
    }


    const cartItems = props.cartItems.map( element => {
        return <div className="cart-item" key={element.id}>

            <div className="cart-item-info">
                
                <img className="cart-item-img" src={element.image} alt="#"></img>
                <div className="cart-item-name-price">
                    <span className="cart-item-name">
                        {element.name}
                    </span>
                    <span className="cart-item-price">
                        ${element.price} USD
                    </span>
                </div>
                <div className="cart-input-div">
                    <input className="cart-item-count" value={element.count} onChange={(event) => props.changeCountValue(element.id, event)}/>
                    <div className="change-count-btns">
                        <button className="decrease-item-count icon-arrow_drop_up" onClick={() => props.increaseValue(element.id)}></button>
                        <button className="increase-item-count icon-arrow_drop_down" onClick={() => props.decreaseValue(element.id)}></button>
                    </div>
                </div>
                <button className="remove-cart-item icon-trash-o" onClick={() => props.deleteItem(element.id)}>
                </button>

            </div>

        </div> 
    })

    return(
        <div className="opened-cart">
            <div className="opened-cart-overlay"></div>
            <div className="cart">
                <div className="cart-header">
                    <span className="cart-header-span">your cart</span>
                    <button className="cart-close-btn icon-close2" onClick={() => props.setIsCartOpen(false)}></button>
                </div>
                <hr className="cart-hr"></hr>
                <div className="cart-items">
                    {cartItems.length > 0 && cartItems}
                    {cartItems.length === 0 && <span className="cart-is-empty">Cart is empty.</span>}
                </div>
                <hr className="cart-hr"></hr>
                <div className="cart-subtotal">
                    <span className="subtotal-span">Subtotal:</span>
                    <span className="subtotal-count">${subtotal()} USD</span>
                </div>
                <button id="cart-checkout">CONTINUE TO CHECKOUT</button>
            </div>
        </div>
    )
}