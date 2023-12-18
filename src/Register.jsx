import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toastr from "toastr";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //https://www.slingacademy.com/article/javascript-check-if-a-string-contains-non-alphanumeric-characters/

  const createUser = async (data) => {
    const toBody = JSON.stringify(data);
    try {
      setLoading(true);
      const responce = await fetch(
        "https://mangoservicesauthapisf.azurewebsites.net/api/auth/register",
        //"https://localhost:7002/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: toBody,
        }
      );
      const result = await responce.json();
      if (!result.isSuccess) {
        toastr.error("Register failed" + result.message);
        setLoading(false);
      } else {
        const responce = await fetch(
          "https://mangoservicesauthapisf.azurewebsites.net/api/auth/AssignRole",
          //"https://localhost:7002/api/auth/AssignRole",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: toBody,
          }
        );
        const result = await responce.json();
        if (!result.isSuccess) {
          if (result.message) {
            toastr.error("Bad Request: " + result.message);
            setLoading(false);
          }
        } else {
          toastr.success("User Created.");
          setLoading(false);
          navigate("/Login");
        }
      }
    } catch (err) {
      //error message from backend user create
      setLoading(false);
    }
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const data = Object.fromEntries(new FormData(e.currentTarget));
      await createUser(data);
    }
  };

  function validate() {
    if (!validateName(name)) {
      return false;
    }

    if (!validatePhone(phoneNumber)) {
      return false;
    }

    if (!validatePassword(password)) {
      return false;
    }
    return true;
  }

  function containsNonAlphanumeric(str) {
    const regex = /[^a-zA-Z0-9]/;
    return regex.test(str);
  }

  function containsNumbers(str) {
    return /\d/.test(str);
  }

  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function containsLowercase(str) {
    return /[a-z]/.test(str);
  }

  function containsLetters(name) {
    return /[a-zA-Z]/g.test(name);
  }

  function validateName(name) {
    if (name.length < 2) {
      toastr.warning("Name must be min 2 characters!");
      return false;
    }
    if (!containsLetters(name)) {
      toastr.warning("Name must be contais letters!");
      return false;
    }
    return true;
  }

  function validatePassword(password) {
    //if(pas1===pas2)
    if (password.length < 6) {
      toastr.warning("Password must be min 6 characters!");
      return false;
    }

    if (!containsNonAlphanumeric(password)) {
      toastr.warning("Password must contains NonAlphaNumeric character(s)!");
      return false;
    }

    if (!containsNumbers(password)) {
      toastr.warning("Password must contains Numeric character(s)!");
      return false;
    }
    if (!containsUppercase(password)) {
      toastr.warning("Password must contains Cappital letter character(s)!");
      return false;
    }
    if (!containsLowercase(password)) {
      return false;
    }
    return true;
  }

  function validatePhone(phone) {
    const okPhone = /^\d+$/.test(phone);
    if (!okPhone) {
      toastr.warning("Phone must contains Numeric character(s)!");
    }
    return okPhone;
  }

  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form onSubmit={hadleSubmit}>
          <div className="container border p-4">
            <div className="row text-center p-3">
              <h1>Register</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  className="form-control"
                  placeholder="Email..."
                  type="email"
                  data-val="true"
                  data-val-required="The Email field is required."
                  id="Email"
                  name="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"></span>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Name"
                  data-valmsg-replace="true"></span>
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="PhoneNumber"
                  data-valmsg-replace="true"></span>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Password"
                  data-valmsg-replace="true"></span>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="text-danger field-validation-valid"
                  data-valmsg-for="Password"
                  data-valmsg-replace="true"></span>
              </div>

              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <select
                  className="form-select"
                  id="Role"
                  name="Role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}>
                  <option disabled="">--Select Role--</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="CUSTOMER">CUSTOMER</option>
                </select>
              </div>

              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <button
                  type="submit"
                  className="form-control btn btn-success"
                  value="Submit">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;
