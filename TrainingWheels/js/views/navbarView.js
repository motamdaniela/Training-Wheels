import * as User from "../models/UserModel.js";

function navbarView() {
    let result = `   <a href="#" id="logo" class="d-block link-dark text-decoration-none ">
    <img class="logo-icon" src="media/images/logo.svg">
    
  </a>
  <ul id="icons" class="nav nav-pills nav-flush flex-column mb-auto text-center">
    <li class="nav-item">
      
      <a href="#"  class="nav-link  py-3 " aria-current="page"">
        <i id="active" class="nav-icon" data-feather="home"></i>  
        <span id="active2" class="nav-text">Home</span>      
      </a>
    </li>
    <li>
      <a href="#" class="nav-link py-3 " >
        <i class="nav-icon" data-feather="help-circle"></i>  
        <span class="nav-text">F.A.Q.</span>      
      </a>
    </li>
    <li>
      <a href="#" class="nav-link py-3 " >
        <i class="nav-icon" data-feather="info"></i>    
        <span class="nav-text">Sobre nós</span>    
      </a>
    </li>
  </ul>
  <ul id="icon-fundo" class="nav nav-pills nav-flush flex-column mb-auto text-center">
    <li>
      <a href="html/login.html" class="nav-link py-3 " >
        <i class="nav-icon" data-feather="log-in"></i>   
        <span class="nav-text">Log in</span>    
      </a>
    </li>
  </ul>
  </div>`
    if (User.isLogged()) {
      result = `   <a href="#" id="logo" class="d-block link-dark text-decoration-none ">
      <img class="logo-icon" src="media/images/logo.svg">
      
    </a>
    <ul id="icons" class="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li class="nav-item">
        
        <a href="#"  class="nav-link  py-3 " aria-current="page"">
          <i id="active" class="nav-icon" data-feather="home"></i>  
          <span id="active2" class="nav-text">Home</span>      
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 " >
          <i class="nav-icon" data-feather="file-text"></i>   
          <span class="nav-text">Aulas</span>     
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 " >
          <i class="nav-icon" data-feather="book-open"></i>     
          <span class="nav-text">Caderneta</span>  
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 ">
          <i class="nav-icon" data-feather="shopping-bag"></i>  
          <span class="nav-text">Loja</span>      
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 " >
          <i class="nav-icon" data-feather="help-circle"></i>  
          <span class="nav-text">F.A.Q.</span>      
        </a>
      </li>
      <li>
        <a href="#" class="nav-link py-3 " >
          <i class="nav-icon" data-feather="info"></i>    
          <span class="nav-text">Sobre nós</span>    
        </a>
      </li>
    </ul>
    <div class="btn-group dropup">
      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i id="login" data-feather="log-in"></i>
      </button>
      <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Entrar</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Registar</a></li>
      </ul>
    </div>`;
    }
            
        
    document.querySelector('#sidebar').innerHTML += result;
}

navbarView()
feather.replace()