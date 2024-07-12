// /pages/api/tasks.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'data', 'tasks.json');

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } else if (req.method === 'POST') {
    const { tasks } = req.body;
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    res.status(200).json({ message: 'Tasks saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
