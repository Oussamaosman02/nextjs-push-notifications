import React, { useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Admini() {
  const texto = useRef();
  const mens = useRef();
  async function handle() {
    const title = texto.current.value;
    const message = mens.current.value;
    const ext = localStorage.getItem("ps");
    if (ext) {
      fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          title: title,
          ps: ext,
        }),
      });
    } else {
      console.error("No hay endpoint");
    }
  }

  return (
    <div className={styles.algo}>
      <h2>Titulo de la notificación</h2>
      <input ref={texto} type="text" placeholder="titulo" />
      <br />
      <h2>Mensaje</h2>
      <input ref={mens} type="text" placeholder="Mensaje" />
      <br />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await handle();
        }}
      >
        Enviar
      </button>
    </div>
  );
}
