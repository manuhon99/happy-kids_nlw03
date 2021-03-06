import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1612371814283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
              {
                name: 'id',
                type: 'integer',
                unsigned: true,
                //principal
                isPrimary: true,
                isGenerated: true,
                //a cada novo elemento o id é aumentado
                generationStrategy: 'increment',
              },
              {
                  name: 'path',
                  type: 'varchar',
              },
              {
                  name: 'orphanage_id',
                  type:'integer',
              }
            ],
            foreignKeys: [
                {
                    name: 'ImageOrphanage',
                    columnNames: ['orphanage_id'],
                    referencedTableName:'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }
}
 