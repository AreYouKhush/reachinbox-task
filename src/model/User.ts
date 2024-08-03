import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  image: string;
}

const UserSchema: Schema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Boolean,
    default: "",
  },
});

let User: mongoose.Model<IUser>;
if (mongoose.models.User) {
  User = mongoose.model<IUser>("User");
} else {
  User = mongoose.model<IUser>("User", UserSchema);
}
// const User = mongoose.model<IUser>("User", UserSchema);

export default User;
