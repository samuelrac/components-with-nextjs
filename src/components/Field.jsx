import { useState } from "react";

export default function Field(props) {

    const [campo, setCampo] = useState("");

    async function texto(text) {
        setCampo(text);
    }

    return (
        <>
            <input type="text" placeholder="Pesquisar..." value={campo} onChange={(e) => texto(e.target.value)} />
        </>
    )
}