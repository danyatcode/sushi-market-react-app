export default function ShowedItem(props){
    return(
        <div className='showed-item'>
                    <div className='showed-item-container'>
                        <div className='showed-item-pic-div'>
                            <img className='showed-item-image' alt='pic' src={props.showedItem.item.image}>
                            </img>
                        </div>
                        <div className='showed-item-info'>
                            <h4 className='showed-item-name'>
                                {props.showedItem.item.name}
                            </h4>
                            <p className='showed-info-descr'>
                                {props.showedItem.item.description}
                            </p>
                            <hr className='showed-info-hr'></hr>
                            <span className='price'>
                                ${props.showedItem.item.price} USD
                            </span>
                            <button className='add-to-cart' onClick={() => props.addItemToCart(props.showedItem.item)}>add to cart</button>
                            <button className='close-showed-item icon-close2' onClick={() => props.closeItem()}></button>
                        </div>
                    </div>
                    <h3 className='show-info-ingredients'>ingredients</h3>
                    <p className='showed-info-subdescr'>
                        {props.showedItem.item.subdescription}
                    </p>
                    <hr style={{marginBottom : '50px'}}></hr>
                </div>
    )
}