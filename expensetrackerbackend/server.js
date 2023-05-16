const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesurls = require("./routes/routes");
const cors = require("cors");
//console.log("process", process.env.DATABASE_ACCESS);
mongoose.connect(
  "mongodb+srv://spandanasirasani2000:9J5P9Uk1UXibCpkp@expensetracker.cghrwf5.mongodb.net/expenseTrackerTemplate?retryWrites=true&w=majority"
);
console.log("Database Connected");
app.use(express.json());
app.use(cors());
app.use("/app", routesurls);
app.listen(4000, () => {
  console.log("Server is listening");
});
