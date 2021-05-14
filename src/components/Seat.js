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

  function addSeat(id, name) {
    setSelected(true);
    choosed = choosedSeats.filter((item) => id !== item);
    nameSeats = nameSeats.filter((item) => name !== item);
    const teste = [...choosed, id];
    const teste2 = [...nameSeats, ("Assento " + name)];
    setNameSeats(teste2);
    setChoosedSeats(teste);
  }

  function excluiSeat(id, name) {
    setSelected(false);
    choosed = choosedSeats.filter((item) => id !== item);
    nameSeats = nameSeats.filter((item) => name !== item);
    const teste2 = [...nameSeats];
    const teste = [...choosed];
    setNameSeats(teste2);
    setChoosedSeats(teste);
  }

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
