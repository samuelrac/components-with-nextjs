import Head from 'next/head'

export default function Header(props) {
    return (
        <>
            <Head>
                <title>{props.titulo && props.subtitulo ? props.titulo + ' - ' + props.subtitulo : props.titulo ?? 'Título Default'}</title>
                {props.children}
            </Head>
        </>
    )
}