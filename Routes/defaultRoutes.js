import express from "express";

import {getDefault} from "../Controllers/defaultController.js";

const router = express.Router()

router.get('/', getDefault)

export default router