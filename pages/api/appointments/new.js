import { connectToDatabase } from "@middleware/database";

export default async function handler(req, res){
    let todayDate = new Date()
if (req.method == "POST") {
    const post = req.body;
    const insertThis = {
        time: post.time,
        time_id: post.time_id,
        last_modified: todayDate.toISOString(),
        user_create: post.user_create,
        date: post.date,
        space_id: "62ccab06c7e17f90ed3b5fab",
        patient: {
          "id": post.patient.id,
          "name": post.patient.name,
          "phone": post.patient.phone
        },
        professional: {
          id: post.professional.id,
          name: post.professional.name
        },
        creation_date : todayDate.toISOString()
      }

    async function insertData() {
        const {db} = await connectToDatabase();
        const data = await db.collection("appointments").insertOne(insertThis)
        res.json(data);
    }
    insertData()
    } else {
    res.send("Method not allowed.")
}
}