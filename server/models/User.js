import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 5,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default:
        "https://www.shutterstock.com/image-vector/user-icon-vector-trendy-flat-600nw-1720665448.jpg",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
