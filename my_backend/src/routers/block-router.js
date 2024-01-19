import express from "express";
import { Blocks } from "../controllers/block-controll.js";
export const BlockRouter = express.Router();
BlockRouter.get("/blocks", Blocks);