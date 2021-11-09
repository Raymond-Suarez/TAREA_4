import React, { useState, useEffect } from 'react';
function CargarDatos({resultados}) {
  const [contacto, setContacto] = useState([]);
  const getContacto =()=>{
    fetch('http://www.raydelto.org/agenda.php'
    )
      .then(function (response){
        return response.json();
      })
      .then(function (myJson){
        setContacto(myJson);
      });
  };
  useEffect(()=>{
    getContacto();
  },[])
  return (
    <div className="Listas">
      {contacto &&
        contacto.length > 0 &&
        contacto.map((item) => (
          <p className="Contacto">
            {item.nombre} {item.apellido} {item.telefono}{' '}
          </p>
        ))}
    </div>
 );
}
export default CargarDatos;
