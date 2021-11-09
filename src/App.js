import React from 'react';
import './style.css';
import {useState} from 'react';
import Agenda from './ContenedorPadre'

function App(){
  return(
    <center>
    <div class="Form">
      <h1>Agenda React</h1>
      <form>
        <div class="inp1 font">
        <label>Nombre</label>
        <input type="" name="nombre"/>
        </div>
        <div class="inp2 font">
        <label>Apellido</label>
        <input type="" name="apellido"/>
        </div>
        <div class="inp3 font">
        <label>Telefono</label>
        <input type="" name="Telefono"/>
        </div>
        <button class="BTN-Enviar">
        Enviar
        </button>
      </form> 
    </div>
    </center>
    );
  }
export default App;