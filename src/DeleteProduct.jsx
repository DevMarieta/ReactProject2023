import React from "react";

const DeleteProduct = () => {
  return (
    <div b-cte7x7hm27="" className="container">
      <main b-cte7x7hm27="" role="main" className="pb-3">
        <form action="/Product/ProductDelete" method="post">
          <br />
          <div className="container border p-3">
            <h1 className="text-white text-center">Delete Product</h1>
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
                  value="Samosa"
                />
                <input
                  hidden
                  readOnly
                  type="text"
                  id="Name"
                  name="Name"
                  value="Samosa"
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
                  value="Appetizer"
                />
                <input
                  hidden
                  readOnly
                  type="text"
                  id="CategoryName"
                  name="CategoryName"
                  value="Appetizer"
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
                  value="Quisque vel lacus ac magna, vehicula sagittis ut non lacus. Vestibulum arcu turpis, maximus malesuada neque. Phasellus commodo cursus pretium."
                />
                <textarea
                  className="form-control"
                  rows="5"
                  hidden
                  readOnly
                  id="Description"
                  name="Description"
                  value="Quisque vel lacus ac magna, vehicula sagittis ut non lacus. Vestibulum arcu turpis, maximus malesuada neque. Phasellus commodo cursus pretium."
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
                  value="15"
                />
                <input
                  hidden
                  readOnly
                  type="text"
                  id="Price"
                  name="Price"
                  value="15"
                />
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
                  disabled
                  className="form-control"
                  type="text"
                  id="ImageUrl"
                  name="ImageUrl"
                  value="https://mangoservicesproductapisf.azurewebsites.net/ProductImages/1.jpg"
                />
                <input
                  hidden
                  readOnly
                  type="text"
                  id="ImageUrl"
                  name="ImageUrl"
                  value="https://mangoservicesproductapisf.azurewebsites.net/ProductImages/1.jpg"
                />
              </div>
              <div className="col-5 offset-2">
                <a className="btn-primary btn form-control " href="/Product">
                  Back to List
                </a>
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
