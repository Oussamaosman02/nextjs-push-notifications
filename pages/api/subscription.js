import { Endpoint, mongoConn } from "../../utils/mng";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const pushSubscription = req.body;
  console.log(pushSubscription);
  console.log("Connecting for adding");
  await mongoConn();
  console.log("Connected, you can add");
  const endpoint = await Endpoint.create(pushSubscription);
  res.json({ endpoint });
  mongoose.connection.close;
  console.log("Closed connection, you can't add");
}
