import React, { useState, ChangeEvent } from "react";
import api from "../../services/api";

const Criar = () => {
  const [selectedMarca, setSelectedMarca] = useState("Embraer");
  const [selectedStatus, setSelectedStatus] = useState("0");
  const [formData, setFormData] = useState({
    nome: "",
    ano: "",
    descricao: "",
  });

  function handleSelectedMarca(event: ChangeEvent<HTMLSelectElement>) {
    const marca = event.target.value;
    setSelectedMarca(marca);
  }

  function handleSelecteStatus(event: ChangeEvent<HTMLSelectElement>) {
    const status = event.target.value;
    console.log(status);
    setSelectedStatus(status);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    const { nome, ano, descricao } = formData;
    const vendido = selectedStatus;
    const marca = selectedMarca;

    const data = {
      marca,
      nome,
      ano,
      descricao,
      vendido,
    };
    await api.post("/aeronaves", data);

    alert("Enviado com sucesso");
  }

  return (
    <div className="criar">
      <form className="forms" onSubmit={handleSubmit}>
        <h2>Cadastro de aeronaves</h2>
        <div className="marca-container">
          <label htmlFor="marca">Fabricante da aeronave</label>
          <br />
          <select
            name="marca"
            id="marca"
            className="input-padrao select-marca"
            value={selectedMarca}
            onChange={handleSelectedMarca}
            required
          >
            <option value="Embraer">Embraer</option>
            <option value="Boeing">Boeing</option>
            <option value="Airbus">Airbus</option>
          </select>
        </div>
        <label htmlFor="nome">Nome da aeronave</label>
        <br />
        <input
          type="text"
          name="nome"
          id="nome"
          className="input-aeronave input-padrao"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="ano">Ano de fabricação da aeronave</label>
        <input
          type="text"
          name="ano"
          id="ano"
          className="input-ano input-padrao"
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="descricao">Descrição</label>
        <input
          name="descricao"
          id="descricao"
          className="input-padrao"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="vendido">Status de venda</label>
        <br />
        <select
          name="vendido"
          id="vendido"
          className="select-vendido input-padrao"
          value={selectedStatus}
          onChange={handleSelecteStatus}
          required
        >
          <option value="0">Não vendido</option>
          <option value="1">Vendido</option>
        </select>
        <button className="btn-gravar" type="submit">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Criar;
