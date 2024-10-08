import express from "express";
import defaultRoutes from "../Routes/defaultRoutes.js";



const router = express.Router()

router.use('/default', defaultRoutes)



export default router