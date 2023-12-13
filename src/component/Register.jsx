import React, { useState } from "react";

function Register() {
  const initialValue = { Email: "", Name: "", PhoneNumber: "", Password: "" };
  const [formValue, setFormValue] = useState(initialValue);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  return (
    <div className="container">
      <main role="main" className="pb-3">
        {/* action="http://localhost:5174/register"  */}

        <form method="post">
          <div className="container border p-4">
            <div className="row text-center p-3">
              <h1>Register</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  className="form-control"
                  placeholder="Email..."
                  type="text"
                  data-val="true"
                  data-val-required="The Email field is required."
                  id="Email"
                  name="Email"
                  value={formValue.Email}
                  onChange={handleChange}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"
                />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  className="form-control"
                  placeholder="Name..."
                  type="text"
                  data-val="true"
                  data-val-required="The Name field is required."
                  id="Name"
                  name="Name"
                  value={formValue.Name}
                  onChange={handleChange}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Name"
                  data-valmsg-replace="true"
                />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  className="form-control"
                  placeholder="Phone Number..."
                  type="text"
                  data-val="true"
                  data-val-required="The PhoneNumber field is required."
                  id="PhoneNumber"
                  name="PhoneNumber"
                  value={formValue.PhoneNumber}
                  onChange={handleChange}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="PhoneNumber"
                  data-valmsg-replace="true"
                />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  className="form-control"
                  placeholder="Password..."
                  type="text"
                  data-val="true"
                  data-val-required="The Password field is required."
                  id="Password"
                  name="Password"
                  value={formValue.Password}
                  onChange={handleChange}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Password"
                  data-valmsg-replace="true"
                />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <select className="form-select" id="Role" name="Role">
                  <option disabled selected>
                    --Select Role--
                  </option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="CUSTOMER">CUSTOMER</option>
                </select>
              </div>

              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <button
                  type="submit"
                  className="form-control btn btn-success"
                  value="Submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
