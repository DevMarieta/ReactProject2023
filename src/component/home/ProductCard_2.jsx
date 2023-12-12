import React from 'react'

export default function ProductCard_2() {
  return (

      <div className="col-12 col-md-6 col-lg-4">
  <div className="p-0 my-3 border rounded">
    <div className="card">
      <h3 className="card-title text-white-50 text-center py-2">Paneer Tikka</h3>
      <img src="https://localhost:7000/ProductImages/2.jpg" className="card-img-top" alt="Paneer Tikka" />
      <div className="card-body">
        <div className="d-flex justify-content-between py-2">
          <span className="text-danger" style={{ fontSize: '20px' }}>14,00 &#x43B;&#x432;.</span>
          <span className="badge bg-warning text-white p-2">Appetizer</span>
        </div>
        <p className="card-text">Quisque vel lacus ac magna, vehicula sagittis ut non lacus.<br/>Vestibulum arcu turpis, maximus malesuada neque. Phasellus commodo cursus pretium.</p>
        <div className="row">
          <div className="col">
            <a className="btn btn-success form-control" href="/Home/ProductDetails?productId=2">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
  )
}
