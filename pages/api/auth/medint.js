import { connectToDatabase } from "@middleware/database";

export default async function handler(req, res){
    if(req.method !== "POST") {
      res.status(405).end()
      return
    }
    const crypto = require('crypto')
    const email = req.body.email;
    const password = req.body.password;
    const hash = crypto.createHash('sha1').update(password).digest('hex')

    const {db} = await connectToDatabase();
    
    const data = await db.collection("users").findOne({email: email});

    if (data == null) {
      return res.status(401).end()
    }
    if (data.password === hash) {
      return res.status(200).json(data)
    } else {
      return res.status(401).end()
    }
}