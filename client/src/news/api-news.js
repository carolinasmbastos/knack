import axios from "axios";
import { resolve } from "dns";
import { rejects } from "assert";

const getNews = () => {
  return axios
    .get("/api/news")
    .then(res => {
      
      //console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { getNews };
