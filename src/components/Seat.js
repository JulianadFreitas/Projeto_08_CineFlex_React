import React, { useState } from "react";

export default function Seat({
  infoSeat,
  isAvailable,
  choosedSeats,
  setChoosedSeats,
}) {
  const { id, name } = infoSeat;
  const [selected, setSelected] = useState(false);
  let choosed = [];

  function ToggleSeat(id) {
    selected ? excluiSeat(id) : addSeat(id);
  }
  console.clear();
  console.log(infoSeat, id, choosedSeats, isAvailable, selected);

  function addSeat(seat) {
    setSelected(true);
    choosed = choosedSeats.filter((item) => id !== item);
    const teste = [...choosed, seat];
    setChoosedSeats(teste);
    console.log(choosedSeats);
  }

  function excluiSeat(seat) {
    setSelected(false);
    choosed = choosedSeats.filter((item) => id !== item);
    const teste = [...choosed];
    setChoosedSeats(teste);
    console.log(choosedSeats);
  }

  return (
    <li>
      <div
        onClick={() => {
          ToggleSeat(id);
        }}
        class={`seat ${isAvailable ? "gray" : "yellow"} ${
          selected ? "green" : ""
        }`}>
        {name}
      </div>
    </li>
  );
}
