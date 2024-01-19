
import { gaveBlockModel } from "../models/gaveblock.js";
export const getBlocks = async (req, res) => {
    await gaveBlockModel.create({
        name: "block"
    })
    res.status(200).json("hi")
};