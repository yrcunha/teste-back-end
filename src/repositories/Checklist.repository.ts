import { getRepository } from 'typeorm';
import { Checklist } from '../entity/Checklist';

class ChecklistRepository {
	async list() {
		const checklistRepository = getRepository(Checklist);

		const checklist = await checklistRepository.find();

		return checklist;
	}
}

export { ChecklistRepository };
