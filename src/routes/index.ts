import { UserController } from '../repositories/Users.repositories';

const userController = new UserController();

/**
 * All application routes.
 */
const AppRoutes = [
	{
		path: '/',
		method: 'get',
		action: userController.getAll,
	},
	{
		path: '/register',
		method: 'post',
		action: userController.create,
	},
	{
		path: '/editar',
		method: 'put',
		action: userController.create,
	},
	{
		path: '/deletar',
		method: 'delet',
		action: userController.create,
	},
];

export { AppRoutes };
