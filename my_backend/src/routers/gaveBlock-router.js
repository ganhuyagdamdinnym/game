import express from "express";
import { getBlocks, etBlocks } from "../controllers/gave-control.js";
export const getBlockRouter = express.Router();
getBlockRouter.get("/getblocks", getBlocks);
getBlockRouter.post("/etblocks", etBlocks);
