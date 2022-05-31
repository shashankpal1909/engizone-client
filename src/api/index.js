import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userJWT")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("userJWT")}`;
  }
  return req;
});

export const signIn = (data) => API.post("/users/sign-in", data);
export const signUp = (data) => API.post("/users/sign-up", data);

export const getUser = () => API.get("/users/me");
