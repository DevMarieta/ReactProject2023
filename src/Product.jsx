import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://mangoservicesproductapisf.azurewebsites.net/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div b-cte7x7hm27="" className="container">
      <main b-cte7x7hm27="" role="main" className="pb-3">
        <div className="card shadow border-0 mt-4">
          <div className="card-header bg-secondary bg-gradient ml-0 py-3">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">Products List</h1>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <div className="row pb-3">
              <div className="col-6"></div>
              <div className="col-6 text-end">
                <Link to="/Product/Create" className="btn btn-outline-primary">
                  <i className="bi bi-plus-square"></i> Create New Product
                </Link>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.productId}>
                    <td>{product.name}</td>
                    <td>{product.categoryName}</td>
                    <td>{product.price} лв.</td>
                    <td>
                      <Link
                        to={`/Product/Edit/${product.productId}`}
                        className="btn btn-success">
                        <i className="bi bi-pencil-square"></i>
                      </Link>
                      <Link
                        to={`/Product/Delete/${product.productId}`}
                        className="btn btn-danger">
                        <i className="bi bi-trash"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
