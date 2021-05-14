import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";
export default function Section({
  movie,
  movieInfo,
  setMovieInfo,
  sectionTime,
  setSectionTime,
  choosedSeats,
  setChoosedSeats,
  titleMovie,
  setTitleMovie,
  nameSeats, setNameSeats, inputCPF, setInputCPF, inputName, setInputName
}) {
  let history = useHistory();
  const [section, setSection] = React.useState([]);
  const { idSection } = useParams();
  useEffect(() => {
    const request = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSection}/seats`
    );
    request.then((resposta) => {
      setSection(resposta.data);
      setMovieInfo(resposta.data.day); //dia da 
      setSectionTime(resposta.data.name);
      // console.log(section, resposta.data.day, movie, sectionTime);
    });
  }, []);

  // console.log(movieInfo.weekday, movie.name);

function SendOrder(){
   if (nameSeats !== 0 && inputName.length !== 0 && inputCPF.length !== 0) {
     const order = {
     ids: choosedSeats, 
     cpf: inputCPF, 
     name: inputName
     };
     
     const envio = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", order);
     envio.then(
      tratar
     );
     envio.catch(()=> console.log("erro"));
   }
   
   function tratar() {
     alert("foi");
     history.push("/Sucess")
   }
}

  return (
    <>
      <div class='page'>Selecione os assentos</div>
      <div class='container'>
        <div class='seats'>
          <ul class='seats'>
            {section.length === 0
              ? ""
              : section.seats.map((item) => {
                
                  return (
                    <Seat
                      infoMovie={movieInfo}
                      infoSeat={item}
                      isAvailable={item.isAvailable}
                      choosedSeats={choosedSeats}
                      setChoosedSeats={setChoosedSeats}
                      sectionDate={movieInfo.weekday}
                      sectionTime={movie.title}
                      titleMovie={movie.title}
                      nameSeats={nameSeats}
                      setNameSeats ={setNameSeats}
                    />
                  );
                })}
          </ul>{" "}
        </div>
        <div class='legend'>
          <div class='seat green'>
            <p>Selecionado</p>
          </div>
          <div class='seat'>
            <p>Disponível</p>
          </div>
          <div class='seat yellow'>
            <p>Indisponível</p>
          </div>
        </div>
        <div class='infos'>
          <div>
            <h2>Nome do comprador:</h2>
            <input 
               type="text"
               onChange={(e) => setInputName(e.target.value)}
               value={inputName}
               placeholder='Digite seu nome...'>
            </input>
            <h2>CPF do comprador:</h2>
            <input
               type="number"
               onChange={(e) => setInputCPF(e.target.value)}
               value={inputCPF}
               placeholder='Digite seu CPF...'>
            </input>
          </div>
          
            <button class='reserve' onClick={SendOrder}>Reservar assento(s)</button>
          
        </div>
      </div>
      {movieInfo.length === 0 ? (
        ""
      ) : (
        <Footer
          src={movie.posterURL}
          title={movie.title}
          sectionDate={movieInfo.weekday}
          sectionTime={sectionTime}
        />
      )}
    </>
  );
}
