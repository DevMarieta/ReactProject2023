import { useState } from "react";
import { useAuth } from "./AuthContext";
import toastr from "toastr";

//https://codeseven.github.io/toastr/demo.html
//npm install toastr
//https://www.techomoro.com/submit-a-form-data-to-rest-api-in-a-react-app/

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();

  toastr.options = { timeOut: 3000, hideDuration: 200, extendedTimeOut: 0 };
  const processLogin = (e) => {
    e.preventDefault();
    if (validate) {
      let inputObj = { userName: userName, password: password };
      try {
        loginUser(inputObj);
      } catch (err) {
        toastr.error("Login failed, invalid credentials");
      }
    }
  };

  const validate = () => {
    if (username === "" || username === null) {
      toast.warning("Please Enter Username");
      return false;
    }
    if (password === "" || password === null) {
      toast.warning("Please Enter Password");
      return false;
    }
    return true;
  };

  return (
    <div className="container">
      <main role="main" className="pb-3">
        <form onSubmit={processLogin}>
          <div className="container border p-4">
            <div className="row text-center">
              <h1>Login</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  placeholder="email..."
                />
                <span asp-validation-for="UserName" className="text-danger" />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <input
                  // type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password..."
                />
                <span asp-validation-for="Password" className="text-danger" />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">
                <button
                  type="submit"
                  className="form-control btn btn-success"
                  value="Submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;

