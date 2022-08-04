import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    if(req.method !== "POST") {
      res.status(405).end()
      return
    }
    const email = req.body.email;
    const password = req.body.password;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("users").findOne({email: email});

    if (data == null) {
      return res.status(400).send("This user does not exist.")
    }
    if (data.password === password) {
      return res.status(200).json(data)
    } else {
      return res.status(400).send("Wrong password.")
    }
}