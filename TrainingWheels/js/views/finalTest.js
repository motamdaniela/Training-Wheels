import * as User from "../models/userModel.js";
import * as Level from "../models/levelModel.js";
import * as Test from "../models/testModel.js";
import * as Question from "../models/questionModel.js";
import * as Progress from '../models/progressModel.js';

User.init()
Level.init()
Test.init()
Question.init()
Progress.init()

let currentUser = User.getUserLogged()
let progress = Progress.getProgress()
let testes=Test.getTests()
let perguntas=Question.getQuestions()

function pageView(){
    let result='' 
    
    result=`
    <p class="pergunta">Pergunta</p>
      <div class="d-grid gap-2 col-6 mx-auto divRespostas">
        <button class="btn btn-primary certa" type="button">Button</button>
        <button class="btn btn-primary errada" type="button">Button</button>
        <button class="btn btn-primary errada" type="button">Button</button>
        <button class="btn btn-primary errada" type="button">Button</button>
    </div>
    `

    document.querySelector('.container').innerHTML = result;
}
pageView()