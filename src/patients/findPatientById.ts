import * as asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
import MongoDbHelper from '../mongodb/dbHelper';

async function run (patientId: string) {
  const collection = await MongoDbHelper.getCollection();
  const query = { id: patientId };
  return await collection.findOne(query);
}

const findPatientById = asyncHandler(async (req: Request, res: Response) => {
  const patientId = req.params.id;
  res.json(await run(patientId));
});

export {
  findPatientById
}