import express from "express";

import file from "./file";
import tree from "./tree";

const router = express.Router();

router.use("/file", file);
router.use("/tree", tree);

export default router;
