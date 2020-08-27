import * as asyncHandler from 'express-async-handler';
import {Request, Response} from 'express';
import {v4} from 'uuid';
import MongoDbHelper from '../mongodb/dbHelper';

async function run (patient: any) {
  const collection = await MongoDbHelper.getCollection();
  // create a filter for a movie to update
  const filter = { id: patient.id };

  // this option instructs the method to create a document if no documents match the filter
  const options = { upsert: true };

  // create a document that sets the plot of the movie
  const updateDoc = {
    $set: patient,
  };

  return await collection.updateOne(filter, updateDoc, options);
}

const updatePatient = asyncHandler(async (req: Request, res: Response) => {
  const patient = req.body;
  const patientId = req.params.id;
  patient.id = patientId;
  res.json(await run(patient));
});

export {
    updatePatient
}