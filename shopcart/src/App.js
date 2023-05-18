import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1, 
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 1
        },
        {
          id: 2, 
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 1
        },
        {
          id: 4, 
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 1
        },
        {
          id: 4, 
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 1
        }
      ]
    }
  }


  render() {
    return(
      <div>
        <nav>
          <h1>Shop to React</h1>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>0 items</p> {/* this will haved to be changed to a func that can count total */}
        </nav>

        <div>
          {this.state.products.map((product,index) => {
            return(
            <div key={index}>
              <h3>{product.desc}</h3>
              <img src={product.image} alt={product.desc} />              
              <div>
              
              </div>
              <hr />
            </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Shop;
