function Enviar(){
  var TXN = document.getElementById('Nombre')
  var TXA = document.getElementById('Apellido')
  var TXT = document.getElementById('Telefono')
      const requestOptions = 
      {
        method: 'POST',
        body: JSON.stringify({
          Nombre: TXN.value,
          Apellido: TXA.value,
          Telefono: TXT.value
        })
      };
      fetch('http://www.raydelto.org/agenda.php', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id}));
      alert("Contacto añadido!")
}

function Tabla_Contactos(){
  return(
    <div class="R2">
    <div class="C2">
        <h2 class="font">Contactos</h2>
        <div class="info-contact font">
            <table class=" font" id="table" >
                <thead>
                    <tr>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Apellido
                        </th>
                        <th>
                            Telefono
                        </th>
                    </tr>
                </thead>
                <tbody id="data" >
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
export default Tabla_Contactos;