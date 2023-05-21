import React from "react";

function Cart({selectedProducts}) {
    

    return(
        <div className="cart">
            <h2 className="carttext">Your Cart Items</h2>
            {selectedProducts.length === 0 ? (
                <p className="carttext">Your cart is empty.</p>
            ) : (
                <ul classname="cartlist">
                    {selectedProducts.map((product) => (
                        <li className="cartlist" key={product.id}>
                            
                            <div>
                                <h3 className="cartdesc">{product.desc}</h3>
                                <p>Quantity: {product.value}</p>
                            </div>
                            <img 
                                src={product.image} 
                                alt={product.desc}
                                className="cartpics"
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;