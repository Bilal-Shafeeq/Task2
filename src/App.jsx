import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function App() {

  let product = {
      id: 101,
      title: "Krunch Combo",
      subtitle: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
      image: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
      price: 520
    }

    const [counter, setCounter] = useState(0)
    const [quantity, setQuantity] = useState(0)

let handleIncrement = () => {

   let x = counter + product.price
  setCounter(x)
  let y = quantity + 1
  setQuantity(y)
}

let handleDecrement = ()=>{
  let x = counter - product.price
  setCounter(x)
  let y = quantity - 1
  setQuantity(y)
}

  let handleClear =()=>{
     setCounter(0)
     setQuantity(0)
  }

  return (
    <>
      <h1>Shopping Cart <FaShoppingCart /> {quantity} </h1>
      
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.subtitle}</p>
          <h5>Price: {product.price}</h5>
          <button href="#" disabled={quantity===0} className="btn btn-primary" onClick={handleDecrement}>-</button>
          <span> {quantity} </span>
          <button href="#"  className="btn btn-primary" onClick={handleIncrement}>+</button>
          <span> Total Price: {counter}</span>
        </div>
      </div>
      <button onClick={handleClear}>Clear</button>
    </>

  );
}

export default App;
