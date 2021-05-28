import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Checklist } from '../entity/Checklist';

class ChecklistController {
	async getAll(request: Request, response: Response) {
		const checklistRepository = getRepository(Checklist);

		const checklist = await checklistRepository.find();

		response.send(checklist);
	}

	async create(request: Request, response: Response) {
		const { user } = await request.body;

		const checklistRepository = getRepository(Checklist);

		const userAlreadyExists = await checklistRepository.findOne({ user });

		if (userAlreadyExists) {
			response.status(400).send({
				message:
					'Já existe Checklist para o Usuário! Lembre que só é permite um Checklist por Usuário',
			});
		} else {
			const checklist = checklistRepository.create({
				title: 'Requisitos do teste',
				description:
					'Esse checklista é especifico para informar se o usuário preenche todos os requisitos',
				user,
				javastcript: false,
				typescript: false,
				typeorm: false,
				swagger: false,
				colletcitonPostman: false,
			});

			await checklistRepository.save(checklist);

			response.status(200).send({ message: 'Checklist cadastrado com sucesso!' });
		}
	}

	async update(request: Request, response: Response) {
		const { user, javastcript, typescript, typeorm, swagger, colletcitonPostman } =
			await request.body;

		const checklistRepository = getRepository(Checklist);

		const userAlreadyExists = await checklistRepository.findOne({ user });

		if (!userAlreadyExists) {
			response.status(400).send({
				message: 'Não existe Checklist para o Usuário!',
			});
		} else {
			checklistRepository.update(userAlreadyExists.id, {
				javastcript,
				typescript,
				typeorm,
				swagger,
				colletcitonPostman,
				updated_at: new Date(),
			});

			response.status(200).send({ message: 'Checklist atualizado com sucesso!' });
		}
	}

	async delete(request: Request, response: Response) {
		const { user } = await request.body;

		const checklistRepository = getRepository(Checklist);

		const userAlreadyExists = await checklistRepository.findOne({ user });

		if (!userAlreadyExists) {
			response.status(400).send({
				message: 'Não existe Checklist para o Usuário!',
			});
		} else {
			checklistRepository.delete(userAlreadyExists.id);

			response.status(200).send({ message: 'Checklist deletado com sucesso!' });
		}
	}
}

export { ChecklistController };
