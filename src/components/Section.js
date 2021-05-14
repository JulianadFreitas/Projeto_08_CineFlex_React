import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
}) {
  const [section, setSection] = React.useState([]);
  const { idSection } = useParams();
  useEffect(() => {
    const request = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSection}/seats`
    );
    request.then((resposta) => {
      console.clear();
      console.log(resposta.data);
      setSection(resposta.data);
      setMovieInfo(resposta.data.day);
      setSectionTime(resposta.data.name);
      console.log(section, resposta.data.day, movie, sectionTime);
    });
  }, []);
  console.log(movieInfo.weekday, movie.name);
  return (
    <>
      <div class='page'>Selecione os assentos</div>
      <div class='container'>
        <div class='seats'>
          <ul class='seats'>
            {section.length === 0
              ? ""
              : section.seats.map((item) => {
                  console.clear();
                  console.log(item, item.isAvailable);
                  return (
                    <Seat
                      infoMovie={movieInfo}
                      infoSeat={item}
                      isAvailable={item.isAvailable}
                      choosedSeats={choosedSeats}
                      setChoosedSeats={setChoosedSeats}
                      sectionDate={movieInfo.weekday}
                      sectionTime={sectionTime}
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
            <input placeholder='Digite seu nome...'></input>
            <h2>CPF do comprador:</h2>
            <input placeholder='Digite seu CPF...'></input>
          </div>
          <Link to='/Sucess'>
            <button class='reserve'>Reservar assento(s)</button>
          </Link>
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
