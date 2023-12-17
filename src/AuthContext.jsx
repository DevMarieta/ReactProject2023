import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toastr from "toastr";

//admin@abv.bg
//customer@abv.bg
//Aa!1asd

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    try { 
      const response = await fetch(
        "https://mangoservicesauthapisf.azurewebsites.net/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      );

      const data = await response.json();
      if (data.isSuccess) {
        const decoded = jwtDecode(data.result.token);
        const ok = {
          role: decoded.role,
          name: decoded.name,
          token: data.result.token,
        };
        toastr.success("Success");
        setUser(ok);
        sessionStorage.setItem("amam", JSON.stringify(ok));
      } else {
        toastr.error("Login failed, invalid credentials");
      }
      navigate("/");
    } catch (err) {}
  };

  const logoutUser = async () => {
    sessionStorage.removeItem("amam");
    setUser(null);
  };

  const getToken = () => {
    try {
      return JSON.parse(sessionStorage.getItem("amam")).token;
    } catch (err) {
      console.log(err);
      navigate("/Login");
    }
  };

  const registerUser = async (userInfo) => {
    try {
      // let response = await account.create(
      //   ID.unique(),
      //   userInfo.email,
      //   userInfo.password1,
      //   userInfo.name
      // );

      // await account.createEmailSession(userInfo.email, userInfo.password1);
      // let accountDetails = await account.get();
      // setUser(true);
      navigate("/");
    } catch (error) {
      console.error(error);
      //setUser(true);
      navigate("/");
    }
  };

  const checkUserStatus = async () => {
    try {
      const sessionUser = JSON.parse(sessionStorage.getItem("amam"));
      setUser(sessionUser);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    getToken,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};

//Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
