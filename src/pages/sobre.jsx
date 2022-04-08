import Header from "../components/Header";

export default function Sobre(props) {
    return (
        <>
            <Header titulo={props.titulo} subtitulo="Sobre" />
            <p>
                {props.children ?? 'Aqui vai o conteúdo da página Sobre'}
            </p>
        </>
    );
}