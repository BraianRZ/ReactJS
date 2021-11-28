/* Utilizando destructuring */
import {Navbar, container, Nav, navbarDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget'
import cartWidget from './CartWidget'

function NavBar1() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <img src="/be-commerce/src/img/1.png"/>
    <a class="navbar-brand" href="#">BE-Commerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Tensiómetros</a></li>
            <li><a class="dropdown-item" href="#">Oxímetros</a></li>
            <li><a class="dropdown-item" href="#">Termómetros</a></li>
            <li><a class="dropdown-item" href="#">Martillo de Reflejos</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Todos los Productos</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Anulado</a>
        </li>
      </ul>
         <CartWidget/>
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

