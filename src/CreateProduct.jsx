import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import toastr from "toastr";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [catName, setCatName] = useState("");
  const [price, setPrice] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { getToken } = useAuth();
  const navigate = useNavigate();

  toastr.options = { timeOut: 3000, hideDuration: 200, extendedTimeOut: 0 };
  const onCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: productName,
        categoryName: catName,
        description: "Alalbalaportokala",
        price: price,
        imageLocalPath: imgFile,
        ImageUrl: imgUrl,
      };
      const toBody = JSON.stringify(data);
      const token = getToken();
      const responce = await fetch(
        "https://mangoservicesproductapisf.azurewebsites.net/api/product",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `bearer ${token}`,
          },
          body: toBody,
        }
      );
      const result = await responce.json();
      if (!result.isSuccess) {
        toastr.error(`Bad Request: ${result.message}`);
      } else {
        toastr.success("Coupon created successfully!");
      }
      navigate("/Coupon");
    } catch (err) {
      toastr.error("Bad Request");
    }
  };

  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form onSubmit={onCreateProduct} encType="multipart/form-data">
          <br />
          <div className="container border p-3">
            <h1 className="text-white text-center">Create Product</h1>
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
                  className="form-control"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Name"
                  data-valmsg-replace="true"></span>
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
                  className="form-control"
                  type="text"
                  id="CategoryName"
                  name="CategoryName"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="CategoryName"
                  data-valmsg-replace="true"></span>
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
                  className="form-control"
                  rows="5"
                  id="Description"
                  name="Description"></textarea>
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Description"
                  data-valmsg-replace="true"></span>
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
                  className="form-control"
                  type="text"
                  data-val="true"
                  data-val-number="The field Price must be a number."
                  data-val-required="The Price field is required."
                  id="Price"
                  name="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Price"
                  data-valmsg-replace="true"></span>
              </div>
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  ImageUrl
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  className="form-control"
                  type="file"
                  id="Image"
                  name="Image"
                  value={imgFile}
                  onChange={(e) => setImgFile(e.target.value)}
                />
                <input
                  hidden
                  className="form-control"
                  type="text"
                  id="ImageUrl"
                  name="ImageUrl"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Image"
                  data-valmsg-replace="true"></span>
              </div>
              <div className="col-5 offset-2">
                <a
                  className="btn-primary btn form-control "
                  href="/Product/ProductIndex">
                  Back to List
                </a>
              </div>
              <div className="col-5">
                <input
                  type="submit"
                  value="Create"
                  className="btn btn-success form-control"
                />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateProduct;
