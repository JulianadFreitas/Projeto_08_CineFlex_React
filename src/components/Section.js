import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";
import Stage from "./Stage";
import Legend from "./Legend";
import SendOrder from "./SendOrder";
export default function Section({
  movie,
  movieInfo, setMovieInfo,
  sectionTime, setSectionTime,
  choosedSeats, setChoosedSeats,
  nameSeats, setNameSeats,
  inputCPF, setInputCPF,
  inputName, setInputName,
}) {
  
  const [section, setSection] = React.useState([]);
  const { idSection } = useParams();
  useEffect(() => {
    const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSection}/seats`);
    request.then((resposta) => {
      setSection(resposta.data);
      setMovieInfo(resposta.data.day); 
      setSectionTime(resposta.data.name);
    });
  }, []);

  return (
    <>
      <Stage text={"Selecione os assentos"} />
      <div class='container'>
        <div class='seats'>
          <ul class='seats'>
            {section.length === 0 ? "" : section.seats.map((item) => {
                  return (
                    <Seat
                      infoMovie={movieInfo}
                      infoSeat={item}
                      isAvailable={item.isAvailable}
                      choosedSeats={choosedSeats} setChoosedSeats={setChoosedSeats}
                      sectionTime={movie.title}
                      nameSeats={nameSeats} setNameSeats={setNameSeats}
                    />
                  );
                })}
          </ul>
        </div>
        <div class='legend'>
          <Legend text={"Selecionado"} classe={"seat green"} />
          <Legend text={"Disponível"} classe={"seat"} />
          <Legend text={"Indisponível"} classe={"seat yellow"} />
        </div>
        <div class='infos'>
          <div>
            <h2>Nome do comprador:</h2>
            <input
              type='text'
              onChange={(e) => setInputName(e.target.value)}
              value={inputName}
              placeholder='Digite seu nome...'></input>
            <h2>CPF do comprador:</h2>
            <input
              type='number'
              onChange={(e) => setInputCPF(e.target.value)}
              value={inputCPF}
              placeholder='Digite seu CPF...'></input>
          </div>
          <button class='reserve' onClick={SendOrder({choosedSeats, nameSeats, inputCPF, inputName})}>
            Reservar assento(s)
          </button>
        </div>
      </div>
      {movieInfo.length === 0 ? ("") : ( 
      <Footer src={movie.posterURL} title={movie.title} sectionDate={movieInfo.weekday} sectionTime={sectionTime}
      />
      )}
    </>
  );
}
