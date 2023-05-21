import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


function Cart({ selectedProducts, products }) {
    const Quantity = products.map((quantity) => {
      return quantity.value;
    });
  
    let totalQuantity = Quantity.reduce((total, value) => total + value, 0);
  
    const checkoutButton = selectedProducts.length > 0 && (
      <Link to="/signin" className="checkout-button">
        <Button>Check Out</Button>
      </Link>
    );
  
    return (
      <div className="cart">
        <h2 className="carttext">Your Cart Items</h2>
        {selectedProducts.length === 0 ? (
          <div>
            <p className="carttext">Your cart is empty.</p>
            <p className="carttext">You have {totalQuantity} items in your cart.</p>
            <Link to="/" className="continue-shopping-button">
              <Button className="empty">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <React.Fragment>
            <p className="carttext">You have {totalQuantity} items in your cart.</p>
            <div className="buttons2">
                {checkoutButton}
                <Link to="/" className="continue-shopping-button">
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
            <ul className="cartlist">
              {selectedProducts.map((product) => (
                <li className="cartlist" key={product.id}>
                  <div>
                    <h3 className="cartdesc">{product.desc}</h3>
                    <p>Quantity: {product.value}</p>
                  </div>
                  <img src={product.image} alt={product.desc} className="cartpics" />
                </li>
              ))}
            </ul>
            <div className="buttons2">
                {checkoutButton}
                <Link to="/" className="continue-shopping-button">
                    <Button>Continue Shopping</Button>
                </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
  

export default Cart;