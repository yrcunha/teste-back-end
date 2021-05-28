import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Checklist1622218740179 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'checklist',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'title',
						type: 'varchar',
					},
					{
						name: 'description',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'user',
						type: 'varchar',
					},
					{
						name: 'javastcript',
						type: 'boolean',
					},
					{
						name: 'typescript',
						type: 'boolean',
					},
					{
						name: 'typeorm',
						type: 'boolean',
					},
					{
						name: 'swagger',
						type: 'boolean',
					},
					{
						name: 'colletcitonPostman',
						type: 'boolean',
					},
					{
						name: 'created_at',
						type: 'timestamp with time zone',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp with time zone',
						default: 'now()',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('checklist');
	}
}
