import { Router } from 'express';
import * as welcome from '../welcome/index';
import { findAllPatients, addPatient, findPatientById, updatePatient } from '../patients';

export const index = Router();

index.get('/', welcome.index);
index.get('/patients', findAllPatients);
index.get('/patients/:id', findPatientById);
index.put('/patients/:id', updatePatient);
index.post('/patients/new', addPatient);
