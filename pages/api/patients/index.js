import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res){
    const {filters} = req.body;

    const {db} = await connectToDatabase();
    
    const data = await db.collection("patients").find({}).limit(/* filters.limit */20).toArray();
    
    res.json(data);
}