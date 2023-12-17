import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form method="post" action="">
          <br />
          <input
            hidden
            readOnly
            disabled
            type="text"
            id="CartHeader_UserId"
            name="CartHeader.UserId"
            value="fb9204f6-29b6-49db-97eb-d8bb2cf70365"
          />
          <input
            hidden
            readOnly
            disabled
            type="number"
            data-val="true"
            data-val-required="The CartHeaderId field is required."
            id="CartHeader_CartHeaderId"
            name="CartHeader.CartHeaderId"
            value="1"
          />
          <div className="">
            <div className="card border mt-4 container">
              <div className="card-header bg-dark text-light ml-0 row ">
                <div className="col-6">
                  <h3 className="text-success">
                    <i className="bi bi-cart"></i> &nbsp; Shopping Cart
                  </h3>
                </div>
                <div className="col-6 text-end">
                  <Link to="/" className="btn btn-outline-warning mt-2 btn-sm">
                    Continue Shopping
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <div className=" d-none d-lg-block">
                  <div className="row text-info">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5">Product Deetails</div>
                    <div className="col-lg-2">Price</div>
                    <div className="col-lg-2">Count</div>
                    <div className="col-lg-1"></div>
                  </div>
                </div>
                <hr />
                <div className="row h-100">
                  <div className="col-4 col-md-2 text-center py-2">
                    <img
                      src="https://oservicesproductapisf.azurewebsites.net/ProductImages/1.jpg"
                      className="rounded"
                      width="100%"
                    />
                  </div>
                  <div className="col-8 col-md-5">
                    <h5>Samosa</h5>
                    <div style={{ fontSize: "11px" }}>
                      Quisque vel lacus ac magna, vehicula sagittis ut non
                      lacus.
                      <br /> Vestibulum arcu turpis, maximus malesuada neque.
                      Phasellus commodo cursus pretium.
                    </div>
                  </div>
                  <div
                    className="col-3 col-md-2 pt-md-4"
                    style={{ fontSize: "11px" }}>
                    <span style={{ fontSize: "17px" }}>$15.00</span>
                  </div>
                  <div
                    className="col-3 col-md-2 pt-md-4"
                    style={{ fontSize: "11px" }}>
                    <span style={{ fontSize: "17px" }}>1</span>
                  </div>
                  <div className="col-2 col-lg-1 p-0 pt-lg-4 text-center">
                    <a className="btn btn-sm btn-danger">
                      <i className="bi bi-trash-fill">Todo</i>
                    </a>
                  </div>
                </div>
                <div className="row h-100">
                  <div className="col-4 col-md-2 text-center py-2">
                    <img
                      src="https://ervicesproductapisf.azurewebsites.net/ProductImages/2.jpg"
                      className="rounded"
                      width="100%"
                    />
                  </div>
                  <div className="col-8 col-md-5">
                    <h5>Paneer Tikka</h5>
                    <div style={{ fontSize: "11px" }}>
                      Quisque vel lacus ac magna, vehicula sagittis ut non
                      lacus.
                      <br /> Vestibulum arcu turpis, maximus malesuada neque.
                      Phasellus commodo cursus pretium.
                    </div>
                  </div>
                  <div
                    className="col-3 col-md-2 pt-md-4"
                    style={{ fontSize: "11px" }}>
                    <span style={{ fontSize: "17px" }}>$12.00</span>
                  </div>
                  <div
                    className="col-3 col-md-2 pt-md-4"
                    style={{ fontSize: "11px" }}>
                    <span style={{ fontSize: "17px" }}>1</span>
                  </div>
                  <div className="col-2 col-lg-1 p-0 pt-lg-4 text-center">
                    <a className="btn btn-sm btn-danger">
                      <i className="bi bi-trash-fill">Todo</i>
                    </a>
                  </div>
                </div>
                <div className="row h-100">
                  <div className="col-4 col-md-2 text-center py-2">
                    <img
                      src="https://oservicesproductapisf.azurewebsites.net/ProductImages/3.jpg"
                      className="rounded"
                      width="100%"
                    />
                  </div>
                  <div className="col-8 col-md-5">
                    <h5>Sweet Pie</h5>
                    <div style={{ fontSize: "11px" }}>
                      Quisque vel lacus ac magna, vehicula sagittis ut non
                      lacus.
                      <br /> Vestibulum arcu turpis, maximus malesuada neque.
                      Phasellus commodo cursus pretium.
                    </div>
                  </div>
                  <div
                    className="col-3 col-md-2 pt-md-4"
                    style={{ fontSize: "11px" }}>
                    <span style={{ fontSize: "17px" }}>$10.00</span>
                  </div>
                  <div
                    className="col-3 col-md-2 pt-md-4"
                    style={{ fontSize: "11px" }}>
                    <span style={{ fontSize: "17px" }}>1</span>
                  </div>
                  <div className="col-2 col-lg-1 p-0 pt-lg-4 text-center">
                    <a className="btn btn-sm btn-danger">
                      <i className="bi bi-trash-fill">Todo</i>
                    </a>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <span>Coupon:</span>
                    <input
                      type="text"
                      readOnly
                      disabled
                      id="CartHeader_CouponCode"
                      name="CartHeader.CouponCode"
                      value="Todo"
                    />
                    <a type="submit" className="btn btn-sm btn-success">
                      Apply /Todo/
                    </a>
                  </div>
                  <div className="col-6 text-end">
                    <span className="text-danger" style={{ fontSize: "21px" }}>
                      Order Total : $37.00 <br />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer row">
                <div className="col-6 col-md-3 ">
                  <a className="btn btn-outline-danger form-control">
                    Email Cart /ToDo/
                  </a>
                </div>
                <div className="col-6 col-md-3 offset-md-6">
                  <a className="btn btn-success form-control">
                    Looks Good? /ToDo/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Cart;
