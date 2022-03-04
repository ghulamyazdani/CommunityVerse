import { MongoClient } from 'mongodb'
const uri: any = process.env.MONGODB_URI
const token: any = process.env.TOKEN

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        if (req.headers.token === token) {
            const data = req.body
            const client = await MongoClient.connect(uri)
            const db = client.db()
            const yourCollection = db.collection('Likes')
            const result = await yourCollection.insertOne(data)
            client.close()
            res.status(201).json({ message: 'Data inserted successfully!' })
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
    } else if (req.method === 'GET') {
        // const data = req.query
        if (req.headers.token === token) {
            const client = await MongoClient.connect(uri)
            const db = client.db()
            const yourCollection = db.collection('Likes')
            const result = await yourCollection.find({}).toArray()
            client.close()
            res.status(200).json(result)
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
    } else if (req.method === 'PUT') {
        if (req.headers.token === token) {
            const data = req.body
            const client = await MongoClient.connect(uri)
            const db = client.db()
            const yourCollection = db.collection('Likes')
            const result = await yourCollection.updateOne(
                { slug: data.slug },
                { $set: { likes: data.likes } },
            )
            console.log(result)
            client.close()
            res.status(200).json({ message: 'Data updated successfully? ' })
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
    }
}
