import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userModel = new Schema({
  name: { type: String },
  email: { type: String }
});

export default mongoose.model("users", userModel);
