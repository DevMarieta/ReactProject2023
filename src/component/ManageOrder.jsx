import React from 'react';

function ManageOrder() {
  return (
    <div className="container">
      <main role="main" className="pb-3">
        <div className="card shadow border-0 mt-4">
          <div className="card-header bg-secondary bg-gradient ml-0 py-3 d-flex justify-content-between">
            <div className="row">
              <h1 className="text-white">Order List</h1>
            </div>
            <ul className="list-group list-group-horizontal-sm pt-2">
              <a style={{ textDecoration: 'none' }} href="/Order/OrderIndex?status=approved">
                <li className="list-group-item">Approved</li>
              </a>
              <a style={{ textDecoration: 'none' }} href="/Order/OrderIndex?status=readyforpickup">
                <li className="list-group-item">Ready for Pickup</li>
              </a>
              <a style={{ textDecoration: 'none' }} href="/Order/OrderIndex?status=cancelled">
                <li className="list-group-item">Cancelled</li>
              </a>
              <a style={{ textDecoration: 'none' }} href="/Order/OrderIndex?status=all">
                <li className="list-group-item active text-white bg-secondary">All</li>
              </a>
            </ul>
          </div>
          <div className="card-body p-4">
            <table id="tblData" className="table table-bordered table-striped pt-3" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              {/* Можете да добавите редове с данни тук */}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManageOrder;
