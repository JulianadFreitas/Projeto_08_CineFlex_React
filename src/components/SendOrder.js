
import axios from "axios";
export default function SendOrder({
  choosedSeats,
  nameSeats,
  inputCPF,
  inputName,
}) {
 
  if (nameSeats.length !== 0 && inputName.length !== 0 && inputCPF.length === 11) {
    const order = {
      ids: choosedSeats,
      cpf: inputCPF,
      name: inputName,
    };

    const envio = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",
      order
    );
    envio.then(tratar);
    envio.catch(() => console.log("Erro ao enviar os dados para ao servidor."));
  } 

  function tratar() {
    alert("Dados enviados com Sucesso!")
  }
} 
