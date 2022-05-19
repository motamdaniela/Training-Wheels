let green = document.querySelector("#btn_green");
let red = document.querySelector("#btn_red");
let yellow = document.querySelector("#btn_yellow");
let reset = document.querySelector("#btn_blue");

/*veiculos*/
let carrinha = document.querySelector("#truck");
let moto = document.querySelector("#moto_inteira");
let carro = document.querySelector("#carro_todo");

green.addEventListener('click',()=>{
    correct(carrinha, carro, moto)
})
red.addEventListener('click',()=>{
    wrong_moto(carrinha, carro, moto)
})
yellow.addEventListener('click',()=>{
    carrinha.setAttribute("animation", `property: position; from: -20.420 3.8 -4; to: 100 6.59958 -2.19438; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:2000; easing: linear`)
})

/*devolve todos os veículos às suas posicoes e rotações iniciais*/
reset.addEventListener('click', ()=>{
    carrinha.removeAttribute("animation");
    carro.removeAttribute("animation");
    moto.removeAttribute("animation");
    carro.setAttribute("rotation",'0 0 0');
    moto.setAttribute("rotation", '0 0 0');
    carrinha.setAttribute("position",'-20.420 3.8 -4');
    carro.setAttribute("position",'-9 0 0');
    moto.setAttribute("position",'6 0 -5');
})

/*movimentos da opcao correta*/
async function correct (carrinha, carro, moto){
    carrinha.setAttribute("animation", `property: position; from: -20.420 3.8 -4; to: 100 3.8 -4; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; delay:1500; dur: 3500; easing: easeInOutCubic`)
    await sleep(4000)
    moto.setAttribute("animation", `property: position; from:6 0 -5; to: 4 0 100; loop: false; delay:50; dur: 5000; easing: linear`);
    carro.setAttribute("animation",`property: position; from:-9 0 0; to: -9 0 -6; loop: false; dur: 500; delay:500; easing: linear`);
    await sleep(1000)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 1500; delay:50; easing: easeInOutCubic`)
    await sleep(1500)
    carro.setAttribute("animation",`property: position; from:-9 0 -6; to: -100 0 -3; loop: false; dur: 2000; delay:500; easing: linear`);

}

/*movimentos opcao errada em que moto avança primeiro*/
async function wrong_moto (carrinha, carro, moto){
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; delay:1000; dur: 4000; easing: easeInOutCubic`)
    await sleep(2000)
    carrinha.setAttribute("animation", `property: position; from: -20.420 3.8 -4; to: -5 3.8 -4; loop: false; delay: 1000; dir: alternate; dur: 500; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: position; from:-9 0 0; to: -9 0 -8; loop: false; dur: 500; delay:700; easing: linear`);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}