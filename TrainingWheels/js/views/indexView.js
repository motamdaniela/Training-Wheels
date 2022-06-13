import * as User from "../models/userModel.js";
import * as Review from "../models/reviewsModel.js";

User.init()
Review.init()

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
        <i class="star" data-feather="star"></i>
        <i class="star" data-feather="star"></i>
        <i class="star" data-feather="star"></i>
        <i class="star" data-feather="star"></i>
        <i class="star" data-feather="star"></i>
      </fieldset>
      <fieldset id="comentarios">
        <div>
          <img id="perfilCom" src="media/images/default.svg">
          <div>
            <p><strong>Nome</strong></p>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
          </div>
        </div>
        <p id="comentario">comentario</p>
      </fieldset>
      <fieldset class="titulo">
        <h2>Avalia-nos!</h2>
      </fieldset>
    
      <fieldset id="reviews">
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" style="height: 150px" id="commentReview"></textarea>
        </div>
        <div id="avaliacoes">
          <div class="input-group flex-nowrap" id="num">
            <span class="input-group-text" id="addon-wrapping"><i class="fa-regular fa-star"></i></span>
            <input type="number" class="form-control" min="1" max="5" placeholder="ex: 5" aria-describedby="addon-wrapping" id="starReview">
          </div>  
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
          <td><i class="nav-icon" data-feather="check"></i> ${user.ranking[0]}<i class="nav-icon" data-feather="x"></i>${user.ranking[1]}</td>
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


let avaliarBtn=document.querySelector('#avaliar');
avaliarBtn.addEventListener("click",()=>{
  console.log(1)
  let comment=document.querySelector('#commentReview').value;
  console.log(2)
  let stars=document.querySelector('#starReview').value;
  console.log(3)
  let userLog=User.getUserLogged().username
  Review.add(userLog, comment, stars)

})

function rankingOrder(){
  let array=[]
  let users=User.getUsers()
  for(let user of users){
    let respostasCertas= +user.ranking[0]
    let respostasErradas= +user.ranking[1]
    let total=respostasCertas+respostasErradas
    let conta=respostasCertas/total
    let coiso=user.username
    if(array.length<3){
      array.push(`${coiso} ${conta}`)
    }else{
      array.forEach(element => {
        
      });
    }
  }
  console.log(array)
}
rankingOrder()

