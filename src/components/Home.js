
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import image3 from "../img/image3.png";
export default function Home({movies, setMovies}){

const {idMovie} = useParams();

useEffect(()=> {
    const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies`);
    request.then((resposta)=>{
    setMovies(resposta.data)
    console.log(request);
    console.log(resposta);
    console.log(movies);
    })
}, [])

return (
<>
<div class ="page">Selecione o filme</div> 
<div class ="container">
<ul class ="ranksMovies">
    {
     movies.map((movie)=> {
     return <Link to={`/Film/${movie.id}`}><li><div class="film"><img src={movie.posterURL}/></div></li></Link>
     })
    }  
    </ul>
</div>
</>)
}