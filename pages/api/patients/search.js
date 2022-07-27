import { connectToDatabase } from "@middleware/database";
import Cors from "cors";

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

  const filter = req.body;
  const regex = new RegExp(filter.email);

  try {
    const { db } = await connectToDatabase();
    const data = await db
      .collection("patients")
      .find({ email: regex  })
      .limit(3)
      .toArray();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
