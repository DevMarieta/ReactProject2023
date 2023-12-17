import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Details = () => {
  const { getToken } = useAuth();
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const token = getToken();
    fetch(
      `https://mangoservicesproductapisf.azurewebsites.net/api/product/${productId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProduct(data.result))
      .catch((err) => console.log(err));

    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form method="post">
          <input
            hidden
            type="number"
            data-val="true"
            data-val-required="The ProductId field is required."
            id="ProductId"
            name="ProductId"
          />

          <div className=" pt-4">
            <div
              className="card container"
              style={{ border: "1px solid #808080" }}>
              <div
                className="card-header bg-dark text-light row"
                style={{ borderRadius: "0px" }}>
                <div className="col-12 col-md-6">
                  <h1 className="text-white">{product.name}</h1>
                </div>
                <div className="col-12 col-md-6 text-end">
                  <h1 className="text-warning">
                    {product.price},00 &#x43B;&#x432;.
                  </h1>
                </div>
              </div>
              <div className="card-body">
                <div className="container rounded p-2">
                  <div className="row">
                    <div className="col-12 col-lg-4 p-1 text-center">
                      <img
                        src={product.imageUrl}
                        style={{ borderRadius: "35px" }}
                        width="100%"
                        className="rounded"
                      />
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="row pl-3">
                        <div className="col-12">
                          <span className="badge bg-primary text-success p-3 border">
                            {product.categoryName}
                          </span>
                          <p className="text-secondary pt-3">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <div className="row mx-0">
                        <input
                          className="form-control"
                          type="number"
                          data-val="true"
                          data-val-range="The field Count must be between 1 and 100."
                          data-val-range-max="100"
                          data-val-range-min="1"
                          data-val-required="The Count field is required."
                          id="Count"
                          name="Count"
                        />

                        <span
                          className="text-danger field-validation-valid"
                          data-valmsg-for="Count"
                          data-valmsg-replace="true"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer row bg-dark">
                <div className="col-12 col-md-6 pb-1 ">
                  <Link
                    className="btn btn-success btn-square form-control btn-lg"
                    style={{ height: "50px" }}
                    to="/">
                    Back to List
                  </Link>
                </div>
                <div className="col-12 col-md-6 ">
                  <button
                    type="submit"
                    className="btn btn-primary form-control btn-lg"
                    style={{ height: "50px" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Details;
