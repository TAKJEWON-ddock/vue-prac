import axios from "axios";

export const hello = async function () {
  const response = await axios.get("/hello");
  return response.data.message;
};

export const signUp = async function (params: any) {
  const response = await axios.post("/signup", params);
  return response;
};
