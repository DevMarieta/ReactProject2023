import React from "react";
import { Link } from "react-router-dom";

import ProductCard_1 from "./ProductCard_1";
import ProductCard_2 from "./ProductCard_2";
import ProductCard_3 from "./ProductCard_3";
import ProductCard_4 from "./ProductCard_4";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Link to="/product_1">
            {/*  карта и <Link /> */}
            <ProductCard_1 />
          </Link>
        </div>
        <div className="col-lg-6">
          <Link to="/product_2">
            {/* карта и <Link /> */}
            <ProductCard_2 />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Link to="/product_3">
            {/* карта и <Link /> */}
            <ProductCard_3 />
          </Link>
        </div>
        <div className="col-lg-6">
          <Link to="/product_4">
            {/* карта и <Link /> */}
            <ProductCard_4 />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

<Link to="/product4">
  {/* Пример за карта и <Link /> */}
  <ProductCard_4 />
</Link>;
