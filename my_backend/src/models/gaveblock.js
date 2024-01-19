import { model, Schema } from "mongoose"
const gaveBlockSchema = new Schema({
    block1: Array,
    block2: Array,
    block3: Array,
    block4: Array,
    block5: Array
});
export const gaveBlockModel = model("give-Block", gaveBlockSchema);