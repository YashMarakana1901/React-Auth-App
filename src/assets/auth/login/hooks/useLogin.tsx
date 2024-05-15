/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [error, setError] = useState("");

  const login = async (username: any, password: any) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        return { success: true };
      }
    } catch (error) {
      setError("Invalid username or password");
      return { success: false, error };
    }
  };

  return { login, error };
};

export default useLogin;
