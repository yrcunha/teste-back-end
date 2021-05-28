import 'reflect-metadata';

import dotenv from 'dotenv';
import express from 'express';
import swagger from 'swagger-ui-express';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';

import { AppRoutes } from './routes';
import docs from './swagger.json';

dotenv.config();

createConnection()
	.then(() => {
		const server = express();
		server.use(express.json());

		server.use('/api-docs', swagger.serve, swagger.setup(docs));

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
