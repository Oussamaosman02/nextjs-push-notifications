const webpush = require("../../utils/webpush");
export default async function NewOne(req, res) {
  console.log(req.body);
  const { message, title, ps } = req.body;
  const subs = JSON.parse(ps);
  console.log(subs);
  const payload = JSON.stringify({
    title: title,
    message: message,
  });
  try {
    await webpush.sendNotification(subs, payload);
  } catch (error) {
    console.error(error);
  }
}
