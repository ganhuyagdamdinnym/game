import express from "express";
import { getBlocks } from "../controllers/gave-control.js";

export const getBlockRouter = express.Router();
getBlockRouter.get("/getblocks", getBlocks);
