import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "./Loader";

const Coupon = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();

  useEffect(() => {
    const token = getToken();
    setLoading(true);
    fetch("https://mangoservicescouponapisf.azurewebsites.net/api/coupon", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCoupons(data.result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="container">
      <main role="main" className="pb-3">
        <div className="card shadow border-0 mt-4">
          <div className="card-header bg-secondary bg-gradient ml-0 py-3">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="text-white">Coupons List</h1>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <div className="row pb-3">
              <div className="col-6"></div>
              <div className="col-6 text-end">
                <Link to="/Coupon/Create" className="btn btn-outline-primary">
                  <i className="bi bi-plus-square"></i> Create New Coupon
                </Link>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Coupon Code</th>
                  <th>Discount Amount</th>
                  <th>Minimum Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {coupons.map((coupon) => (
                  <tr key={coupon.couponId}>
                    <td>{coupon.couponCode}</td>
                    <td>${coupon.discountAmount}</td>
                    <td>${coupon.minAmont}</td>
                    <td>
                      <Link
                        to={`/Coupon/Delete/${coupon.couponId}`}
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

export default Coupon;
