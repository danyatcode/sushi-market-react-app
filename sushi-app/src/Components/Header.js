import Cart from './Cart'

export default function Header(props){

    document.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            document.querySelector('.nav-link--cart').classList.add('cart-fixed');
        }
        else{
            document.querySelector('.nav-link--cart').classList.remove('cart-fixed');
        }
    });
    
    function changeCountValue(id, event){
        props.setCart(prevCart => prevCart.map( item => {
            if(item.id === id){
                return event.target.value > -1? {...item, count : event.target.value}
                :
                {...item, count : 1}
            }
            return item
        }));
    }
    function decreaseValueCount(id){
        props.setCart(prevCart => prevCart.map( item => {
            if(item.id === id){
                return item.count > 1? {...item, count : item.count - 1}
                :
                item 
            }
            return item
        }))
    }
    function increaseValueCount(id){
      props.setCart(prevCart => prevCart.map( item => item.id === id? {...item, count : Number(item.count + 1)} : item));
    }

    return(
        <div className="header">
            <nav className="navigation">

                <li className="nav-link">
                    <a href='index.html'>
                        <img src="./images/icons/sushi.svg" alt="sushi" className="sushi-nav-svg"></img>
                    </a>
                </li>

                <li className="nav-link nav-link--cart">
                    {
                        props.isCartOpen 
                    && 
                        <Cart 
                            setIsCartOpen={props.setIsCartOpen}
                            cartItems={props.cartItems}
                            deleteItem={props.deleteItem}
                            changeCountValue={changeCountValue}
                            decreaseValue={decreaseValueCount}
                            increaseValue={increaseValueCount}
                        />
                    }
                    <button className="cart-btn" href="#" onClick={() => props.setIsCartOpen(true)}>
                        <img src="./cart.png" className="cart-img" alt="CART"></img>
                        <span className="cart-count">{props.cartItems.length}</span>
                    </button>
                </li>
            </nav>
        </div>
    )
}