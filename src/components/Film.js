import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Film({movie,
   setMovie,
   titleMovie,
   setTitleMovie}) {

  const { idMovie } = useParams();
  
  const [movieInfo, setMovieInfo] = React.useState([]);
  
  useEffect(() => {
    const request = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
    );
    request.then((resposta) => {
    
      setMovie(resposta.data);
      
    });
  }, []);
 
  const { id, title, overview, releaseDate,posterURL } = movie;

  if (!movie.days) {
    return <div></div>;
  }
 
  return (
    <>
      <div class='page'>Selecione o filme</div>
      <div class='container'>
      {movie.length ===0 ? "" : movie.days.map((day) => {
        return (
          
            <div class='times'>
              {day.weekday} <br /> {day.date}
              <div class='time'>
                <Link to={`/Section/${idMovie}`}>
                  <button> {day.showtimes[0].name}</button>
                </Link>
                <Link to={`/Section/${idMovie}`}>
                  <button> {day.showtimes[1].name}</button>
                </Link>
              </div>
            </div>
          
        );
      })}{" "}
      </div>
      <Footer title ={title} src={posterURL}/>

    </>
  );
}
