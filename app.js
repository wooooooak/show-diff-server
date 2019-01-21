const express = require("express");
const cors = require("cors");
const fs = require("fs");
const summary = require("./output_summary/v1_v2_summary.json");
const dirTree = require("directory-tree");

const app = express();
app.use(cors());
const modList = dirTree("./v1v2_mod", { attributes: [] });
const delList = dirTree("./v1v2_del", { attributes: [] });
const addList = dirTree("./v1v2_add", { attributes: [] });

app.get("/list/mod", function(req, res) {
  console.log("mod!");
  res.json({ tree: modList });
});

app.get("/list/add", function(req, res) {
  console.log("add!");
  res.json({ tree: addList });
});
app.get("/list/del", function(req, res) {
  console.log("del!");
  res.json({ tree: delList });
});

app.get("/summary", function(req, res) {
  res.json(summary);
});

app.get("/diff_file", function(req, res) {
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
  // for (i in array) {
  // 	console.log(array[i]);
  // }

  res.json({ content: jsonArray });
});

var server = app.listen(3001, function() {
  console.log("Express server has started on port 3001");
});

// console.log(tree);
