const express = require("express");
const app = express();
bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

const { indexRouter } = require("./routes/index.js");
app.use("/", indexRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.set("port", process.env.PORT || 8080);

const server = app.listen(app.get("port"), () => {
  console.log("Listening on port: " + app.get("port"));
});
