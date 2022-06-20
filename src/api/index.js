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
export const getUserById = (id) => API.get(`/users/${id}`);

export const addQuestion = (data) => API.post("/questions", data);

export const getQuestions = (page) =>
  API.get(`/questions?skip=${(page - 1) * 10}&limit=10`);

export const getQuestionsByQuery = (query, page) =>
  API.get(`/questions/search?query=${query}&skip=${(page - 1) * 10}&limit=10`);

export const getQuestionById = (id) => API.get(`/questions/${id}`);

export const updateQuestionById = (id, data) =>
  API.patch(`/questions/${id}`, data);

export const addSolution = (data) => API.post("/solutions", data);
export const voteSolution = (id, data) =>
  API.post(`/solutions/${id}/vote`, data);

export const addComment = (data) => API.post("/comments", data);
export const getCommentById = (id) => API.get(`/comments/${id}`);
export const addReply = (id, data) => API.post(`/comments/${id}/reply`, data);
