import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from 'react-router-dom';


function Nav(props) {
  const Quantity = props.products.map((quantity) => {
    return quantity.value;
  });

  let totalQuantity = Quantity.reduce((total,value) => total + value,0);

  const location = useLocation();
    return(
        <div>
          <nav>
            <h1 className="shop">
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>             
                Shop to <span><FontAwesomeIcon icon={faRegistered} /></span>eact
              </Link>
            </h1>
            <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
              <p className="total">{totalQuantity} items</p>
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </Link>
          </nav>
        </div>
      )
  }

export default Nav;