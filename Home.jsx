import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://mangoservicesproductapisf.azurewebsites.net/api/product")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <div className="container row">
        {cards.map((card) => (
          <div key={card.productId} className="col-12 col-md-6 col-lg-4">
            <div className="p-0 my-3 border rounded">
              <Card
                name={card.name}
                imageUrl={card.imageUrl}
                price={card.price}
                categoryName={card.categoryName}
                description={card.description}
                productId={card.productId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
