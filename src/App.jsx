import Canciones from './Canciones.jsx'
import Contacto from './Contacto.jsx'
import Recetas from './Recetas.jsx'
import Historias from './Historias.jsx'
import Inicio from './Inicio.jsx'
import './App.css'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
function App(){

    return(
        <div className="padre">
              <div className="menu">
                <img src="./UMSA.png" alt="" width={80}/>
                <img src="campanas.png" alt="" height={90}/>


                <nav className="navbar navbar-expand-lg bg-nav-red">
                  <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav"  >
                        
                        <li className="nav-item">
                          <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/historia">Historias</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/canciones">Canciones Tematicas</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/recetas">Recetas</Link>
                        </li>                        
                        <li className="nav-item">
                          <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                
                <img src="campanas.png" alt="" height={90}/>
                <img src="arbola.png" alt="" width={120}/>
              </div>




              <div className="contenido">

                  <Routes>
                      <Route path='/' element={<Inicio/>}></Route>
                      <Route path='/historia' element={<Historias/>}></Route>
                      <Route path='/canciones' element={<Canciones/>}></Route>
                      <Route path='/recetas' element={<Recetas/>}></Route>
                      <Route path='/contacto' element={<Contacto/>}></Route>

                  </Routes>






              </div>
                  



              <div className="footer">
                <div className="decoracion">
                  <img src="baston.png" alt="" width={40}/>
                  <img src="gorro.png" alt="" width={70}/>
                  <img src="baston.png" alt="" width={40}/>
                  <img src="gorro.png" alt="" width={70}/> 
                </div>
                <div className='nombre'> 
                  <h4>Hecho por: Suñagua Leonardini Carlos Enrique</h4>
                  <h5>CI:12734898</h5>
                </div>
                <div className="decoracion">
                  <img src="gorro.png" alt="" width={80}/>
                  <img src="baston.png" alt="" width={40}/>
                  <img src="gorro.png" alt="" width={70}/> 
                  <img src="baston.png" alt="" width={40}/>               
                </div>
                
              </div>
                
        </div>

    );

}
export default App;