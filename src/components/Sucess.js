import React from 'react';
import {Link} from "react-router-dom";
export default function Sucess(){
return(<>
<div class ="container">
<div class="final">
        <h1>Pedido feito <br/> com sucesso!</h1>
        {/* colocar os dados do servidor */}
        <div class="finalInformations"> 
            <h2>Filme e sessão</h2>
            <p>Enola Holmes <br/> 24/06/2021 15:00</p>
        </div>
        <Link to="/"><button class="backToHome">Voltar pra Home</button></Link>
</div> 
</div>
</>
    )
}