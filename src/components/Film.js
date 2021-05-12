
import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import image3 from "../img/image3.png";
export default function Film({movies}){
    const {id, title, overview, releaseDate} = movies;
    console.log(movies[1]);

    return(<>
    <div class ="container">
    <div class="times">
    Quinta-feira - 24/06/2021
     <div class="time">
     <Link to="/Section"><button>15:00 {releaseDate}</button></Link>
     <Link to="/Section"><button>19:00</button></Link>
     </div>
    </div>
    <div class="times">
    Quinta-feira - 24/06/2021
     <div class="time">
     <Link to="/Section"><button>15:00</button></Link>
     <Link to="/Section"><button>19:00</button></Link>
     </div>
    </div>
    <div class="selected">
    <div class="film"><img src={image3}/></div>
        TitleFilm<br/>ChosenTime
    </div>
    </div>
    </>)
}