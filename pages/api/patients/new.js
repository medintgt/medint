import { connectToDatabase } from "@middleware/database";
    import { ObjectId } from "mongodb";

export default async function handler(req, res){
if (req.method == "POST") {
    const post = req.body;
    const insertThis = {
        "first_name": post.first_name,
        "middle_name": post.middle_name,
        "last_name": post.last_name,
        "dpi": String(post.dpi),
        "phone_number": post.phone_number,
        "emergency": {
            name: "",
            phone_number: "",
            relatiionship: ""
        },
        "country": post.country,
        "academic_level": post.academic_level,
        "born_date": post.born_date,
        "gender": post.gender,
        "marital_status": post.marital_status,
        "profession": post.profession,
        "retired": ""
    }
    async function insertData() {
        const {db} = await connectToDatabase();
        const data = await db.collection("patients").insertOne(insertThis)
        res.json(data);
    }
    if (!Number.isNaN(insertThis.dpi)) {
        const {db} = await connectToDatabase();
        const dpiCheck = await db.collection("patients").findOne({dpi:insertThis.dpi})
        if (dpiCheck) {
            res.send(dpiCheck._id)
        } else {
            insertData()
            
        }
    } else {
        res.send("The DPI/CUI value is not valid.")    
    }

} else {
    res.send("Method not allowed.")
}
}