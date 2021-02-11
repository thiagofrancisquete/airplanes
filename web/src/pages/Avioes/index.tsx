import React, { useEffect, useState } from "react";

import api from "../../services/api";

interface Aeronave {
  id: number;
  nome: string;
  marca: string;
  ano: number;
  descricao: string;
  vendido: boolean;
}

const Avioes = () => {
  const [aeronaves, setAeronaves] = useState<Aeronave[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("aeronaves").then((res) => {
      setAeronaves(res.data);
    });
  }, [aeronaves]);

  function remove(id: number) {
    return api
      .delete(`/aeronaves/${id}`)
      .then((res) => {
        console.log(res.data);
        alert("removido com sucesso");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const filteredAeronaves = aeronaves.filter((aeronave) => {
    return aeronave.marca.includes(search);
  });

  return (
    <div className="avioes">
      <h2>Listagem de Aeronaves</h2>
      <div className="container-tabela">
        <input
          type="text"
          name="pesquisa"
          id="pesquisa"
          placeholder="Pesquisa por marca, ex: Embraer, Airbus"
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="tabela">
          <thead>
            <tr>
              <th>id</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Descrição</th>
              <th>Vendido</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAeronaves.map((aeronave) => (
              <tr key={aeronave.id}>
                <td>{aeronave.id}</td>
                <td>{aeronave.marca}</td>
                <td>{aeronave.nome}</td>
                <td>{aeronave.ano}</td>
                <th>{aeronave.descricao}</th>
                <td>{aeronave.vendido ? "Vendido" : "Em estoque"}</td>
                <td>
                  <button className="btn btn-editar">Editar</button>
                  <button
                    className="btn btn-delete"
                    onClick={() => remove(aeronave.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Avioes;
