import { ChecklistController } from '../controller/Checklist.controller';

const checklistController = new ChecklistController();

/**
 * All application routes.
 */
const AppRoutes = [
	{
		path: '/',
		method: 'get',
		action: checklistController.getAll,
	},
	{
		path: '/',
		method: 'post',
		action: checklistController.create,
	},
	{
		path: '/editar',
		method: 'put',
		middleware: '',
		action: checklistController.update,
	},
	{
		path: '/excluir',
		method: 'delete',
		action: checklistController.delete,
	},
];

export { AppRoutes };
