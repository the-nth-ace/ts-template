import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "bexxlebank",
  logging: true,
  entities: ["src/**/*.entity.ts"],
  migrationsRun: true,
  migrations: ["src/config/migrations/*.ts"],
  migrationsTableName: "migrations_table",
});
