import Header from "../components/Header";
import { useState, useEffect } from 'react';

import { generateLoremIpsum } from "./api/lorem-ipsum"

export default function LoremIpsum(props) {

    const [lorem, setLoremIpsum] = useState([]);

    useEffect(() => {
        generateLoremIpsum().then(data => setLoremIpsum(data));
    }, []);

    return (
        <>
            <Header titulo={props.titulo} subtitulo="Lorem Ipsum" />
            <h1>Lorem</h1>
            {
                lorem.map(l => (
                    <p key={l.id}>{l.text}</p>
                ))
            }
        </>
    )
}