const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const urlRoute = require("./Routes/url.route");
const connectToDB = require("./Startup/db");
const cors = require("cors");

connectToDB();
app.use(express.json());
app.use(
  cors({
    origin: `${process.env.WEB_URL}`,
  })
);
app.use("/", urlRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server connected to ${PORT}`);
});
