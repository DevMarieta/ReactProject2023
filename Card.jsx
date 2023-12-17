import React from "react";
import { Link } from "react-router-dom";

function Card({ name, imageUrl, price, categoryName, description, productId }) {
  return (
    <div className="card">
      <h3 className="card-title text-white-50 text-center py-2">{name}</h3>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <div className="d-flex justify-content-between py-2">
          <span className="text-danger" style={{ fontSize: "20px" }}>
            {price} лв.
          </span>
          <span className="badge bg-warning text-white p-2">
            {categoryName}
          </span>
        </div>
        <p className="card-text">{description}</p>
        <div className="row">
          <div className="col">
            <Link
              className="btn btn-success form-control"
              to={`Details/${productId}`}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
