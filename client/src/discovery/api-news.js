import axios from 'axios';
import { resolve } from 'dns';
import { rejects } from 'assert';

const getNews = () => {
        

    let urlNews = 'https://newsapi.org/v2/everything?q=artwork&from=2019-10-08&sortBy=publishedAt&apiKey=d1cb14037d284372be426958324f6234';

    return new Promise((resolve,reject)=>{
      axios.get(urlNews)
      .then(res => {
          // console.log("parameters: " + res.data.parameters.rows)
          // console.log(res.data);
        resolve(res.data.articles);
      })
      .catch(err => {
        console.log(err);
      });
    })
    
  
    
}

export {getNews}