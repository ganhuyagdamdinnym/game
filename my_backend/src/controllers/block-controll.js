import { BlockModel } from "../models/block.js";
export const Blocks = async (req, res) => {
    const body = req.body
    const id = "65aa50a8474f4b08b6d278de"
    console.log(body)
    const block = await BlockModel.findById(id)
    res.status(200).json(block)
};