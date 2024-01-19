import express from "express";
import cors from "cors"
import { connect } from "./mongodb.js";
import { BlockRouter } from "./routers/block-router.js";
import { getBlockRouter } from "./routers/gaveBlock-router.js";
const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use(BlockRouter)
app.use(getBlockRouter)
const port = 8002;
app.listen(port, () => {
    console.log("power on" + port);
}); 