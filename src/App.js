
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
   const [clickedMovie, setClickedMovie] = React.useState([]);
   
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
            <Route path="/" exact>
               <Home movies={movies} setMovies={setMovies} clickedMovie={clickedMovie} setClickedMovie={setClickedMovie}/>
            </Route>
            <Route path="/Film/:idMovie" exact>
               <Film movies={movies} clickedMovie={clickedMovie}/>
            </Route>
            <Route path="/Section" exact>
               <Section/>
            </Route>
            <Route path="/Sucess" exact>
               <Sucess/>
            </Route>
     </Switch>
    </BrowserRouter>   
  );
}
