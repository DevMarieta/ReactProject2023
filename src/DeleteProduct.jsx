import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "./Loader";
import toastr from "toastr";

const DeleteProduct = () => {
  const { getToken } = useAuth();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  toastr.options = { timeOut: 3000, hideDuration: 200, extendedTimeOut: 0 };

  useEffect(() => {
    const token = getToken();
    setLoading(true);
    fetch(
      `https://mangoservicesproductapisf.azurewebsites.net/api/product/${productId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const processDelete = (e) => {
    e.preventDefault();
    const token = getToken();
    fetch(
      `https://mangoservicesproductapisf.azurewebsites.net/api/product/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.isSuccess) {
          toastr.success("Product was deleted.");
          navigate("/Product");
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/Product");
      });
  };

  return loading ? (
    <Loader />
  ) : (
    <div b-cte7x7hm27="" className="container">
      <main b-cte7x7hm27="" role="main" className="pb-3">
        <form onSubmit={processDelete}>
          <br />
          <div className="container border p-3">
            <h1 className="text-white text-center">Delete Product</h1>
            <hr />
            <div className="row">
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Name
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="Name"
                  name="Name"
                  value={product.name}
                />
              </div>
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Category Name
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  disabled
                  className="form-control"
                  type="text"
                  id="CategoryName"
                  name="CategoryName"
                  value={product.categoryName}
                />
              </div>
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Description
                </label>
              </div>
              <div className="col-10 pb-3">
                <textarea
                  disabled
                  className="form-control"
                  rows="5"
                  id="Description"
                  name="Description"
                  value={product.description}
                />
              </div>
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Price
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  disabled
                  className="form-control"
                  type="text"
                  data-val="true"
                  data-val-number="The field Price must be a number."
                  data-val-required="The Price field is required."
                  id="Price"
                  name="Price"
                  value={product.price}
                />
              </div>

              <div className="col-5 offset-2">
                <Link to="/Product" className="btn-primary btn form-control">
                  Back to List
                </Link>
              </div>
              <div className="col-5">
                <input
                  type="submit"
                  value="Delete"
                  className="btn btn-danger form-control"
                />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default DeleteProduct;
