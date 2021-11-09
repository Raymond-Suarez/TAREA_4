import CargarDatos from "./ListasContactos.js";
import Tabla_Contactos from "./Sender"

function Agenda(){
  return(
    <div>
      <Tabla_Contactos/>
      <CargarDatos/>
    </div>
  );
}