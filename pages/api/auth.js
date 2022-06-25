import { databaseService } from "../../services/databaseService"

const service = databaseService();

export default async function handler(req, res) {
    const users = await service.getUsers();
    res.status(200).json(users);
  }