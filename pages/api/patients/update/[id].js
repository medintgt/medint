import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const post = req.body;
    const {id} = req.query;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("patients").updateOne({_id: ObjectId(id)}, {$set: post}, {})    

    res.json(data);
}