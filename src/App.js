import React, {Component} from 'react';
import './style.css';

class App extends Component 
{
  render()
  {
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
        </form> 
      </div>
      </center>
    )
  }
}
export default App;