import express from "express";

import { getTree } from "./tree.ctrl";

const router = express.Router();

router.get("/:mode", getTree);

export default router;
