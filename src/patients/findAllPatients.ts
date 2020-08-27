import * as asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
import MongoDbHelper from '../mongodb/dbHelper';

async function run () {
  const collection = await MongoDbHelper.getCollection();
  return await collection.find({}).toArray();
}

const findAllPatients = asyncHandler(async (req: Request, res: Response) => {
  res.json(await run());
});

export {
  findAllPatients
}