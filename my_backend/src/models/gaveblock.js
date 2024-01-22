import { model, Schema } from "mongoose";
const gaveBlockSchema = new Schema({
  block: Array,
});
export const gaveBlockModel = model("give-Block", gaveBlockSchema);
