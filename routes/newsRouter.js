const express = require("express");
const router = express.Router();

let newsController = require('../controllers/newsController')


//Developer: Carol
// EndPoint to fetch all the newss from newsBride 
router.get('/news', newsController.getNews)

exports.newsRouter = router;