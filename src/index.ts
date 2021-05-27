import 'reflect-metadata';

import dotenv from 'dotenv';
import { Request, Response } from 'express';
import express from 'express';
import { createConnection } from 'typeorm';
import * as bodyParser from 'body-parser';
import { AppRoutes } from './routes';

dotenv.config();

createConnection()
	.then(() => {
		const server = express();
		server.use(bodyParser.json());

		AppRoutes.forEach((route) => {
			server[route.method](
				route.path,
				(request: Request, response: Response, next: Function) => {
					route
						.action(request, response)
						.then(() => next)
						.catch((err) => next(err));
				}
			);
		});

		server.listen(3333, () => console.log('Server online'));
	})
	.catch((err) => console.log(err));
