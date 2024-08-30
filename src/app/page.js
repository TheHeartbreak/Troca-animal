'use client'
import { useState } from "react";
import styles from "./page.module.css";
import CardAnimal from "./Componentes/CardAnimal";
import CardInformacoes from "./Componentes/CardInformacoes";
import Topo from "./Componentes/Topo";

export default function Home() {

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  return (
    <div className={styles.container_principal}>
      {/* {componente Topo} */}
      <Topo clickAlterarAnimal={alterarState}></Topo>
      {/* {Componente CardAnimal} */}
      <main>
        <CardAnimal tipoAnimal={tipoDoComponenteCard}></CardAnimal>
        <CardInformacoes tipoAnimal={tipoDoComponenteCard}></CardInformacoes>
      </main>
    </div>
  );
}
