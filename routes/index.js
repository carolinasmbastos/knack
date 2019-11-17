const {artGalleryRouter} = require("./artGalleryRouter.js");
const {artistRouter} = require("./artistRouter.js");
const {artworkRouter} = require("./artworkRouter.js");
const {orderRouter} = require("./orderRouter.js");
const {eventRouter} = require("./eventRouter.js");
const {newsRouter} = require("./newsRouter.js");
const {monthlyArtRouter} = require("./monthlyArtRouter.js");

const express = require("express");
const router = express.Router();
let prefix = "";


router.use(prefix, artGalleryRouter);
router.use(prefix, artistRouter);
router.use(prefix, artworkRouter);
router.use(prefix, orderRouter);
router.use(prefix, eventRouter);
router.use(prefix, newsRouter);
router.use(prefix, monthlyArtRouter);

exports.indexRouter = router;