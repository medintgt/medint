import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const {id} = req.query;
    const post = req.body;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("appointments").insertOne(post)

    res.json(data);
}