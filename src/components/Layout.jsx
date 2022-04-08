import styles from "../styles/Layout.module.css";

import PageHeader from "../components/PageHeader";

export default function Layout(props) {
    return (
        <>
            <PageHeader titulo="Loja do Samuel" />
            <div className={styles.content}>
                {props.children}
            </div>
            {/* FOOTER */}
        </>
    )
}