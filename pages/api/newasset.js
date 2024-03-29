const connectToDb = require('../../lib/connectodb');

export default async function handler(req, res) {
    const { db, client } = await connectToDb();
    const newAsset = db.collection('newasset');
    if (req.method == 'POST') {
        const { title, body, siteLink, email } = req.body;
        const result = await newAsset.insertOne({ title, body, siteLink, email  });
        client.close();
        res.json(result);
    }

}
