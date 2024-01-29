import { model, Schema } from "mongoose";

const BlockSchema = new Schema({
  username: String,
  password: String,
  coordinate: Array,
  currentPoint: Number,
  highPoint: Number,
});
export const BlockModel = model("all-block", BlockSchema);
