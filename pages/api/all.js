const webpush = require("../../utils/webpush");
import { Endpoint, mongoConn } from "../../utils/mng";
import mongoose from "mongoose";

export default async function NewOne(req, res) {
  console.log("Connecting");
  await mongoConn();
  console.log("Reading");
  const endpoint = await Endpoint.find({});
  const respuesta = JSON.parse(JSON.stringify(endpoint));
  mongoose.connection.close;

  const { message, title } = req.body;
  const payload = JSON.stringify({
    title: title,
    message: message,
  });
  try {
    respuesta.map(async (subs) => {
      const algo = {
        endpoint: subs.endpoint,
        keys: subs.keys,
      };
      console.log(algo);
      await webpush.sendNotification(algo, payload);
    });
  } catch (error) {
    console.error(error);
  }
}
