import React from 'react';
import styled from 'styled-components';
import { SunDim, Moon } from 'lucide-react'; 

const Switch = ({ onToggle, isChecked }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} checked={isChecked} />
        <span className="slider">
            {/* 3. Colocar los iconos dentro de un contenedor que se mueve */}
            <span className="icon-wrapper">
              <SunDim size={18} className="sun" />
              <Moon size={18} className="moon" />
            </span>
        </span>
      </label>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
  .switch {
    font-size: 10px;
    position: relative;
    display: inline-block;
    width: 5.5em; /* Un poco más ancho para los iconos */
    height: 3em;
  }

  /* Oculta el checkbox por defecto */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* El fondo del toggle */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:  #a5b4fc74; /* Color cielo de día */
    transition: .4s;
    border-radius: 3em;
    display: flex;
    align-items: center;
  }

  /* Contenedor que se mueve y contiene los iconos */
  .icon-wrapper {
    background-color: #f0f0f0;
    height: 2.4em;
    width: 2.4em;
    border-radius: 50%;
    position: absolute;
    left: 0.3em;
    transition: .4s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Oculta el icono que no se ve */
  }

  /* Estilos para los iconos */
  .sun, .moon {
    position: absolute;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  .sun {
    color: #333; /* Color sol */
    opacity: 1; /* El sol es visible por defecto */
    transform: rotate(0deg);
  }

  .moon {
    color: #f0f0f0; /* Color luna */
    opacity: 0; /* La luna está oculta por defecto */
    transform: rotate(-90deg);
  }

  /* --- ESTADO ACTIVADO (MODO OSCURO) --- */

  input:checked + .slider {
    background-color: #666; /* Color cielo de noche */
    position: relative;
    z-index: -1;
  }

  input:checked + .slider .icon-wrapper {
    transform: translateX(2.5em); /* Mueve el contenedor a la derecha */
    background-color: #4f46e5;
  }

  input:checked + .slider .sun {
    opacity: 0; /* Oculta el sol */
    transform: rotate(90deg);
  }

  input:checked + .slider .moon {
    opacity: 1; /* Muestra la luna */
    transform: rotate(0deg);
  }
`;

/*
const Switch = ({ onToggle }) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider">
          <span className="circle" />
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .switch {
    font-size: 10px;
    position: relative;
    display: inline-block;
    width: 3em;
    height: .5em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }


  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #D4D4D8;
    transition: .4s;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  .slider .circle {
    background-color: #D4D4D8;
    height: 3em;
    width: 3em;
    border-radius: 50%;
    position: absolute;
    left: 0;
    transform: translateX(-50%);
    transition: .4s;
  }

  .slider .circle::before {
    position: absolute;
    content: "";
    height: 2.3em;
    width: 2.3em;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(182, 182, 182);
    transition: .4s;
  }

  .slider .circle::after {
    content: '';
    background-color: #615FFF;
    height: 1.7em;
    width: 1.7em;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .4s;
  }

  input:checked + .slider .circle {
    transform: translateX(2em);
    transition: .4s;
  }

  input:checked + .slider .circle::before {
    background-color: #615FFF;
    transition: .4s;
  }

  input:checked + .slider .circle::after {
    width: 0;
    height: 0;
    transition: .4s;
  }npm run dev
  
`;
*/

export default Switch;
