import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("airplanes").insert([
    {
      nome: "E2-190",
      marca: "Embraer",
      ano: 2014,
      descricao: "Aeronave de transporte de carga",
      vendido: true,
    },
    {
      nome: "KC-390",
      marca: "Embraer",
      ano: 2015,
      descricao: "Aeronave de transporte de carga",
      vendido: false,
    },
    {
      nome: "737-100",
      marca: "Boeing",
      ano: 1998,
      descricao: "Aeronave de transporte comercial",
      vendido: false,
    },
    {
      nome: "A320",
      marca: "Airbus",
      ano: 1995,
      descricao: "Aeronave de transporte de carga",
      vendido: true,
    },
  ]);
}
