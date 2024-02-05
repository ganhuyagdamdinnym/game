import express from "express";
import {
  Blocks,
  createAcc,
  handlelogin,
  putBlock,
  restart,
} from "../controllers/block-controll.js";
export const BlockRouter = express.Router();
BlockRouter.get("/blocks/:id", Blocks);
BlockRouter.post("/createAcc", createAcc);
BlockRouter.post("/handlelogin", handlelogin);
BlockRouter.post("/putBlock", putBlock);
BlockRouter.post("/restart", restart);
