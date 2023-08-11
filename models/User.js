import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type:String,
      default:'',
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
// User.createIndexes(username:"text");
export default User;
export {UserSchema};
