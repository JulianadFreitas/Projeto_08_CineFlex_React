// import React, { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import Seat from "./Seat";
// export default function Section({movie, src,  choosedSeats, setChoosedSeats}){
//     const [section, setSection] = React.useState([]);
//     const { idSection } = useParams();
//     useEffect(() => {
//         const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSection}/seats`);
//         request.then((resposta) => {
//           console.clear();
//           console.log(resposta.data);
//           setSection(resposta.data, section);
//           console.log(section,);
//         });
//       }, []);
      
// return(<>
// <div class='page'>Selecione os assentos</div>
// <div class="container">
// <div class="seats">
// <ul class="seats">
// {section.length === 0 ? "" : section.seats.map((item)=> {
    
//     console.log(item, item.isAvailable)
//     return <Seat infoSeat={item} isAvailable={item.isAvailable} choosedSeats={choosedSeats} setChoosedSeats={setChoosedSeats}/>
//     })
// } 
// </ul> </div>
// <div class="legend">
// <div class="seat green"><p>Selecionado</p></div>
// <div class="seat"><p>Disponível</p></div>
// <div class="seat yellow"><p>Indisponível</p></div>
// </div>   
// <div class="infos">
// <div>
// <h2>Nome do comprador:</h2>
// <input  placeholder="Digite seu nome..."></input>
// <h2>CPF do comprador:</h2>
// <input  placeholder="Digite seu CPF..."></input>
// </div>
// <Link to="/Sucess"><button class="reserve">Reservar assento(s)</button></Link>
// </div>
// {/* <Footer posterURL ={src} title={movie.title} /> */}
// <div class='selected'>
//         <div class='film'>
//         </div>
        
//       </div>
// </div></>
// )
// }