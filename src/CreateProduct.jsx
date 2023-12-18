import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import toastr from "toastr";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [catName, setCatName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgFile, setImgFile] = useState();

  const { getToken } = useAuth();
  const navigate = useNavigate();

  toastr.options = { timeOut: 3000, hideDuration: 200, extendedTimeOut: 0 };
  const onCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("categoryName", catName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", imgFile);

      const responce = await fetch(
        "https://mangoservicesproductapisf.azurewebsites.net/api/product",
        {
          method: "POST",
          headers: {
            Accept: "*/*",
            Authorization: `bearer ${token}`,
          },
          body: formData,
        }
      );
      const result = await responce.json();
      if (!result.isSuccess) {
        toastr.error(`Bad Request: ${result.message}`);
      } else {
        toastr.success("Product created successfully!");
      }
      navigate("/Product");
    } catch (err) {
      toastr.error("Bad Request");
    }
  };
  function handleChange(event) {
    setImgFile(event.target.files[0]);
    event.target.defaultValue = event.target.files[0].name;
  }
  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form onSubmit={onCreateProduct}>
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
                  name="Description"
                  onChange={(e) => setDescription(e.target.value)}></textarea>
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
                  name="fileName"
                  defaultValue=""
                  onChange={handleChange}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Image"
                  data-valmsg-replace="true"></span>
              </div>
              <div className="col-5 offset-2">
                <Link to="/Product" className="btn-primary btn form-control">
                  Back to List
                </Link>
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
