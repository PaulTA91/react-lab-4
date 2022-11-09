import React, { useState } from "react";
import Item from "./Item";
import { items } from "../data/Data";
import FetchNutrition from "./FetchNutrition";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import FetchData from "./FetchNutrition";

const DisplayFoodItem = () => {
  const [selectedItem, setSelectedItem] = useState("chocolate");
  const handleClick = (e) => {
    setSelectedItem(e.target.innerHTML);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Menu</h1>
            <ul>
              {items.map((food) => {
                return (
                  <li key={food.id} onClick={handleClick}>
                    {" "}
                    <Item item={food} />
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.price}</p>
            <FetchNutrition query={selectedItem} />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default DisplayFoodItem;
