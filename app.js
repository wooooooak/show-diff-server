import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

import api from "./router";

app.use("/", api);

// app.get("/tree/mod", function(req, res) {
//   res.json({ tree: modList });
// });

// app.get("/tree/add", function(req, res) {
//   res.json({ tree: addList });
// });

// app.get("/tree/del", function(req, res) {
//   res.json({ tree: delList });
// });

var server = app.listen(3001, function() {
  console.log("Express server has started on port 3001");
});
