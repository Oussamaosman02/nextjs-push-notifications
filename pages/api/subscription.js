export default function subscription(req, res) {
  const pushSubscription = req.body;
  console.log(pushSubscription);

  res.status(200).json();
}
