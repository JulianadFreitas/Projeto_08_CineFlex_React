import React from "react";
import {Link} from "react-router-dom";
import FinalInformations from "./FinalInformations"
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
    }
  return (
      <div className='container'>
        <div className='final'>
          <h1>
            Pedido feito <br /> com sucesso!
          </h1>
          <FinalInformations title ={"Filme e sessão"} titleMovie ={movie.title} time ={sectionTime} day={movieInfo.weekday}/>
          <div className='finalInformations'>
            <h2>Ingressos</h2>
            <div className='ticket'>
              {!nameSeats? "" : nameSeats.map((seat, i) => {
                    return <div className='choosedSeat'>{nameSeats[i]}</div>;
                  })}
            </div>
          </div>
          <FinalInformations title ={"Comprador"} nome ={inputName} CPF={inputCPF}/>
          <Link to='/'>
            <button onClick={Reset} className='backToHome'>Voltar pra Home</button>
          </Link>
        </div>
      </div>
  );
}
