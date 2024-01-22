import express from "express";
import {
  Blocks,
  createAcc,
  handlelogin,
  putBlock,
} from "../controllers/block-controll.js";
export const BlockRouter = express.Router();
BlockRouter.get("/blocks/:id", Blocks);
BlockRouter.post("/createAcc", createAcc);
BlockRouter.post("/handlelogin", handlelogin);
BlockRouter.post("/putBlock", putBlock);
