const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
const { MONGOURI } = require("./key");
require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});

mongoose.connection.on("error", err => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
