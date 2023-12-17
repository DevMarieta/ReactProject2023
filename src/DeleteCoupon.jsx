import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const DeleteCoupon = () => {
  const { getToken } = useAuth();
  const { couponId } = useParams();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState({});
  useEffect(() => {
    const token = getToken();
    fetch(
      `https://mangoservicescouponapisf.azurewebsites.net/api/coupon/${couponId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCoupon(data.result);
      })
      .catch((err) => console.log(err));

    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  const processDelete = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const token = getToken();
    fetch(
      `https://mangoservicescouponapisf.azurewebsites.net/api/coupon/${couponId}`,
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
        setCoupon(data.result);
      })
      .catch((err) => {
        console.log(err);
        navigate("/Coupon");
      });
    navigate("/Coupon");
    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  };

  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form onSubmit={processDelete}>
          <br />
          <div className="container border p-3">
            <h1 className="text-white text-center">Delete Coupon</h1>

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
                  className="form-control"
                  type="text"
                  data-val="true"
                  data-val-required="The CouponCode field is required."
                  id="CouponCode"
                  name="CouponCode"
                  defaultValue={coupon.couponCode}
                  readOnly
                  disabled
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
                  className="form-control"
                  type="text"
                  data-val="true"
                  data-val-number="The field DiscountAmount must be a number."
                  data-val-required="The DiscountAmount field is required."
                  id="DiscountAmount"
                  name="DiscountAmount"
                  defaultValue={coupon.discountAmount}
                  readOnly
                  disabled
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
                  className="form-control"
                  type="number"
                  data-val="true"
                  data-val-required="The MinAmont field is required."
                  id="MinAmont"
                  name="MinAmont"
                  defaultValue={coupon.minAmont}
                  readOnly
                  disabled
                />
              </div>
              <div className="col-5 offset-2">
                <Link to="/Coupon" className="btn-primary btn form-control">
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

export default DeleteCoupon;
