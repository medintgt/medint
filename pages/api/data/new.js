
import { connectToDatabase } from "@middleware/database";

export default async function handler(req, res){
if (req.method == "POST") {
    const post = req.body;
    const insertThis = {
        date: post.date,
        patient: post.patient,
        type: post.type,
        value1: post.value1,
        value2: post.value2
    }

    async function insertData() {
        const {db} = await connectToDatabase();
        const data = await db.collection("data").insertOne(insertThis)
        res.json(data);
    }
    insertData()
    } else {
    res.send("Method not allowed.")
}
}