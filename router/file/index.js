import express from 'express';

import { getSummary, getDiffFile, getOriginFile } from './file.ctrl';

const router = express.Router();

router.get('/summary', getSummary);
router.get('/diff', getDiffFile);
router.get('/origin', getOriginFile);

export default router;
