import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1561709235710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" character varying(200) NOT NULL, "year" integer NOT NULL, "length" integer NOT NULL, "votes" double precision NOT NULL, "rating" double precision NOT NULL, "genre" character varying(16) NOT NULL, CONSTRAINT "unique_movie_title_year" UNIQUE ("title", "year"), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COPY movies FROM '${ process.cwd() }/movies.csv' DELIMITER ',' CSV NULL 'NA' HEADER`);
        await queryRunner.query(`CREATE INDEX "index_movies_on_title" ON "movies" ("title") `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "index_movies_on_title"`);
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
