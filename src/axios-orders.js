import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-6089c-default-rtdb.firebaseio.com/",
});

export default instance;
