export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Mentors' })
    }
}
