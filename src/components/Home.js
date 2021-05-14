import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home({ movies, setMovies }) {
  useEffect(() => {
    const request = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies`
    );
    request.then((resposta) => {
      setMovies(resposta.data);
    });
  }, []);

  return (
    <>
      <div class='page'>Selecione o filme</div>
      <div class='container'>
        <ul class='ranksMovies'>
          {movies.map((movie) => {
            return (
              <Link to={`/Film/${movie.id}`}>
                <li>
                  <div class='film'>
                    <img src={movie.posterURL} />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
