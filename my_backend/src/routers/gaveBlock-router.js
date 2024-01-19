import express from "express";
import { getBlocks } from "../controllers/gave-control.js";

export const getBlockRouter = express.Router();
getBlockRouter.get("/getBlocks", getBlocks);