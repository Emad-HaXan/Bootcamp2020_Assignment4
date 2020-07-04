import React, {useState} from 'react';
import './Products.css';

function Product(props)
{
    let [count, setCount] = useState(0);
    
    return(
        <div className="card">
            <h4>Product Name:</h4>
            <span>{props.name}</span><br/><br/>
            <h4>Product Price:</h4>
            <span>Rs.{props.price}</span><br/><br/>
            <h4>Quantity:</h4>
            <button onClick={()=>setCount(--count)}>-</button> 
            <p>{count}</p> 
            <button onClick={()=>setCount(++count)}>+</button><br/><br/>
            <h4>Total Price:</h4>
            <span>Rs.{ props.price*count}</span>
        </div>
    );
}

export default Product;