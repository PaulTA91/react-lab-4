import React from "react";

const Nutrition = ({ item }) => {
  return (
    <>
      <h2>Food : {item.name}</h2>
      <ul style={{ listStyle: "none" }}>
        <li>Serving Size: {item.serving_size_g}g</li>
        <li>Calories per serving: {item.calories}g</li>
        <li>Sugar content per serving: {item.sugar_g} g</li>
        <li>Total fat content per serving: {item.fat_total_g} g</li>
        <li>Saturated fat content per serving: {item.fat_saturated_g}g</li>
        <li>Protein content per serving: {item.protein_g}g</li>
        <li>Total carbohydrates per serving: {item.carbohydrates_total_g}g</li>
        <li>Fiber per serving: {item.fiber_g}g</li>
        <li>Sodium per serving: {item.sodium_mg}mg</li>
        <li>Potassium per serving: {item.potassium_mg}mg</li>
        <li>Cholesterol per serving: {item.cholesterol_mg}mg</li>
      </ul>
    </>
  );
};

export default Nutrition;
