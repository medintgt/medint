import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  let todayDate = new Date();
  if (req.method == "POST") {
    const post = req.body;
    const insertThis = {
      account: post.account,
      account2: post.account2,
      date: post.date,
      amount: post.amount,
      description: post.description,
      reference: post.reference,
      proof: post.proof,
      creation_date : todayDate.toISOString(),
      user_create: post.user_create,
    };
    async function insertData() {
        const {db} = await connectToDatabase();
        const data = await db.collection("fin-records").insertOne(insertThis)
        res.json(data);
    }
    insertData()
    } else {
    res.send("Method not allowed.")
}
}