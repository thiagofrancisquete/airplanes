import { Request, response, Response } from "express";
import knex from "../database/connection";

class AirplanesController {
  async get(req: Request, res: Response) {
    const aeronaves = await knex("airplanes").select("*");

    return res.json(aeronaves);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const aeronave = await knex("airplanes").where("id", id).first();

    if (!aeronave) {
      return res.status(404).json({ message: "Aeronave não encontrada! " });
    }

    return res.json(aeronave);
  }

  // filtrar por marca, decada, vendidos na semana
  async find(req: Request, res: Response) {
    const { marca } = req.query;

    const items = await knex("airplanes")
      .where("marca", String(marca))
      .distinct()
      .select("airplanes.*");

    return res.json(items);
  }

  async create(req: Request, res: Response) {
    const { nome, marca, ano, descricao, vendido } = req.body;

    const avioes = {
      nome,
      marca,
      ano,
      descricao,
      vendido,
    };

    await knex("airplanes").insert(avioes);

    return res.json({ ...avioes });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;

    const ano = req.body;

    try {
      const aeronave = await knex("airplanes").where("id", id).update(ano);
      if (aeronave) {
        res.status(200).json({ updated: aeronave });
      }
      return res.status(404).json({ message: "Aeronave nao encontrada" });
    } catch (err) {
      res.status(500).json({ message: "Erro" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const aeronave = await knex("airplanes").where("id", id).del();

    return res.json(aeronave);
  }
}

export default AirplanesController;
