import React from "react";

import ProductCard_1 from "./ProductCard_1";
import ProductCard_2 from "./ProductCard_2";
import ProductCard_3 from "./ProductCard_3";
import ProductCard_4 from "./ProductCard_4";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-19 col-lg-19">
          <ProductCard_1 />
        </div>
        <div className="col-md-18 col-lg-18">
          <ProductCard_2 />
        </div>
      </div>
      <div className="row">
        <div className="col-md-18 col-lg-18">
          <ProductCard_3 />
        </div>
        <div className="col-md-18 col-lg-18">
          <ProductCard_4 />
        </div>
      </div>
    </div>
  );
}

export default Home;
