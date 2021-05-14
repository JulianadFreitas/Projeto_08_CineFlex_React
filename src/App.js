
import { BrowserRouter, Switch, Route} from "react-router-dom";
import useState from "react"
import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Film from "./components/Film";
import Section from "./components/Section";
import Sucess from "./components/Sucess";
export default function App() {
   
   const [movies, setMovies] = React.useState([]);
   const [movie, setMovie] = React.useState({});
   const [choosedSeats, setChoosedSeats] = React.useState([]);
   const [movieInfo, setMovieInfo] = React.useState([]);
   const [sectionTime, setSectionTime] = React.useState([]);
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
            <Route path="/" exact>
               <Home movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/Film/:idMovie" exact>
               <Film movies={movies} movie ={movie} setMovie={setMovie} choosedSeats={choosedSeats} setChoosedSeats={setChoosedSeats}
               movieInfo={movieInfo}
               setMovieInfo={setMovieInfo}/>
            </Route>
            <Route path="/Section/:idSection" exact>
               <Section  movie ={movie} 
               choosedSeats={choosedSeats} 
               setChoosedSeats={setChoosedSeats} 
               movieInfo={movieInfo}
               setMovieInfo={setMovieInfo}
               setSectionTime ={setSectionTime} sectionTime={sectionTime}/>
            </Route>
            <Route path="/Sucess" exact>
               <Sucess/>
            </Route>
     </Switch>
    </BrowserRouter>   
  );
}
