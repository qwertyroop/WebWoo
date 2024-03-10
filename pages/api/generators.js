const axios = require('axios');
const connectToDb = require('../../lib/connectodb');

export default async function handler(req, res) {
    const { db, client } = await connectToDb();
    const tools = db.collection('generators');

    if (req.method === 'GET') {
        const url = req.query.url;

        if (url) {
            try {
                const response = await axios.get(url, { responseType: 'arraybuffer' });

                client.close();
                res.setHeader('Content-Type', response.headers['content-type']);
                return res.end(response.data);
            } catch (error) {
                client.close();
                return res.status(500).json({ message: 'Error fetching image' });
            }
        } else {
            const posts = await tools.find({}, { projection: { title: 1, body: 1, src: 1 , siteLink: 1, category : 1, logoLink : 1} }).toArray();
            client.close();
            res.json(posts);
        }
    }
}