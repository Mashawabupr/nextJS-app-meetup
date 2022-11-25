import { MongoClient } from "mongodb";
async function meetup(req, res) {
  if (req.method === "POST") {
    let data = req.body;
    let client = await MongoClient.connect(
      `mongodb+srv://marikanik1999:hDZY0p5R2SVTg0f3@cluster0.tu6uqsx.mongodb.net/meetup?retryWrites=true&w=majority`
    );
    let db = client.db();
    let meetupsCollection = db.collection("meetups");
    await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: "success" });
  }
}
export default meetup;
