import React from "react";
export default function FinalInformations({
  title,
  time,
  day,
  titleMovie,
  nome,
  CPF,
}) {
  if (title === "Comprador") {
    return (
      <div class='finalInformations'>
        <br />
        <h2>Comprador</h2>
        <p>Nome: {nome}</p>
        <p>CPF:{CPF} </p>
      </div>
    );
  } else {
    return (
      <div class='finalInformations'>
        <h2>Filme e sessão</h2>
        <p>
          {titleMovie} <br />{day} {time} 
        </p>
      </div>
    );
  }
}
