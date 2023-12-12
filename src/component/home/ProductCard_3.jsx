import React from 'react'

function ProductCard_3() {
  return (
      <div className="row">
  <div className="col-12 col-md-6 col-lg-4">
    <div className="p-0 my-3 border rounded">
      <div className="card">
        <h3 className="card-title text-white-50 text-center py-2">Sweet Pie</h3>
        <img src="https://localhost:7000/ProductImages/3.jpg" className="card-img-top" alt="Sweet Pie" />
        <div className="card-body">
          <div className="d-flex justify-content-between py-2">
            <span className="text-danger" style={{ fontSize: '20px' }}>10,00 &#x43B;&#x432;.</span>
            <span className="badge bg-warning text-white p-2">Dessert</span>
          </div>
          <p className="card-text">Quisque vel lacus ac magna, vehicula sagittis ut non lacus.<br/>Vestibulum arcu turpis, maximus malesuada neque. Phasellus commodo cursus pretium.</p>
          <div className="row">
            <div className="col">
              <a className="btn btn-success form-control" href="/Home/ProductDetails?productId=3">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ProductCard_3
