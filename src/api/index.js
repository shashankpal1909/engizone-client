import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_BASE_URL ||
    // "https://engizone-server-git-beta-shashankpal1909.vercel.app/",
    "http://localhost:8080",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userJWT")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("userJWT")}`;
  }
  return req;
});

export const signIn = (data) => API.post("/users/sign-in", data);
export const signUp = (data) => API.post("/users/sign-up", data);
export const signOut = () => API.post("/users/sign-out");
export const getUser = () => API.get("/users/me");
export const getUserById = (id) => API.get(`/users/${id}`);
export const updateUserDetails = (data) => API.patch("/users/me", data);

export const uploadAvatar = (data) =>
  API.post(`/users/me/avatar`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
// export const getAvatarById = (id) => API.get(`/users/${id}/avatar`);

export const addQuestion = (data) => API.post("/questions", data);
export const getAllTags = () => API.get("/questions/tags");
// export const getQuestions = (page) =>
//   API.get(`/questions?skip=${(page - 1) * 10}&limit=10`);
export const getQuestionsByQuery = (query, page) =>
  API.get(`/questions?search=${query}&skip=${(page - 1) * 10}&limit=10`);
export const getQuestionsByAuthorId = (id, limit) =>
  API.get(`/questions/author/${id}?limit=${limit}`);
export const getBookmarkedQuestionsByUserId = (id, limit) =>
  API.get(`/questions/bookmarks/${id}?limit=${limit}`);
export const getQuestionById = (id) => API.get(`/questions/${id}`);
export const toggleBookmark = (id) => API.post(`/questions/${id}/bookmark`);
export const updateQuestionById = (id, data) =>
  API.patch(`/questions/${id}`, data);
export const deleteQuestionById = (id) => API.delete(`/questions/${id}`);

export const addSolution = (data) => API.post("/solutions", data);
export const voteSolution = (id, data) =>
  API.post(`/solutions/${id}/vote`, data);
export const updateSolutionById = (id, data) =>
  API.patch(`/solutions/${id}`, data);
export const deleteSolutionById = (id, data) =>
  API.delete(`/solutions/${id}`, { data });

export const addComment = (data) => API.post("/comments", data);
export const addReply = (id, data) => API.post(`/comments/${id}/reply`, data);
export const getCommentById = (id) => API.get(`/comments/${id}`);
export const deleteCommentById = (id) => API.delete(`/comments/${id}`);
// export const deleteReplyById = (id) => API.delete(`/comments/${id}/reply`);

export const sendContactUsMessage = (data) => API.post(`/messages`, data);
