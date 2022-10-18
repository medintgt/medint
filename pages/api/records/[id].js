import { connectToDatabase } from "@middleware/database";
import Cors from "cors";

const whiteList = ['https://admin.medint.gt', 'https://medint.gt'];
const cors = Cors({
    methods: ["POST", "GET", "HEAD"],
    origin: true,
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
    }
    
    return resolve(result);
});
});
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors);
    const {id} = req.query;
    
  const { filters } = req.body;
  
  try {
      const { db } = await connectToDatabase();
      const data = await db
      .collection("records")
      .find({patient_id: id})
      .sort({date_create: -1})
      .limit(/* filters.limit */ 5)
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
