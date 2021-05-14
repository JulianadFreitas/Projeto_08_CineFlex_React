import { useHistory } from "react-router-dom";
import axios from "axios";
export default function SendOrder({
  choosedSeats,
  nameSeats,
  inputCPF,
  inputName,
}) {
  let history = useHistory();
  if (nameSeats !== 0 && inputName.length !== 0 && inputCPF.length !== 0) {
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
    alert("Dados enviados com Sucesso!");
    history.push("/Sucess");
  }
}
