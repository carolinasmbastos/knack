const {artGalleryRouter} = require("./artGalleryRouter.js");
const {artistRouter} = require("./artistRouter.js");
const {artworkRouter} = require("./artworkRouter.js");
const {orderRouter} = require("./orderRouter.js");

const express = require("express");
const router = express.Router();
let prefix = "";


router.use(prefix, artGalleryRouter);
router.use(prefix, artistRouter);
router.use(prefix, artworkRouter);
router.use(prefix, orderRouter);

exports.indexRouter = router;