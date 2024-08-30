import styles from "./Topo.module.css";

export default function Topo(props) {
    return (
        <header className={styles.header_container}>
            <h1>Projeto Props + useState</h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick={props.clickAlterarAnimal}>Mudar Animal</button>
        </header>
    );
}