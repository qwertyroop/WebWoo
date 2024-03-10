const connectToDb = require('../../lib/connectodb');

export default async function handler(req, res) {
    const { db, client } = await connectToDb();
    const tools = db.collection('posts');
    if(req.method == 'GET'){
        const posts = await tools.find({}, { projection: { title: 1, body: 1, src: 1 , siteLink: 1, category : 1} }).toArray();
        client.close();
        res.json(posts);
    }
        
}
