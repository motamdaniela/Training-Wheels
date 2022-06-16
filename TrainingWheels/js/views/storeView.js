import * as User from "../models/userModel.js";
import * as Progress from "../models/progressModel.js"

User.init()
Progress.init()
let user=User.getUserLogged()
let progress = Progress.getProgress()
document.querySelector('#pontos').innerHTML=`Pontos: ${progress.points} `

let btns=document.querySelectorAll('.comprar-clues')
for (let btn of btns) {
    btn.addEventListener('click', function () {
       let nome=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
        let coise=document.querySelector('#nomeCompra')
        coise.innerHTML=nome
       $("#cluesModal").modal('show');
       let preco=this.parentNode.previousElementSibling.innerHTML
       console.log(preco)
       let precoNum = +preco.slice(0,2)
       console.log(precoNum)
       console.log(progress.points)
       const conf=document.querySelector('#confirmar_compra')
       conf.addEventListener('click',function(){
        if(precoNum<=progress.points){
            let numPista = +nome.slice(0,1)
            console.log(numPista)
            user.clues+=numPista
        }else{
            alert('Não tem pontos suficientes para fazer esta compra')
            $("#cluesModal").modal('hide');
        }
       }) 
    })
}

const btns2=document.querySelectorAll('.comprar-stickers')
for (const btn2 of btns2) {
    btn2.addEventListener('click', function () {
        let nome=this.parentNode.previousElementSibling.previousElementSibling.innerHTML
        let coise=document.querySelector('#nomeCompra2')
        coise.innerHTML=nome
        let getId = this.parentNode.previousElementSibling.previousElementSibling.id
        console.log(getId);
        $("#stickersModal").modal('show');
        let preco=this.parentNode.previousElementSibling.innerHTML
        console.log(preco)
        let precoNum = +preco.slice(0,2)
        console.log(precoNum)
        console.log(progress.points)
        const conf=document.querySelector('#confirmar_compra2')
        conf.addEventListener('click',function(){
            if(precoNum<=progress.points){
                // user.stickersBuy.push(getId)
                // console.log(user.stickersBuy)
                // progress.points -= precoNum
            }else{ 
                alert('Não tem pontos suficientes para fazer esta compra')
                $("#stickersModal").modal('hide');
                let getId;
                // user.stickersBuy.push("hi"); 
                console.log(user.stickersBuy) 
                
            }
        }) 
        })
}