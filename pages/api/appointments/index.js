import { connectToDatabase } from "@middleware/database";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
  origin: true,
});

var date = new Date();
const todayDate = date.toISOString().slice(0, 10);

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

  try {
    const { db } = await connectToDatabase();
    const data = await db
      .collection("appointments")
      .find({ date: todayDate })
      .limit(20)
      .sort({ date: -1 })
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
