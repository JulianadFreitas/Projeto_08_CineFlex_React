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
      <div className='container'>
        <ul className='ranksMovies'>
          {movies.map((movie) => {
            return (
              <Link to={`/Movie/${movie.id}`}>
                <li>
                  <div className='Movie'>
                    <img src={movie.posterURL} alt={"poster of movie"}/>
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
