import { Router } from 'express';
import * as welcome from '../welcome/index';

export const index = Router();

index.get('/', welcome.index);
