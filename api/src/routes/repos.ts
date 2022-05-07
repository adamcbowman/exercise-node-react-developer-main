/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-shadow */
import { Router, Request, Response } from 'express';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  //return arrays from data/repos.json where fork = false

  const repos = require('../../data/repos.json');
  const reposData = repos.filter(
    (repo: { fork: boolean }) => repo.fork === false
  );
  res.json(reposData);
});
