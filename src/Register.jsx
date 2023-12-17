import React from "react";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  //https://www.topcoder.com/thrive/articles/fetch-api-javascript-how-to-make-get-and-post-requests
  //https://mangoservicesauthapisf.azurewebsites.net/api/auth/register

  const createUser = async (data) => {
    try {
      const toBody = JSON.stringify(data);
      const responce = await fetch(
        "https://mangoservicesauthapisf.azurewebsites.net/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: toBody,
        }
      );
      const result = await responce.json();
      if (!result.isSuccess) {
        throw new Error("Bad Request: " + result.message);
      } else {
        await asignRole(formBody);
      }
    } catch (err) {
      //error message from backend user create
    }
  };

  const asignRole = async (formBody) => {
    const responce = await fetch("https://localhost:7002/api/auth/AssignRole", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formBody,
    });
    const result = await responce.json();
    if (!result.isSuccess) {
      if (result.message) {
        throw new Error("Bad Request: " + result.message);
      } else {
        throw new Error("Bad Request");
      }
    }
  };

  const hadleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await createUser(data);
  };

  // D:\ReactSoftUni\reactauthentication\src\Register.js
  // const IsValidate = () => {
  //   let isproceed = true;
  //   let errormessage = "Please enter the value in ";
  //   if (id === null || id === "") {
  //     isproceed = false;
  //     errormessage += " Username";
  //   }
  //   if (name === null || name === "") {
  //     isproceed = false;
  //     errormessage += " Fullname";
  //   }
  //   if (password === null || password === "") {
  //     isproceed = false;
  //     errormessage += " Password";
  //   }
  //   if (email === null || email === "") {
  //     isproceed = false;
  //     errormessage += " Email";
  //   }

  //   if (!isproceed) {
  //     toast.warning(errormessage);
  //   } else {
  //     if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
  //     } else {
  //       isproceed = false;
  //       toast.warning("Please enter the valid email");
  //     }
  //   }
  //   return isproceed;
  // };

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
                  type="text"
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
