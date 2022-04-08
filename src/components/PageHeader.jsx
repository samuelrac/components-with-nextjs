import Link from "next/link";

import Field from "../components/Field";

// Styles
import styles from "../styles/Header.module.css";

export default function Header(props) {

    return (
        <header className={styles.header}>
            <h1>{props.titulo ?? 'Cabeçalho'}</h1>
            <Field />
            <nav>
                <Link href="/">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato">Contato</Link>
                <Link href="/lorem-ipsum">Lorem Ipsum</Link>
                <Link href="/produto/1">Produto 1</Link>
                <Link href="/produto/2">Produto 2</Link>
                <Link href="/produto/3">Produto 3</Link>
                <Link href="/produto/4">Produto 4</Link>
                <Link href="/users">Usuários</Link>
            </nav>
        </header>
    );
}