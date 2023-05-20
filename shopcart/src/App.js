import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1, 
          image: require('./products/cologne.jpg'),
          desc: 'Unisex Cologne',
          value: 0
        },
        {
          id: 2, 
          image: require('./products/iwatch.jpg'),
          desc: 'Apple iWatch',
          value: 0
        },
        {
          id: 4, 
          image: require('./products/mug.jpg'),
          desc: 'Unique Mug',
          value: 0
        },
        {
          id: 4, 
          image: require('./products/wallet.jpg'),
          desc: 'Mens Wallet',
          value: 0
        }
      ]
    }
  }


  render() {
    const Quantity = this.state.products.map((quantity) => {
      return quantity.value;
    });

    let totalQuantity = Quantity.reduce((total,value) => total + value,0);
    let shoppingItem = <Shopper products={this.state.products} />;

    return(
      <div>
        <nav>
          <h1 className="shop">Shop to React</h1>
          <p className="total">{totalQuantity} items</p> {/* this will haved to be changed to a func that can count total */}
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            className="icon"
          />
        </nav>
        {shoppingItem}
      </div>
    )
  }
}

function Shopper(props) {
  return(
    <ListGroup>
      {props.products.map((product) => {
        return(
        <ListGroupItem key={product.id}>
          <h3 className="des">{product.desc}</h3>
          <img 
            src={product.image} 
            alt={product.desc} 
            className="yoyo"
          />      
          <p className="quantity">
            <span className="number">{product.value}</span> quantity
          </p>      
        </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}


export default Shop;
