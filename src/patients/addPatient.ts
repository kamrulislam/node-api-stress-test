import * as asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
import {v4} from 'uuid';
import MongoDbHelper from '../mongodb/dbHelper';

async function run (patient: any) {
  const collection = await MongoDbHelper.getCollection();
  return await collection.insertOne(patient);
}

const addPatient = asyncHandler(async (req: Request, res: Response) => {
  const patient = req.body;
  patient.id = v4();
  res.json(await run(patient));
});

export {
  addPatient
}