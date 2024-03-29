import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const {id} = req.query;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("patients").findOne({_id: ObjectId(id)});

    res.json(data);
}