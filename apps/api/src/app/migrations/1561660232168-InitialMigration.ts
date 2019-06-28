import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1561660232168 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE INDEX "index_movies_on_title" ON "movies" ("title") `);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "unique_movie_title_year" UNIQUE ("title", "year")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "unique_movie_title_year"`);
        await queryRunner.query(`DROP INDEX "index_movies_on_title"`);
    }

}
