import React from "react";
import { Link } from "react-router-dom";
export default function Sucess({
  movie,
  movieInfo,
  sectionTime,
  nameSeats,
  setNameSeats,
  inputCPF,
  inputName,
  setInputCPF,
  setInputName,
}) {
  function Reset() {
    setNameSeats([]);
    setInputCPF("");
    setInputName("");
    console.log(setNameSeats);
  }
  console.log(inputName);
  return (
    <>
      <div class='container'>
        <div class='final'>
          <h1>
            Pedido feito <br /> com sucesso!
          </h1>
          {/* colocar os dados do servidor */}
          <div class='finalInformations'>
            <h2>Filme e sessão</h2>
            <p>
              {movie.title} <br /> {sectionTime} {movieInfo.weekday}
            </p>
          </div>
          <div class='finalInformations'>
            <h2>Ingressos</h2>
            {!nameSeats
              ? ""
              : nameSeats.map((seat) => {
                  return (
                    <p>
                      Assento {seat}
                      <br />
                    </p>
                  );
                })}
          </div>
          <div class='finalInformations'>
            <h2>Comprador</h2>
            <p>Nome: {inputName}</p> <br />
            <p>CPF:{inputCPF} </p>
          </div>

          <Link to='/'>
            <button onClick={Reset} class='backToHome'>
              Voltar pra Home
            </button>
          </Link>
          {/* // onclick pra zerar */}
        </div>
      </div>
    </>
  );
}
