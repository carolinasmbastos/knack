const axios = require("axios");
const utils = require("./Utils");
require("dotenv").config();

exports.getNews = (req, res) => {
  let urlNews = `https://newsapi.org/v2/everything?q=artwork&sortBy=relevancy&language=en&apiKey=${process.env.NEWS_API_KEY}`;

  axios
    .get(urlNews)
    .then(result => {
      // console.log("parameters: " + res.data.parameters.rows)
      console.log(result.data);
      let pos = utils.randomPos(result.data.articles.length);
      res.send(result.data.articles.slice(pos, pos + 3));
    })
    .catch(err => {
      console.log(err);
    });
};
