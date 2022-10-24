import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";
import { config } from "dotenv";
//mnogo conf
config();
const string = process.env.URI;
export const mongoConn = async () => mongoose.connect(string);

//mongo schema

const newEndpoints = new Schema({
  endpoint: {
    type: String,
    unique: true,
  },
  expirationTime: String,
  keys: {
    p256dh: String,
    auth: String,
  },
});

newEndpoints.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
export const Endpoint = models.Endpoint || model("Endpoint", newEndpoints);
