import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import image3 from "../img/image3.png";
export default function Film() {
  const { idMovie } = useParams();
  const [movie, setMovie] = React.useState({});
  useEffect(() => {
    const request = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
    );
    request.then((resposta) => {
      console.clear();
      console.log(resposta.data);
      setMovie(resposta.data);
    });
  }, []);

  const { id, title, overview, releaseDate } = movie;

  if (!movie.days) {
    return <div></div>;
  }

  return (
    <>
      <div class='page'>Selecione o filme</div>
      {movie.days.map((day) => {
        return (
          <div class='container'>
            <div class='times'>
              {day.weekday} <br /> {day.date}
              <div class='time'>
                <Link to='/Section'>
                  <button> {day.showtimes[0].name}</button>
                </Link>
                <Link to='/Section'>
                  <button> {day.showtimes[1].name}</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}{" "}
      <div class='selected'>
        <div class='film'>
          <img src={image3} />
        </div>
        {title}
      </div>
    </>
  );
}
