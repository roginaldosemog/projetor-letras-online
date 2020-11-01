import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  return (
    <div className="fullscreen">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <h1>Bem vindo ao Projetor Online</h1>
            <p>Escolha a função para essa aba do navegador</p>
            <div className="row">
              <div className="col-12 col-md-6">
                <button className="btn btn-lg btn-primary btn-block mb-2" onClick={() => history.push('/controle')}>
                  Controle
                </button>
              </div>
              <div className="col-12 col-md-6">
                <button className="btn btn-lg btn-secondary btn-block mb-2" onClick={() => history.push('/projetor')}>
                  Projeção
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
