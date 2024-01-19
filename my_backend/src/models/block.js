import { model, Schema } from "mongoose"


const BlockSchema = new Schema({
    row1: Array,
    row2: Array,
    row3: Array,
    row4: Array,
    row5: Array,
    row6: Array,
    row7: Array,
    row8: Array,
    row9: Array,
    row10: Array
});
export const BlockModel = model("all-block", BlockSchema);