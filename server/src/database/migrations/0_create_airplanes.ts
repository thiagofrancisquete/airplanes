import Knex from "knex";

export async function up(knex: Knex) {
  // criar tabela
  return knex.schema.createTable("airplanes", (table) => {
    table.bigIncrements("id").primary();
    table.string("nome").notNullable();
    table.string("marca").notNullable();
    table.integer("ano", 4).notNullable();
    table.text("descricao");
    table.boolean("vendido").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.timestamp("deleted_at");
  });
}

export async function down(knex: Knex) {
  // rollback (deletar a tabela)
  return knex.schema.dropTable("airplanes");
}
