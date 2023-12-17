import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import toastr from "toastr";

const CreateCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");

  const { getToken } = useAuth();
  const navigate = useNavigate();

  toastr.options = { timeOut: 3000, hideDuration: 200, extendedTimeOut: 0 };
  const onCreateCoupon = async (e) => {
    e.preventDefault();
    try {
      const data = {
        couponCode: couponCode,
        discountAmount: discountAmount,
        minAmont: minimumAmount,
      };
      const toBody = JSON.stringify(data);
      const token = getToken();
      const responce = await fetch(
        "https://mangoservicescouponapisf.azurewebsites.net/api/coupon",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
        <br />
        <form onSubmit={onCreateCoupon}>
          <div className="container border p-3">
            <h1 className="text-white text-center">Create Coupon</h1>
            <hr />
            <div className="row">
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Coupon Code
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Discount Amount
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  className="form-control"
                  type="number"
                  min="1"
                  max="100"
                />
              </div>
              <div className="col-2">
                <label
                  className="control-label pt-2"
                  style={{ fontSize: "20px" }}>
                  Minimum Amount
                </label>
              </div>
              <div className="col-10 pb-3">
                <input
                  onChange={(e) => setMinimumAmount(e.target.value)}
                  value={minimumAmount}
                  className="form-control"
                  type="number"
                  min="1"
                />
              </div>
              <div className="col-5 offset-2">
                <Link to="/Coupon" className="btn-primary btn form-control">
                  Back to List
                </Link>
              </div>
              <div className="col-5">
                <button
                  type="submit"
                  className="btn btn-success
                  form-control">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateCoupon;
