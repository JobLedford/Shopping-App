import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductData } from "./products";
import Nav from "./navbar";
import Shopper from './displayProducts';
import Cart from './cart';
import SignIn from "./signin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductData.products
    };
  }

  handleAddItem = (productId) => {
    this.setState((prevState) => {
      const newProducts = prevState.products.map((product) => {
        if (product.id === productId) {
          return {
            id: product.id,
            image: product.image,
            desc: product.desc,
            rating: product.rating,
            value: product.value + 1
          };
        }
        return product;
      });

      return {
        products: newProducts
      };
    });
  };

  handleSubItem = (productId) => {
    this.setState((prevState) => {
      const newProducts = prevState.products.map((product) => {
        if (product.id === productId) {
          return {
            id: product.id,
            image: product.image,
            desc: product.desc,
            rating: product.rating,
            value: Math.max(0,product.value - 1)
          };
        }
        return product;
      });

      return {
        products: newProducts
      };
    });
  };

  render() {
    return(
      <Router>
        <div className="Shop">
          <Nav
            products={this.state.products}
          />
          <Routes>
            <Route 
              exact path="/" 
              element={
                <Shopper
                  products={this.state.products}
                  onAddItem={this.handleAddItem}
                  onSubItem={this.handleSubItem}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={<Cart products={this.state.products} selectedProducts={this.state.products.filter(product => product.value > 0)} />} 
            />
            <Route
              path="/signin" element={<SignIn />}
            />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default Shop;