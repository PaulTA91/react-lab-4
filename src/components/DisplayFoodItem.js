import React, { useState } from "react";
import Item from "./Item";
import { items } from "../data/Data";
import FetchNutrition from "./FetchNutrition";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NutritionChart from "./NutritionChart";
//import FetchData from "./FetchNutrition";

const DisplayFoodItem = () => {
  const [selectedItem, setSelectedItem] = useState("apple");
  const handleClick = (e) => {
    setSelectedItem(e.target.innerHTML);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={2} className="menu">
            <h1>Menu</h1>
            <ul>
              {items.map((food) => {
                return (
                  <li className="menu-item" key={food.id} onClick={handleClick}>
                    <Item item={food} />
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col className="nutritional-data" xs={{ span: 4, offset: 1 }}>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.price}</p>
            <br></br>
            <FetchNutrition query={selectedItem} />
            <NutritionChart query={selectedItem} />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default DisplayFoodItem;
