import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';

import { AppRoutes } from './routes';

dotenv.config();

createConnection()
	.then(() => {
		const server = express();
		server.use(express.json());

		AppRoutes.forEach((route) => {
			server[route.method](
				route.path,
				(request: Request, response: Response, next: Function) => {
					route
						.action(request, response)
						.then(() => next)
						.catch((err: Error) => next(err));
				}
			);
		});

		server.listen(3333, () => console.log('Server online'));
	})
	.catch((err) => console.log(err));
