import React, { Component, useEffect } from "react";
import BarraDeBuscarLugar from "../../BarraDeBuscarLugar/BarraDeBuscarLugar";
import LocalDeDescarte from "./LocalDeDescarte";
import './Descartar.css';
import { Navigate } from "react-router-dom";

const locais = [
    {
      nome: 'Ecoponto Verde Limpo',
      coordenadas: { lat: -22.880764135060534, lng: -46.91819491378528 }
    },
    {
      nome: 'ReciclaMais',
      coordenadas: { lat: -22.999703830480758, lng: -46.88554945917269 }
    },
    {
      nome: 'Lixo Zero Center',
      coordenadas: { lat: -22.815911482262624, lng: -46.94001115218724 }
    },
    {
      nome: 'EcoRecycle Point',
      coordenadas: { lat: -22.9665897225918, lng: -46.915366281786525 }
    },
    {
      nome: 'Planeta Limpo EcoPonto',
      coordenadas: { lat: -22.960119680232697, lng: -46.8745351848403 }
    },
    {
      nome: 'Green Waste Disposal',
      coordenadas: { lat: -22.820211986846505, lng: -46.951874361895705 }
    },
    {
      nome: 'Clean Earth Recycling Center',
      coordenadas: { lat: -22.98787649476079, lng: -46.91061362791361 }
    },
    {
      nome: 'EcoBin Depot',
      coordenadas: { lat: -22.859015435769628, lng: -46.9505355733673 }
    },
    {
      nome: 'Waste Solutions Hub',
      coordenadas: { lat: -22.936495650199767, lng: -46.874449406257085 }
    },
    {
      nome: 'EcoDrop Recycling Facility',
      coordenadas: { lat: -22.792089784201735, lng: -46.89745725326293 }
    },
    {
      nome: 'Trash 2 Treasure Center',
      coordenadas: { lat: -22.986432059671184, lng: -47.01793850490084 }
    },
    {
      nome: 'Green Disposal Zone',
      coordenadas: { lat: -22.92701035132891, lng: -46.97991931168356 }
    },
    {
      nome: 'EcoSavers Waste Collection',
      coordenadas: { lat: -22.967943853608062, lng: -47.10315430143753 }
    },
    {
      nome: 'GreenCycle Recycling Point',
      coordenadas: { lat: -22.908990277117706, lng: -46.917821226883255 }
    },
    {
      nome: 'RenewRecycle Waste Facility',
      coordenadas: { lat: -22.848495186878196, lng: -46.952823622575266 }
    },
    {
      nome: 'Earth-Friendly Disposal Hub',
      coordenadas: { lat: -22.995481989397888, lng: -47.03125182860117 }
    },
    {
      nome: 'RecycleRite Depot',
      coordenadas: { lat: -22.93142501509208, lng: -46.926980060985066 }
    },
    {
      nome: 'Sustainable Solutions Hub',
      coordenadas: { lat: -22.974233865933815, lng: -47.045103538611244 }
    },
    {
      nome: 'EcoSmart Waste Station',
      coordenadas: { lat: -22.847123521335657, lng: -46.9040159616869 }
    },
    {
      nome: 'Clean Cycle Recycling Spot',
      coordenadas: { lat: -22.9509434613118, lng: -46.94414159292832 }
    },
    {
      nome: 'EcoCare Waste Collection',
      coordenadas: { lat: -22.79007639064526, lng: -47.09773370439492 }
    },
    {
      nome: 'EcoDrop Recycling Depot',
      coordenadas: { lat: -22.957270097889054, lng: -47.09982381077653 }
    },
    {
      nome: 'Green Earth Recycling Center',
      coordenadas: { lat: -22.900313265589087, lng: -47.04801443716213 }
    },
    {
      nome: 'WasteWise Recycling Point',
      coordenadas: { lat: -22.91132690996334, lng: -47.020364076338566 }
    },
    {
      nome: 'EcoBin Collection Center',
      coordenadas: { lat: -22.8468087665056, lng: -46.872328885777506 }
    },
    {
      nome: 'Trash 2 Treasure Center',
      coordenadas: { lat: -22.955494200189314, lng: -46.9152603941243 }
    },
    {
      nome: 'EcoSolutions Disposal Hub',
      coordenadas: { lat: -22.80710180809581, lng: -46.96610075401806 }
    },
    {
      nome: 'Waste Solutions Hub',
      coordenadas: { lat: -22.981609504330226, lng: -46.989232759345086 }
    },
    {
      nome: 'EcoBin Depot',
      coordenadas: { lat: -22.991998546967245, lng: -47.077794090281664 }
    },
    {
      nome: 'Waste Solutions Hub',
      coordenadas: { lat: -22.97333668675112, lng: -46.943165270171356 }
    }
  ];

export default class Descartar extends Component {
    
    handleMap =() => { 
        window.location.replace('/map')
    }
    render() {
        return (
            <div id="telaDescartar">
                <div className="barradebusca">
                    <h2 id="tituloBuscar">Busque por endereço:</h2>
                    <BarraDeBuscarLugar />
                </div>
                <div className="botoeselocais">
                <div className="botoesDeBusca">
                    <button id="btnBuscarNoMapa" onClick={this.handleMap}>Buscar no mapa</button>
                    <h2 id="tituloFiltrar">Filtrar por:</h2>
                    <div className="botoesLixos">
                        <button id="btnLixo">Lixo Orgânico</button>
                        <button id="btnLixo">Lixo Reciclável</button>
                        <button id="btnLixo">Lixo Químico</button>
                    </div>
                </div>
                <div className="locais">
                    {locais.map((local) => {
                        return(
                            <LocalDeDescarte coordenadas={local.coordenadas} nome={local.nome} />
                        )
                    })}
                </div>
                </div>
                
            </div>
        )
    }
}