import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Stage from "./Stage";
import Footer from "./Footer";

export default function Movie({ movie, setMovie }) {
  const { idMovie } = useParams();
  const {title,posterURL } = movie;

  useEffect(() => {
    const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`);
    request.then((resposta) => {
      setMovie(resposta.data);
    });
  }, []);

  if (!movie.days) {
    return <div></div>;
  }

  return (
    <>
      <Stage text ={"Selecione o horário"}/>
      <div className="container">
        <div className ="box">
        {movie.length === 0 ? "" : movie.days.map((day) => {
              return (
                <div key={movie.id} className='times'>
                  <div className="date"> {day.weekday} - {day.date}</div>
                  <div className='time'>
                    <Link to={`/Section/${idMovie}`}>
                      <button> {day.showtimes[0].name}</button>
                    </Link>
                    <Link to={`/Section/${idMovie}`}>
                      <button> {day.showtimes[1].name}</button>
                    </Link>
                  </div>
                </div>
              );
            })}
       </div></div>
      <Footer title={title} src={posterURL} />
    </>
  );
}
