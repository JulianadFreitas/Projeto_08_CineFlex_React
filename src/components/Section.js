import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";
import Stage from "./Stage";
import Legend from "./Legend";
import SendOrder from "./SendOrder";
import Inputs from "./Inputs";
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
      <div className='container'>
        <div className='seats'>
          <ul className='seats'>
            {section.length === 0 ? "" : section.seats.map((item) => {
                  return (
                    <Seat
                      key= {item.id}
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
        <div className='legend'>
          <Legend text={"Selecionado"} classe={"seat green"} />
          <Legend text={"Disponível"} classe={"seat"} />
          <Legend text={"Indisponível"} classe={"seat yellow"} />
        </div>
        <div className='infos'>
          <div>
            <h2>Nome do comprador:</h2>
            <Inputs title ={"Nome do comprador:"} type={"text"} onChange={(e) => setInputName(e.target.value)} value={inputName} placeholder='Digite seu nome...'
            />
            <h2>CPF do comprador:</h2>
            <Inputs title ={"CPF do comprador:"}type={"number"} onChange={(e) => setInputCPF(e.target.value)} value={inputCPF} placeholder='Digite seu CPF...'
            />
          </div>
          <Link to = {`${(nameSeats.length !== 0 && inputName.length !== 0 && inputCPF.length === 11) ? "/Sucess" : ""}`}>
            <button className='reserve' onClick={()=> {SendOrder({ choosedSeats, nameSeats, inputCPF, inputName})}}>
             Reservar assento(s)
             </button>
          </Link>
        </div>
      </div>
      {movieInfo.length === 0 ? ("") : ( <Footer src={movie.posterURL} title={movie.title} sectionDate={movieInfo.weekday} sectionTime={sectionTime}/>
      )}
    </>
  );
}
