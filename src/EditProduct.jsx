import React from "react";
import { Link } from "react-router-dom";

const EditProduct = () => {
  return (
    <div b-cte7x7hm27="" className="container">
      <main b-cte7x7hm27="" role="main" className="pb-3">
        <form
          encType="multipart/form-data"
          action="/Product/ProductEdit"
          method="post"
          noValidate="noValidate">
          <br />
          <div className="container border p-3">
            <h1 className="text-white text-center">Edit Product</h1>
            <input
              hidden
              readOnly
              type="number"
              data-val="true"
              data-val-required="The ProductId field is required."
              id="ProductId"
              name="ProductId"
              value="1"
            />

            <hr />
            <div className="row">
              <div className="col-10">
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
                      id="Name"
                      name="Name"
                      value="Samosa"
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
                      value="Appetizer"
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
                      value="Quisque vel lacus ac magna, vehicula sagittis ut non lacus. Vestibulum arcu turpis, maximus malesuada neque. Phasellus commodo cursus pretium."
                    />
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
                      value="15"
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
                    />
                    <input
                      hidden
                      readOnly
                      className="form-control"
                      type="text"
                      id="ImageUrl"
                      name="ImageUrl"
                      value="https://mangoservicesproductapisf.azurewebsites.net/ProductImages/1.jpg"
                    />
                    <input
                      hidden
                      readOnly
                      className="form-control"
                      type="text"
                      id="ImageLocalPath"
                      name="ImageLocalPath"
                      value="wwwroot\ProductImages\1.jpg"
                    />
                    <span
                      className="text-danger field-validation-valid"
                      data-valmsg-for="ImageUrl"
                      data-valmsg-replace="true"></span>
                  </div>
                  <div className="col-5 offset-2">
                    <Link
                      to="/Product"
                      className="btn-primary btn form-control">
                      Back to List
                    </Link>
                  </div>
                  <div className="col-5">
                    <input
                      type="submit"
                      value="Update"
                      className="btn btn-success form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="col-2">
                <img
                  src="https://mangoservicesproductapisf.azurewebsites.net/ProductImages/1.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditProduct;
