import { databaseService } from "../../services/databaseService"

const service = databaseService();

export default async function handler(req, res) {
    const method = req.method.toLowerCase();
    
    if (method !== "post") {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const users = await service.getUsers();
    res.status(200).json(users);
}