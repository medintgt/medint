import Cors from "cors";
import { connectToDatabase } from "@middleware/database";
import { ObjectId } from "mongodb";

const cors = Cors({
  methods: ["GET", "HEAD"],
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

  const { filters } = req.body;

  const { db } = await connectToDatabase();

  try {
    const data = await db
      .collection("patients")
      .find({})
      .limit(/* filters.limit */ 20)
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
