
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Film from "./components/Film";
import Section from "./components/Section";
import Sucess from "./components/Sucess";
export default function App() {
   const [movies, setMovies] = React.useState([]);
  return (
    <BrowserRouter>
        <Header/>
      <Switch>
            <Route path="/" exact>
               <Home movies={movies} setMovies={setMovies}/>
            </Route>
            <Route path="/Film/:idMovie" exact>
               <Film movies={movies}/>
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
