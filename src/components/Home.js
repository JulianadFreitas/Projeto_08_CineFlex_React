import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Stage from "./Stage";
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
    <Stage text={"Selecione o filme"}/>
      <div class='container'>
        <ul class='ranksMovies'>
          {movies.map((movie) => {
            return (
              <Link to={`/Movie/${movie.id}`}>
                <li>
                  <div class='Movie'>
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
