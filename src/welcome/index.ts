import {Request, Response} from 'express';
import * as asyncHandler from 'express-async-handler';

export let index = asyncHandler(async (req: Request, res: Response) => {
  res.json(`Welcome to base API ${process.env.API_VERSION}`);
});
