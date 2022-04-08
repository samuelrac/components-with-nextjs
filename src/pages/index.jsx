import Header from "../components/Header";
import styles from "../styles/Layout.module.css";

export default function Index() {
    return (
        <>
            <Header titulo="Página Inicial" />
            <div className={styles.content}>
                Teste
            </div>
        </>
    );
}