import { Entity, CreateDateColumn, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
	@PrimaryColumn('uuid')
	readonly idUser: string;

	@Column()
	name: string;

	@Column()
	nomeSocial: string;

	@Column()
	email: string;

	@Column()
	telefone: string;

	@Column()
	aniversario: Date;

	@Column()
	linkedin: string;

	@Column()
	github: string;

	@Column()
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@CreateDateColumn()
	updatedAt: Date;

	constructor() {
		if (!this.idUser) {
			this.idUser = uuid();
		}
	}
}

export { User };
