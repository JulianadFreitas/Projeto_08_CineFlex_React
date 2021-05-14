
import React from "react";
export default function Legend({ text, classe}) {
  return (
    <div className={classe}>
      <p>{text}</p>
    </div>
  );
}