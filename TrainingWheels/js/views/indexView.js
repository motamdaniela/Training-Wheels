import * as User from "../models/userModel.js";
import * as Review from "../models/reviewsModel.js";

User.init()
Review.init()

function pageView(){
  
    let result=`
    <div class="buttons">
      <a  href="login.html">
        <button type="button" id="entrar" class="btn btn-outline ">Entrar</button>
      </a>
      <a  href="signUp.html">
        <button type="button" id="registar" class="btn btn">Registar</button>
      </a>
      
    </div>
    <img id="video" src="https://www.hypeness.com.br/1/2019/05/azul-ou-verde-teste-1.jpg">
    
    
    <div class="tutorial" >
      <p id="tituloTutorial">Como usar Training Wheels</p>
      <img id="imgTutorial" src="../media/images/inicio_tutorial.svg">
    </div>
    `
    // <img id="fundo3" src="../media/images/fundo_logado.svg">
    let result2=''
    let result3=''
    if (User.isLogged()){
      let coisoo=document.querySelector('#fundo')
      coisoo.src ="../media/images/fundojalog.svg";
      // coisoo.innerHTML+=`<img id="fundo3" src="../media/images/fundo_logado.svg"></img>`
        
        result=`<div id="topo"> 
        <img src="../media/images/bemvindo.svg">
          <div id="coisas">
            <div id="progresso">
              <img src="../media/images/linha.svg">
              <fieldset id="continuar">
                <p>nivel</p>
                <button id="continuarBtn">
                  <i data-feather="play"></i>
                </button>
              </fieldset>
            </div>
            <fieldset id="nextSticker">
            </fieldset>
          </div>
        </div>
        <div id="baixo">
        <div id="quadroLideres" class="divInicio">
          <fieldset class="titulo">
          <h2>Quadro de líderes</h2>
          <i class="nav-icon" data-feather="bar-chart"></i>
        </fieldset>
          <table class="table table-borderless" id="ranking">
          <thead>
            <tr>
              <th id="top3" scope="col">Top 3</th>
              <th id="nometop3" scope="col">Nome</th>
              <th id="respostastop3" scope="col">Respostas</th>
            </tr>
          </thead>
          <tbody id='body_rank'>
            
          </tbody>
        </table>
      </div>
      <div id="avalDiv" class="divInicio">
        <fieldset class="titulo">
          <h2>Avaliações</h2>
          <div>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
            <i class="star" data-feather="star"></i>
          </div>
        </fieldset>
        <div id="comentDiv" class="carousel slide" data-ride="carousel">
          <div id="reviewsCom" class="carousel-inner">
          
          </div>
          <a class="carousel-control-prev" href="#comentDiv" role="button" data-slide="prev">
            <i data-feather="chevron-left"></i>
          </a>
          <a class="carousel-control-next" href="#comentDiv" role="button" data-slide="next">
            <i data-feather="chevron-right"></i>
          </a>
      </div>
      
      <div id="reviewsDiv" class="divInicio">
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
      </div>
      </div>
      
        `
        let nomes=rankingOrder()
        console.log(nomes)
        
        let users=User.getUsers()
        let cont=0;
        for (let nome of nomes) {
          let user = users.find(user => nome.name === user.username);
          if(user.type == 'user'){
          console.log(nome)
            cont+=1;
          if(cont<4 && nome.name==user.username ){
            result2+=`<tr>
          <td scope="row"><img src=${user.photo}></td>
          <td>${user.name}</td>
          <td class="respostas"><i class="certo" data-feather="check"></i> ${user.ranking[0]}<i class="errado" data-feather="x"></i>${user.ranking[1]}</td>
        </tr>
          `
          
          }
          }
        }
          
        let reviews=Review.getReviews()
        
        if(reviews.lenght==0){
          result3+=`<fieldset id="comentarios">
          <div>
            <img id="perfilCom" src="../media/images/default.svg">
            <div>
              <p><strong></strong></p>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
              <i class="star" data-feather="star"></i>
            </div>
          </div>
          <p id="comentario">Avaliações não disponíveis</p>
        </fieldset>
          `
            
          }else{
            for(let review of reviews){
              result3+=`
              <div class="carousel-item">
                <div class="carousel-caption">
                  <fieldset class="comentarios">
                    <div class="topo">
                      <img class="perfilCom" src="../media/images/default.svg">
                      <div class="nomeStar">
                        <p><strong>${review.username}</strong></p>
                        <div>
                          <i class="star" data-feather="star"></i>
                          <i class="star" data-feather="star"></i>
                          <i class="star" data-feather="star"></i>
                          <i class="star" data-feather="star"></i>
                          <i class="star" data-feather="star"></i>
                        </div>
                      </div>
                    </div>
                    <p class="comentario">${review.txtReview}</p>
                  </fieldset>
                </div>
              </div>
            `}
          }  
        }
        
        
  
    document.querySelector('#content').innerHTML += result;
    document.querySelector('#body_rank').innerHTML = result2;
    document.querySelector('#reviewsCom').innerHTML = result3;
    let item=document.querySelector('.carousel-item')
    item.classList.add('active');
    
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
  window.location.reload()

})

function rankingOrder(){
  let array=[]
  let users=User.getUsers()
  for(let user of users){
    let respostasCertas= +user.ranking[0]
    let respostasErradas= +user.ranking[1]
    let total=respostasCertas+respostasErradas
    let conta
    if(total==0){
      conta=0
    }else{
      conta=respostasCertas/total
    }
    let coiso=user.username
    let idk={
      name:coiso,
      rank:conta

    }
    array.push(idk)
  }
  array.sort(function(a, b) { return (b.rank-a.rank);});

  return array

}
feather.replace()