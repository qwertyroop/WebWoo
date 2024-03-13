const connectToDb = require('../../lib/connectodb');

export default async function handler(req, res) {
    const { db, client } = await connectToDb();
    const newAsset = db.collection('technologies');
    if (req.method == 'POST') {
        const { title, body, src, siteLink, category, logoLink } = req.body;
        const result = await newAsset.insertOne({ title, body, src, siteLink, category, logoLink });
        client.close();
        res.json(result);
    }

}
