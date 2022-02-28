import { MongoClient } from 'mongodb'
const uri: any = process.env.MONGODB_URI
export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const data = req.body
        const client = await MongoClient.connect(uri)
        const db = client.db()
        const yourCollection = db.collection('Mentors')
        const result = await yourCollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json({ message: 'Data inserted successfully!' })
    } else if (req.method === 'GET') {
        const client = await MongoClient.connect(uri)
        const db = client.db()
        const yourCollection = db.collection('Mentors')
        const result = await yourCollection.find({}).toArray()
        client.close()
        res.status(200).json(result)
    } else if (req.method === 'PUT') {
        const data = req.body
        const client = await MongoClient.connect(uri)
        const db = client.db()
        const yourCollection = db.collection('Mentors')
        const result = await yourCollection.updateOne(
            { _id: data._id },
            { $set: data },
        )
        client.close()
        res.status(200).json({ message: 'Data updated successfully? ' })
    }
}
