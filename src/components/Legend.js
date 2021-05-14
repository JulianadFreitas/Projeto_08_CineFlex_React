
import React from "react";
export default function Legend({ text, classe}) {
  return (
    <div class={classe}>
      <p>{text}</p>
    </div>
  );
}