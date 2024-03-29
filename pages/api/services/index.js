import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const {id} = req.query;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("services").find({}).limit(20).toArray();

    res.json(data);
}