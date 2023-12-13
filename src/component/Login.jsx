import React from "react";

function Login() {
  return (
    <div className="container">
      <main role="main" className="pb-3">

        <form method="post">
          <div className="container border p-4">
            <div className="row text-center">
              <h1>Login</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 pb-2">

                <input
                  asp-for="UserName"
                  className="form-control"
                  placeholder="Username..."
                />
                <span asp-validation-for="UserName" className="text-danger" />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">

                <input
                  asp-for="Password"
                  className="form-control"
                  placeholder="Password..."
                />
                <span asp-validation-for="Password" className="text-danger" />
              </div>
              <div className="col-12 col-md-6 offset-md-3 pb-2">

                <button
                  type="submit"
                  className="form-control btn btn-success"
                  value="Submit"
                >
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
