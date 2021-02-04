import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrphanages1602593050383 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // realiza alterações, cria tabela, deleta campo etc
    await queryRunner.createTable(
      new Table({
        name: 'orphanages',
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
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'longitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'opening_hours',
            type: 'varchar',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //Desfaz oq foi feito do up
    await queryRunner.dropTable('orphanages');
  }
}