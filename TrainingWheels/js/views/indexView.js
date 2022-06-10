import * as User from "../models/userModel.js";

User.init()

function pageView(){
  
    let result=`<img id="video" src="https://www.hypeness.com.br/1/2019/05/azul-ou-verde-teste-1.jpg">
    <div class="buttons">
      <a  href="html/login.html">
        <button type="button" id="entrar" class="btn btn-outline ">Entrar</button>
      </a>
      <a  href="html/signUp.html">
        <button type="button" id="registar" class="btn btn">Registar</button>
      </a>
      
    </div>

    
    
    <div class="tutorial" >
      <p>Como usar Training Wheels</p>
      <img src="media/images/inicio_tutorial.svg">
    </div>
    `
    let result2=''
    if (User.isLogged()){
      document.querySelector('#divfundo').innerHTML =`<img id="fundo2" src="./media/images/fundojalog.svg">`
        
        result=`<fieldset class="titulo">
        <h2>Quadro de líderes</h2>
        <i class="nav-icon" data-feather="bar-chart"></i>
      </fieldset>
        <table class="table table-borderless" id="ranking">
        <thead>
          <tr>
            <th scope="col">Top 3</th>
            <th scope="col">Nome</th>
            <th scope="col">Respostas</th>
          </tr>
        </thead>
        <tbody id='body_rank'>
          
        </tbody>
      </table>
      <fieldset class="titulo">
        <h2>Avaliações</h2>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </fieldset>
      <fieldset class="titulo">
        <h2>Avalia-nos!</h2>
      </fieldset>
    
      <fieldset id="reviews">
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 150px"></textarea>
        </div>
        <div id="avaliacoes">
          <i class="fa-regular fa-star" id="ola"></i>
          <i class="fa-regular fa-star"></i> 
          <i class="fa-regular fa-star"></i>  
          <i class="fa-regular fa-star"></i> 
          <i class="fa-regular fa-star"></i>  
          <button type="button" id="avaliar" class="btn btn-primary">Avaliar</button>
        </div>
        
        
      </fieldset>
        `
        
        let users=User.getUsers()
        let cont=0;
        for(let user of users){
          cont+=1;
          if(cont<4){
            result2+=`<tr>
          <th scope="row"><img src=${user.photo}</th>
          <td>${user.name}</td>
          <td>Otto</td>
        </tr>
          `
          }
          
        }
        
    }
    document.querySelector('#content').innerHTML += result;
    document.querySelector('#body_rank').innerHTML = result2;
    
}
pageView()
feather.replace()

