import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';
import { make } from '../utils/hash';

class UserController {
	async getAll(request: Request, response: Response) {
		const userRepository = getRepository(User);

		const users = await userRepository.find();

		users.forEach((del) => delete del.password);

		response.status(200).send(users);
	}

	async create(request: Request, response: Response) {
		const { name, email, password } = await request.body;
		const userRepository = getRepository(User);

		const userAlreadyExists = await userRepository.findOne({ email });
		const cryptoPassword = await make(password);

		if (userAlreadyExists) {
			response.status(400).send({ message: 'Usuário já existe!' });
		} else {
			const user = userRepository.create({
				name,
				email,
				password: cryptoPassword,
			});

			await userRepository.save(user);

			response.status(200).send({ message: 'Usuário cadastrado com sucesso!' });
		}
	}
}

export { UserController };
