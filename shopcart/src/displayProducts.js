import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Modal, Button } from "react-bootstrap";


function Shopper(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  }

    return(
      <div>
        <ListGroup>
          {props.products.map((product) => {
            return(
            <ListGroupItem key={product.id}>
              <h3 className="des">{product.desc}</h3>
              <img 
                src={product.image}
                alt={product.desc} 
                className="yoyo"
                onClick={() => handleShow(product)}
              />  
              <div className="buttons">
                <Button 
                  className="btn"
                  onClick={() => props.onAddItem(product.id)}
                >+</Button>
                <Button 
                  className="btn-info"
                  onClick={() => props.onSubItem(product.id)}
                >-</Button>
              </div>
              <p className="quantity">
                <span className="number">{product.value}</span> Quantity
              </p>      
            </ListGroupItem>
            );
          })}
        </ListGroup>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{showImge.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={showImge.image}
              width="350"
              alt={showImge.desc}
              className="mx-5"
            />
            <p><span className="text-dark">Ratings:</span> {showImge.rating}/5</p>
          </Modal.Body>
        </Modal>
      </div>
    );
}

export default Shopper;