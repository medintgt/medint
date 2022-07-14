import NextCors from "nextjs-cors";
import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res, ){

    const {filters} = req.body;

    const {db} = await connectToDatabase();
    
    
    try {
        const data = await db.collection("patients").find({}).limit(/* filters.limit */20).toArray();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({error: 'Failed to load data'})
    }
}