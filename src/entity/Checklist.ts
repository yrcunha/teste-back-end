import { Entity, CreateDateColumn, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('checklist')
class Checklist {
	@PrimaryColumn('uuid')
	readonly id: string;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	user: string;

	@Column()
	javastcript: boolean;

	@Column()
	typescript: boolean;

	@Column()
	typeorm: boolean;

	@Column()
	swagger: boolean;

	@Column()
	colletcitonPostman: boolean;

	@CreateDateColumn()
	created_at: Date;

	@CreateDateColumn()
	updated_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Checklist };
