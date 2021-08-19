const path = require("path");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todosRoutes = require("./routes/todos");
const { request } = require("express");

// Express init
const app = express();

// Config dotEnv
dotenv.config({ path: "./.env" });

// Parse incoming data
app.use(express.json({ limit: "20kb", extended: true }));

// Cors
app.use(cors());
app.options("*", cors());

// Serving static assets
if (process.env.NODE_ENV === "production") {
  // Set static assets
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Routes's
app.use("/todos", todosRoutes);

// Connecting to DB
mongoose
  .connect(process.env.mongoDBConnectURL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected To Database Successfully"))
  .catch((error) => console.log("Error in database connection", error.message));

mongoose.set("useFindAndModify", false);

// Servering On
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(`server up and running on http://localhost:${port}/`)
);
