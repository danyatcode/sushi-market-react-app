export default function Header(){
    return(
        <div className="header">
            <nav className="navigation">
                <li className="nav-link">
                    <img src="./images/icons/sushi.svg" alt="sushi" className="sushi-nav-svg"></img>
                </li>
                <li className="nav-link">
                    <button href="#">
                        <img src="./cart.png" className="cart-img" alt="CART"></img>
                    </button>
                </li>
            </nav>
        </div>
    )
}