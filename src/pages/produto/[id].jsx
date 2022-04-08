import Header from "../../components/Header";
import { useRouter } from "next/router";

export default function Produto(props) {
    const router = useRouter()
    const { id } = router.query;

    let subtitulo = `Produto ${id}`;

    return (
        <>
            <Header titulo={props.titulo} subtitulo={subtitulo} />
            <p>
                {props.children ?? 'Produto #' + id}
            </p>
        </>
    );
}