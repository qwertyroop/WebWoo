const { MongoClient } = require('mongodb');

async function connectToDb() {
    const client = new MongoClient(process.env.MONGODB_URI, { useUnifiedTopology: true });

    await client.connect();
    const db = client.db(process.env.MONGODB_DB); 

    return { db, client };
}

module.exports = connectToDb;