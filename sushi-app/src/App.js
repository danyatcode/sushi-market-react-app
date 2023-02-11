import Header from './Components/Header';
import Main from './Components/Main';
import Data from './Data'
import { nanoid } from 'nanoid';
import React from 'react';

function App() {

  const arrayOfDataItems = [...Data.sushi, ...Data.other, ...Data.drinks, ...Data.desserts];

  const [filterType, setFilterType] = React.useState('All');

  const [cart, setCart] = React.useState([]);

  const [isCartOpen, setIsCartOpen] = React.useState(false)

  React.useEffect( () => {
    // console.log(cart.length);
  }, [cart])

  function showByFilterType(){
    const map = {
      All: arrayOfDataItems,
      Sushi: Data.sushi,
      Drinks: Data.drinks,
      Desserts: Data.desserts,
    };
  
    return map[filterType] || Data.other;
  }

  function handleTypeBtnClick(filterBy, className){

      const buttons = document.querySelectorAll('.button-filter');
      const shopItems = document.getElementsByClassName('main-items');

      shopItems[0].animate(
        [
          {opacity : '0.15'},
          {opacity : '0'},
          {opacity : '0.5'},
          {opacity : '1'}
        ], 
        {
          duration : 1000,
          iterations : 1
        }
      );

      buttons.forEach( btn => {
          btn.classList.remove('active');
          if(btn.classList.contains(className)){
              btn.classList.add('active')
          }
      })

      setFilterType(filterBy);
  }

  const allItems = showByFilterType().map( item => {
        return {
        ...item, 
        id: nanoid()
      }
  });

  function addItemToCart(item){
    setCart(prevCart => {

      if(prevCart.length > 0){

        if(prevCart.some( elem => elem.name === item.name)){

          return prevCart.map( element => {
            if(element.name === item.name){
              return {...element, count : element.count + 1}
            } else{
              return element
            }
          })

        }
        return [...prevCart, {
          name : item.name,
          image : item.image,
          price : item.price,
          count : 1,
          id : item.id
        }]
        
      }
        const newItem = {
          name : item.name,
          image : item.image,
          price : item.price,
          count : 1,
          id : item.id
        }
        return [newItem];
    });
  }
  function deleteItem(id){
    setCart(prevCart => prevCart.filter( item => item.id !== id? true: false))
  }

  return (
   <div className="App">
      <Header
        cartItems={cart}
        setCart={setCart}
        addItemToCart={addItemToCart}
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
        deleteItem={deleteItem}
      />
      <div className="inner-container">
          <div className="inner-subtitle">メニュー</div>
          <div className="inner-title">our menu</div>
          <div className="inner-suptitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tempus 
          facilisis feugiat condimentum et. 
          Ut et ut maecenas amet ipsum
          </div>
      </div>
      <Main 
        handleTypeBtnClick={handleTypeBtnClick}
        allItems={allItems}
        id={nanoid}
        addItemToCart={addItemToCart}
      />
   </div>
  );
}

export default App;
