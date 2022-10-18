
import { connectToDatabase } from "@middleware/database";

export default async function handler(req, res){
if (req.method == "POST") {
    const post = req.body;
    const insertThis = {
      patient_name: post.patient_name,
      patient_id: post.patient_id,
      date: post.date,
      reason: post.reason,
      subjective: post.subjective,
      objective: post.objective,
      new_data: post.new_data,
      diagnosis: post.diagnosis,
      treatment: post.treatment,
      comments: post.comments,
      date_create: new Date(),
      user_create: post.user_create,
    }

    async function insertData() {
        const {db} = await connectToDatabase();
        const data = await db.collection("histories").insertOne(insertThis)
        res.json(data);
    }
    insertData()
    } else {
    res.send("Method not allowed.")
}
}