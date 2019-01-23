const express = require("express");
const cors = require("cors");
const fs = require("fs");
const summary = require("../diff-java/Result/output_summary/v1_v2_summary.json");
const dirTree = require("directory-tree");

const app = express();
app.use(cors());

const modList = dirTree("../diff-java/Result/v1v2_mod");
const delList = dirTree("../diff-java/Result/v1v2_del");
const addList = dirTree("../diff-java/Result/v1v2_add");

app.get("/tree/mod", function(req, res) {
  res.json({ tree: modList });
});

app.get("/tree/add", function(req, res) {
  res.json({ tree: addList });
});

app.get("/tree/del", function(req, res) {
  res.json({ tree: delList });
});

app.get("/file/summary", function(req, res) {
  res.json(summary);
});

app.get("/file/diff", function(req, res) {
  // console.dir(req.query);
  const array = fs
    .readFileSync(req.query.path)
    .toString()
    .split("\n");
  const jsonArray = array.map(str => {
    const v1Line = str.slice(0, 9);
    const v2Line = str.slice(10, 18);
    const symbol = str.slice(19, 20);
    const string = str.slice(20);
    return {
      v1Line,
      v2Line,
      symbol,
      string
    };
  });

  res.json({ content: jsonArray });
});

var server = app.listen(3001, function() {
  console.log("Express server has started on port 3001");
});
