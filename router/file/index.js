import express from "express";

import { getSummary, getDiffFile } from "./file.ctrl";

const router = express.Router();

router.get("/summary", getSummary);
router.get("/diff", getDiffFile);

export default router;
