import * as User from "../models/UserModel.js";

let user=User.getUserLogged()

function navbarView() {
    let result = `   
    <div id="sidebar" class="main-menu flex-shrink-0 d-sm-block">
     <div class="col-3 d-none d-sm-block p-0  p-3 min-vh-100">
        <a href="#" id="logo" class="d-block link-dark text-decoration-none ">
          <img class="logo-icon" src="../media/images/logo.svg">
        </a>
        <ul id="icons" class="nav nav-pills nav-flush flex-column mb-auto  list-group mt-4">
          <li class="nav-item">
            <a href="index.html"  class="nav-link  py-3 " aria-current="page"">
              <i  class="nav-icon" data-feather="home"></i>  
              <span  class="nav-text">Home</span>      
            </a>
          </li>
          <li class="nav-item">
            <a href="faq.html" class="nav-link py-3 " >
              <i class="nav-icon" data-feather="help-circle"></i>  
              <span class="nav-text">F.A.Q.</span>      
            </a>
          </li>
          <li class="nav-item">
            <a href="aboutUs.html" class="nav-link py-3 " >
              <i class="nav-icon" data-feather="info"></i>    
              <span class="nav-text">Sobre nós</span>    
            </a>
          </li>
        </ul>
        <ul id="icon-fundo" class="nav nav-pills nav-flush flex-column mb-auto ">
          <li class="nav-item">
            <a href="login.html" class="nav-link py-3 " >
              <i class="nav-icon" data-feather="log-in"></i>   
              <span class="nav-text">Log in</span>    
            </a>
          </li>
        </ul>
    </div>
     <div id="hum" class="col-12 col-sm-9 p-0">
        <nav class="navbar navbar-expand-sm navbar-dark d-sm-none">
          <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#conteudo" aria-controls="conteudo" aria-expanded="false" aria-label="Toggle navigation">
            <i class="text-dark" class="navbar-toggler-icon" data-feather="menu"></i> 
          </button>
          <img src="../media/images/logo.svg" width="70" class="d-sm-none">
          <ul id="icon-lado" class="nav nav-pills nav-flush flex-column mb-auto d-sm-none">
            <li>
              <a href="login.html" class="nav-link py-3 " >
                <i class="text-dark" data-feather="log-in"></i>   
              </a>
            </li>
          </ul>
          
          <div class="collapse navbar-collapse" id="conteudo">
            <ul id="icons" class="nav nav-pills nav-flush flex-column mb-auto text-center list-group  d-block d-sm-none" >
                <li class="nav-item">
                  <a href="index.html"  class="nav-link py-3 " aria-current="page"">
                      <i  class="nav-icon text-dark" data-feather="home"></i>  
                      <span  class="nav-text text-dark">Home</span>      
                  </a>
                </li>
                <li>
                  <a href="faq.html" class="nav-link py-3 " >
                      <i class="nav-icon text-dark" data-feather="help-circle"></i>  
                      <span class="nav-text text-dark">F.A.Q.</span>      
                  </a>
                </li>
                <li>
                  <a href="aboutUs.html" class="nav-link py-3 " >
                      <i class="nav-icon text-dark" data-feather="info"></i>    
                      <span class="nav-text text-dark">Sobre nós</span>    
                  </a>
                </li>
                </ul>
          </div>
          </nav>
         
     </div>
 </div>`
    if (User.isLogged()) {
      result = `<div id="sidebar" class="main-menu flex-shrink-0 d-sm-block">
      <div class="col-3 d-none d-sm-block p-0  p-3 min-vh-100">
         <a href="#" id="logo" class="d-block link-dark text-decoration-none ">
           <img class="logo-icon" src="../media/images/logo.svg">
         </a>
         <ul id="icons" class="nav nav-pills nav-flush flex-column mb-auto  list-group mt-4">
         <li class="nav-item">
           
         <a href="index.html"  class="nav-link  py-3 " aria-current="page"">
           <i  class="nav-icon" data-feather="home"></i>  
           <span  class="nav-text">Home</span>      
         </a>
       </li>
       <li>
         <a href="lessonMenu.html" class="nav-link py-3 " >
           <i class="nav-icon" data-feather="file-text"></i>   
           <span class="nav-text">Aulas</span>     
         </a>
       </li>
       <li>
         <a href="book.html" class="nav-link py-3 " >
           <i class="nav-icon" data-feather="book-open"></i>     
           <span class="nav-text">Caderneta</span>  
         </a>
       </li>
       <li>
         <a href="store.html" class="nav-link py-3 ">
           <i class="nav-icon" data-feather="shopping-bag"></i>  
           <span class="nav-text">Loja</span>      
         </a>
       </li>
       <li>
         <a href="faq.html" class="nav-link py-3 " >
           <i class="nav-icon" data-feather="help-circle"></i>  
           <span class="nav-text">F.A.Q.</span>      
         </a>
       </li>
       <li>
         <a href="aboutUs.html" class="nav-link py-3 " >
           <i class="nav-icon" data-feather="info"></i>    
           <span class="nav-text">Sobre nós</span>    
         </a>
       </li>
      </ul>
      <ul id="perfil" class="nav nav-pills nav-flush flex-column mb-auto text-center">
         <li>
           <a href="profile.html" class="nav-link py-3 " >
             <img class="nav-icon" id="profile" src="${user.photo}"> 
             <span class="nav-text">Perfil</span>    
           </a>
         </li>
       </ul>
     </div>
      <div id="hum" class="col-12 col-sm-9 p-0">
         <nav class="navbar navbar-expand-sm navbar-dark d-sm-none">
           <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#conteudo" aria-controls="conteudo" aria-expanded="false" aria-label="Toggle navigation">
             <i class="text-dark" class="navbar-toggler-icon" data-feather="menu"></i> 
           </button>
           <img src="../media/images/logo.svg" width="70" class="d-sm-none">
           <ul id="icon-lado" class="nav nav-pills nav-flush flex-column mb-auto d-sm-none">
             <li>
                <a href="profile.html" class="nav-link py-3 " >
                <img class="nav-icon" id="profile" src="${user.photo}">   
                </a>
             </li>
           </ul>
           
           <div class="collapse navbar-collapse" id="conteudo">
             <ul id="icons" class="nav nav-pills nav-flush flex-column mb-auto text-center list-group  d-block d-sm-none" >
             <li class="nav-item">
           
             <a href="index.html"  class="nav-link  py-3 " aria-current="page"">
               <i  class="nav-icon" data-feather="home"></i>  
               <span  class="nav-text">Home</span>      
             </a>
           </li>
           <li>
             <a href="lessonMenu.html" class="nav-link py-3 " >
               <i class="nav-icon" data-feather="file-text"></i>   
               <span class="nav-text">Aulas</span>     
             </a>
           </li>
           <li>
             <a href="book.html" class="nav-link py-3 " >
               <i class="nav-icon" data-feather="book-open"></i>     
               <span class="nav-text">Caderneta</span>  
             </a>
           </li>
           <li>
             <a href="store.html" class="nav-link py-3 ">
               <i class="nav-icon" data-feather="shopping-bag"></i>  
               <span class="nav-text">Loja</span>      
             </a>
           </li>
           <li>
             <a href="faq.html" class="nav-link py-3 " >
               <i class="nav-icon" data-feather="help-circle"></i>  
               <span class="nav-text">F.A.Q.</span>      
             </a>
           </li>
           <li>
             <a href="aboutUs.html" class="nav-link py-3 " >
               <i class="nav-icon" data-feather="info"></i>    
               <span class="nav-text">Sobre nós</span>    
             </a>
           </li>
                 </ul>
           </div>
           </nav>
          
      </div>
  </div>   `;
    }
            
        
    document.querySelector('#paraSidebar').innerHTML += result;
}

navbarView()
feather.replace()