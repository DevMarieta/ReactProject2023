import React from "react";

const Details = () => {
  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form method="post" novalidate="novalidate">
          <input
            hidden=""
            type="number"
            data-val="true"
            data-val-required="The ProductId field is required."
            id="ProductId"
            name="ProductId"
          />
          <div className=" pt-4">
            <div>
              className="card container" style=
              {{ border: "1px", solid: "#808080" }}
              <div>
                className="card-header bg-dark text-light row" style={" "}
                {{ borderRadius: "0px" }}
              </div>
              <div className="col-12 col-md-6">
                <h1 className="text-white">Samosa</h1>
              </div>
              <div className="col-12 col-md-6 text-end">
                <h1 className="text-warning"> 25,00 лв.</h1>
              </div>
            </div>
            <div className="card-body">
              <div className="container rounded p-2">
                <div className="row">
                  <div className="col-12 col-lg-4 p-1 text-center">
                    <img
                      src="https://localhost:7000/ProductImages/1.jpg"
                      style={{ borderRadius: "35px" }}
                      width="100%"
                      className="rounded"
                    />
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="row pl-3">
                      <div className="col-12">
                        <span className="badge bg-primary text-success p-3 border">
                          Appetizer
                        </span>
                        <p className="text-secondary pt-3">
                          Quisque vel lacus ac magna, vehicula sagittis ut non
                          lacus. Vestibulum arcu turpis, maximus malesuada
                          neque. Phasellus commodo cursus pretium.
                        </p>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <input
                        className="form-control valid"
                        type="number"
                        data-val="true"
                        data-val-range="The field Count must be between 1 and 100."
                        data-val-range-max="100"
                        data-val-range-min="1"
                        data-val-required="The Count field is required."
                        id="Count"
                        name="Count"
                        min="1"
                        aria-describedby="Count-error"
                        aria-invalid="false"
                      />
                      <span
                        className="text-danger field-validation-valid"
                        data-valmsg-for="Count"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer row bg-dark">
              <div className="col-12 col-md-6 pb-1 ">
                <a
                  className="btn btn-success btn-square form-control btn-lg"
                  style={{ height: "50px" }}
                  href="/"
                >
                  Back to List
                </a>
              </div>
              <div className="col-12 col-md-6 ">
                <button
                  type="submit"
                  className="btn btn-primary form-control btn-lg"
                  style={{ height: "50px" }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Details;
