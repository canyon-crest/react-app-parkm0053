import './Card.css'
import { useState } from 'react'

function Card({name, desc}) {
    const [count, setCount] = useState(0);
    const [isCardVisible, setIsCardVisible] = useState(false); 

    return (
        <div className="fruitCard">
            <h2>{name}</h2>
            <p>Here is a description: {desc}</p>
            <button onClick={() => setCount(count+1)}>Add {name} to cart</button>
            <button onClick={() => setCount(0)}>Remove all {name} from cart</button>
            <button onClick={() => setCount(count/2)}>Halve the number of {name} in Cart</button>
            <p>{name} in cart: {count}</p> 
        </div>
    )
}

export default Card