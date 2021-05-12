import React from 'react';
import {Link} from "react-router-dom";
export default function Section(){
return(<>
<div class ="container">
<div class="seats">
<ul class="seats">
<li><div class="seat">1</div></li>
<li><div class="seat">2</div></li>
<li><div class="seat">3</div></li>
<li><div class="seat">4</div></li>
<li><div class="seat">5</div></li>
<li><div class="seat">6</div></li>
<li><div class="seat">7</div></li>
<li><div class="seat">8</div></li>
<li><div class="seat">9</div></li>
<li><div class="seat">10</div></li>
<li><div class="seat">11</div></li>
<li><div class="seat">12</div></li>
<li><div class="seat">13</div></li>
<li><div class="seat">14</div></li>
<li><div class="seat">15</div></li>
<li><div class="seat">16</div></li>
<li><div class="seat">17</div></li>
<li><div class="seat">18</div></li>
<li><div class="seat">19</div></li>
<li><div class="seat">20</div></li>
<li><div class="seat">21</div></li>
<li><div class="seat">22</div></li>
<li><div class="seat">23</div></li>
<li><div class="seat">24</div></li>
<li><div class="seat">25</div></li>
<li><div class="seat">26</div></li>
<li><div class="seat">27</div></li>
<li><div class="seat">28</div></li>
<li><div class="seat">29</div></li>
<li><div class="seat">30</div></li>
<li><div class="seat">31</div></li>
<li><div class="seat">32</div></li>
<li><div class="seat">33</div></li>
<li><div class="seat">34</div></li>
<li><div class="seat">35</div></li>
<li><div class="seat">36</div></li>
<li><div class="seat">37</div></li>
<li><div class="seat">38</div></li>
<li><div class="seat">39</div></li>
<li><div class="seat">40</div></li>
<li><div class="seat">41</div></li>
<li><div class="seat">42</div></li>
<li><div class="seat">43</div></li>
<li><div class="seat">44</div></li>
<li><div class="seat">45</div></li>
<li><div class="seat">46</div></li>
<li><div class="seat">47</div></li>
<li><div class="seat">48</div></li>
<li><div class="seat">49</div></li>
<li><div class="seat">50</div></li>
</ul> </div>
<div class="legend">
<div class="seat green"><p>Selecionado</p></div>
<div class="seat"><p>Disponível</p></div>
<div class="seat yellow"><p>Indisponível</p></div>
</div>   
<div class="infos">
<div>
<h2>Nome do comprador:</h2>
<input  placeholder="Digite seu nome..."></input>
<h2>CPF do comprador:</h2>
<input  placeholder="Digite seu CPF..."></input>
</div>
<Link to="/Sucess"><button class="reserve">Reservar assento(s)</button></Link>
</div></div></>
)
}