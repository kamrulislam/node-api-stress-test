import { Router } from 'express';
import * as welcome from '../welcome/index';
import { findAllPatients, addPatient } from '../patients';

export const index = Router();

index.get('/', welcome.index);
index.get('/patients', findAllPatients)
index.post('/patients/new', addPatient)