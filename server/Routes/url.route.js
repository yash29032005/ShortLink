const express = require("express");
const {
  shortner,
  redirect,
  analytics,
} = require("../Controller/url.controller");
const Router = express.Router();

Router.post("/short", shortner);
Router.get("/:shortId", redirect);
Router.get("/analytics/:shortId", analytics);

module.exports = Router;
