import dirTree from "directory-tree";

const mode = {
  mod: dirTree("../diff-java/Result/v1v2_MOD"),
  del: dirTree("../diff-java/Result/v1v2_DEL"),
  add: dirTree("../diff-java/Result/v1v2_ADD")
};

export const getTree = (req, res) => {
  res.json({ tree: mode[req.params.mode] });
};
