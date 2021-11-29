import {Link} from 'react-router-dom'
import {Navbar, container, Nav, navbarDropdown} from 'react-bootstrap' /* Utilizando destructuring */
import CartWidget from './CartWidget'
import Dropdown from 'react-bootstrap/Dropdown'
import { Container } from 'react-bootstrap'


function NavBar1() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <img src="/be-commerce/src/img/1.png"/>
      <Link to='' class="navbar-brand" href="#">BE-Commerce</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='' class="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li class="nav-item">
        <Link to='' class="nav-link" href="#">Link</Link>
        </li>
        <li class="nav-item dropdown">
        <Link to='' class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
            </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='' href="#">Tensiómetros</Link></li>
            <li><Link to='' href="#">Oxímetros</Link></li>
            <li><Link to='' href="#">Termómetros</Link></li>
            <li><Link to='' href="#">Martillo de Reflejos</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='' href="#">Todos los Productos</Link></li>
          </ul>
        </li>
        <li class="nav-item">
        <Link to='' class="nav-link disabled"></Link>
        </li>
      </ul>
      
      
       <Link to='/cart'>
        <CartWidget/>
        </Link>
       
     
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Búsqueda" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Búsqueda</button>
      </form>
    </div>
  </div>
</nav>
      )
    }
    
    export default NavBar1

