import { model, Schema } from "mongoose";
const gaveBlockSchema = new Schema({
  id: Number,
  properValue: Boolean,
  block: Array,
});
export const gaveBlockModel = model("give-Block", gaveBlockSchema);
