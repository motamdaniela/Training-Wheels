import * as User from "../models/userModel.js";

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
    if (User.isLogged()){
        
        result=`
        `
    }
    document.querySelector('#content').innerHTML += result;
    document.querySelector('#divfundo').innerHTML =`<img id="fundo2" src="./media/images/fundojalog.svg">`
}
pageView()