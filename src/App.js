
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
   const [nameSeats, setNameSeats] = React.useState([]);
   const [movieInfo, setMovieInfo] = React.useState([]); //sesão
   const [sectionTime, setSectionTime] = React.useState([]);
   const [titleMovie, setTitleMovie] = React.useState([]);
   const [section, setSection] = React.useState([]);
   const [inputCPF, setInputCPF] = React.useState("");
   const [inputName, setInputName] = React.useState("");
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
               <Section  section ={section} setSection={setSection} movie ={movie} 
               choosedSeats={choosedSeats} 
               setChoosedSeats={setChoosedSeats} 
               movieInfo={movieInfo}
               setMovieInfo={setMovieInfo}
               setSectionTime ={setSectionTime} sectionTime={sectionTime}
               titleMovie= {titleMovie} setTitleMovie={setTitleMovie}
               nameSeats={nameSeats} setNameSeats={setNameSeats}
               inputCPF={inputCPF} setInputCPF={setInputCPF}
               inputName ={inputName} setInputName={setInputName}/>
            </Route>
            <Route path="/Sucess" exact>
               <Sucess  movie ={movie} 
               choosedSeats={choosedSeats} 
               setChoosedSeats={setChoosedSeats} 
               movieInfo={movieInfo}
               setMovieInfo={setMovieInfo}
               setSectionTime ={setSectionTime} sectionTime={sectionTime}
               titleMovie= {titleMovie} setTitleMovie={setTitleMovie}
               section ={section} setSection={setSection}
               nameSeats={nameSeats} setNameSeats={setNameSeats}
               inputCPF={inputCPF} setInputCPF={setInputCPF}
               inputName ={inputName} setInputName={setInputName}
               />
            </Route>
     </Switch>
    </BrowserRouter>   
  );
}
