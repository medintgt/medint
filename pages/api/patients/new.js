import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const post = req.body;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("patients").insertOne(post)

    res.json(data);
}