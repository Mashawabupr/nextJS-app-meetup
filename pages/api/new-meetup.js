import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;

    let client = await MongoClient.connect(
      "mongodb+srv://marikanik:Y7FGDioTU7JUm3pk@cluster0.yysvd7c.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    let db = client.db();
    let meetupsCollection = db.collection("meetups");
    let result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Done!" });
  }
}
export default handler;
