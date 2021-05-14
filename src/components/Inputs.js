import React from "react";
export default function Inputs({ type, onChange, placeholder, value}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}>
    </input>
  );
}
