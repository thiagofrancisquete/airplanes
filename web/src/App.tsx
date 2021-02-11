import React from "react";
import "./App.css";
import Header from "./components/Header";

import { Link, BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="Gestão de Aeronaves" />

        <div className="pager">
          <div className="acoes-container">
            <div className="btn-acoes">
              <Link to="/aeronaves">
                <button className="btn-big btn-aeronave">Ver Aeronaves</button>
              </Link>
              <Link to="/cadastrar">
                <button className="btn-big btn-cadastro">
                  Cadastrar Aeronave
                </button>
              </Link>
            </div>
            <Link to="/">Home</Link>
          </div>
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
