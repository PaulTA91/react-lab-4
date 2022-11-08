import React, { useEffect } from "react";

const FetchData = () => {
  const fetchExternal = () => {
    const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=apple";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fbbdc20ea5msh670f2fa05ebb446p1f121ajsnaf58092f3b27",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData);
      });
  };
  useEffect(() => {
    fetchExternal();
  }, []);
  return (
    <>
      <h2>Nutrition Data</h2>
    </>
  );
};

export default FetchData;
