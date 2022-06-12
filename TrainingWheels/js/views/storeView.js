import * as User from "../models/userModel.js";

User.init()

const btns=document.querySelectorAll('.comprar')
for (const btn of btns) {
    btn.addEventListener('click', function () {
       let nome= this.parentNode.previousElementSibling.previousElementSibling.innerHTML
       alert(nome);
    })
}