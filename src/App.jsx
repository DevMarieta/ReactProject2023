import { useState } from "react";
import toastr from "toastr";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";

//https://codeseven.github.io/toastr/demo.html
//npm install toastr

function App() {
  toastr.options = { timeOut: 3000, hideDuration: 200, extendedTimeOut: 0 };
  const buttonLoginClicked = (e) => {
    e.preventDefault();
    //let showToast = Math.floor(Math.random() * 2);
    //if (showToast === 1) {
    //toastr.success("User logged in successfully!");
    //} else {
    //toastr.error("Invalid username or password!");
    //}

    Math.floor(Math.random() * 2) === 1
      ? toastr.success("User logged in successfully!")
      : toastr.error("Invalid username or password!");
  };

  return (
    <>
      <Header />

   <Login /> 
      {/* <Register /> */}
      <Footer />
    </>
  );
}

export default App;
