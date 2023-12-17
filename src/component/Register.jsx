import React, { useContext, useEffect } from "react";
import { error } from "toastr";
//import React, {  } from "react";
import { RegistrationContext } from "./RegistrationContext";


function Register() {
  const { formValue, setFormValue } = useContext(RegistrationContext);

  const initialValue = { Email: "", Name: "", PhoneNumber: "", Password: "" };
  //const [formValue, setFormValue] = useState();
  const [formError, setFormError] = useState({});
  //const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true)
  };

useEffect(() => {
  console.log(formError)
if(Object.keys(formError).length === 0 && isSubmit ) {
console.log(formValue)
}
},[formError])

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
  if (!values.Email) {
    errors.Email = "Email is required!";
  } else if (!regex.test(values.Email)) {
    errors.Email = "Invalid email format!";
  }

  if (!values.Name) {
    errors.Name = "Name is required!";
  }

  if (!values.PhoneNumber) {
    errors.PhoneNumber = "Phone Number is required!";
  }

  if (!values.Password) {
    errors.Password = "Password is required!";
  }

  return errors;
};


  return (
    <div className="container">
<pre>{JSON.stringify(formValue,undefined,2)}</pre>

      <main role="main" className="pb-3">
        {/* action="http://localhost:5174/register"  */}

        <form onSubmit={handleSubmit}    method="post">
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
                <p>{formError.Name}</p>
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
              <p>{formError.PhoneNumber}</p>
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
              <p>{formError.Password}</p>
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
