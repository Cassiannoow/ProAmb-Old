import React, { useState } from "react";
import './BarraDeBuscarLugar.css'

export default function BarraDeBuscarLugar() { 
    const [endereco, setEndereco] = useState("")

    return (
        <div id="divBuscarLugar">
            <input type="text" value={endereco} id="txtBuscaLugar" onChange={({target}) => {setEndereco(target.value)}}placeholder="Busque"/>
        </div>
    )
}