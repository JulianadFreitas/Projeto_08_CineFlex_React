import React, { useState } from "react";

export default function Seat({
  infoSeat,
  isAvailable,
  choosedSeats,
  setChoosedSeats,
  nameSeats, setNameSeats
}) {
  const { id, name } = infoSeat;
  const [selected, setSelected] = useState(false);
  let choosed = [];

  function ToggleSeat(id, name) {
    selected ? excluiSeat(id, name) : addSeat(id, name);
  }

  function Check() {
      if (isAvailable === false) {
          alert ("Esse assento não está disponível");
      }
  }
  
//  console.log( isAvailable, selected);

  function addSeat(seat,name) {
    setSelected(true);
    choosed = choosedSeats.filter((item) => id !== item);
    nameSeats = nameSeats.filter((item) => name !== item);
    const teste = [...choosed, seat];
    const teste2 = [...nameSeats, name];
    setNameSeats(teste2);
    setChoosedSeats(teste);
  }

  function excluiSeat(seat,name) {
    setSelected(false);
    choosed = choosedSeats.filter((item) => id !== item);
    nameSeats = nameSeats.filter((item) => name !== item);
    const teste2 = [...nameSeats];
    const teste = [...choosed];
    setNameSeats(teste2);
    setChoosedSeats(teste);
  }
  
  console.clear();
  console.log(choosedSeats,nameSeats);
  
  return (
    <li>
      <div
        onClick={() => {
          ToggleSeat(id, name);
          Check(isAvailable);
        }}
        class={`seat ${isAvailable ? "gray" : "yellow"} ${
          selected ? "green" : ""
        }`}>
        {name}
      </div>
    </li>
  );
}
