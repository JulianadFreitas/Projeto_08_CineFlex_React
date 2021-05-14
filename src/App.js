import { BrowserRouter, Switch, Route } from "react-router-dom";
import useState from "react";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Section from "./components/Section";
import Sucess from "./components/Sucess";
export default function App() {
  const [movies, setMovies] = React.useState([]);
  const [movie, setMovie] = React.useState({});
  const [choosedSeats, setChoosedSeats] = React.useState([]);
  const [nameSeats, setNameSeats] = React.useState([]);
  const [movieInfo, setMovieInfo] = React.useState([]); //sesão
  const [sectionTime, setSectionTime] = React.useState([]);
  const [section, setSection] = React.useState([]);
  const [inputCPF, setInputCPF] = React.useState("");
  const [inputName, setInputName] = React.useState("");
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home movies={movies} setMovies={setMovies} />
        </Route>
        <Route path='/Movie/:idMovie' exact>
          <Movie
           movie={movie}
            movies={movies}
            setMovie={setMovie}
            choosedSeats={choosedSeats} setChoosedSeats={setChoosedSeats}
            movieInfo={movieInfo} setMovieInfo={setMovieInfo}
          />
        </Route>
        <Route path='/Section/:idSection' exact>
          <Section
            movie={movie}
            section={section}setSection={setSection}
            choosedSeats={choosedSeats} setChoosedSeats={setChoosedSeats}
            movieInfo={movieInfo} setMovieInfo={setMovieInfo}
            setSectionTime={setSectionTime} sectionTime={sectionTime}
            nameSeats={nameSeats} setNameSeats={setNameSeats}
            inputCPF={inputCPF} setInputCPF={setInputCPF}
            inputName={inputName} setInputName={setInputName}
          />
        </Route>
        <Route path='/Sucess' exact>
          <Sucess
            movie={movie}
            choosedSeats={choosedSeats} setChoosedSeats={setChoosedSeats}
            movieInfo={movieInfo}
            setSectionTime={setSectionTime} sectionTime={sectionTime}
            nameSeats={nameSeats} setNameSeats={setNameSeats}
            inputCPF={inputCPF} setInputCPF={setInputCPF}
            inputName={inputName} setInputName={setInputName}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

