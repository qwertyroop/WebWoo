const connectToDb = require('../../lib/connectodb');

export default async function handler(req, res) {
    const { db, client } = await connectToDb();
    const tools = db.collection('animations');

    if (req.method === 'GET') {
        try {
            const posts = await tools.find({}, { projection: { title: 1, body: 1, src: 1, siteLink: 1, category: 1, logoLink: 1 } }).toArray();
            client.close();
            res.json(posts);
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Error fetching posts' });
        }
    }
}

