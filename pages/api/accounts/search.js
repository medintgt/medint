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

  var filter = req.body;
  let pattern =  new RegExp('\\b' + filter.value, 'i');
  try {
      const { db } = await connectToDatabase();
      const data = await db
      .collection("fin-accounts")
      .find({ name: pattern})
      .limit(10)
      .toArray();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
