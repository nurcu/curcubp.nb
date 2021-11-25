import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4080/api",  //ToDo: use .env
  headers: {
    "Content-type": "application/json"
  }
});