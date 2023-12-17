import React, { createContext, useState } from "react";
import axios from 'axios';
//import Register from "./Register";



const RegistrationContext = createContext();

const RegistrationProvider = ({ children }) => {
  const [formValue, setFormValue] = useState({
    Email: "",
    Name: "",
    PhoneNumber: "",
    Password: ""
  });

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:5174/api/auth/register', formValue);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <RegistrationContext.Provider value={{ formValue, setFormValue, registerUser }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export { RegistrationContext, RegistrationProvider };
