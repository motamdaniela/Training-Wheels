let green = document.querySelector("#btn_green");
let red = document.querySelector("#btn_red");
let yellow = document.querySelector("#btn_yellow");
let reset = document.querySelector("#btn_blue");

/*veiculos*/
let carrinha = document.querySelector("#truck");
let moto = document.querySelector("#moto_inteira");
let carro = document.querySelector("#carro_todo");

// fogo
let fogo=document.querySelector("#explosao");
let fire=document.querySelector("#firework");
let fire2=document.querySelector("#firework2");

// som
let ex_som=document.querySelector("#explosao_som");
let fg_som=document.querySelector("#fogo_som");

green.addEventListener('click',()=>{
    correct(carrinha, carro, moto)
})
red.addEventListener('click',()=>{
    wrong_moto(carrinha, carro, moto)
})
yellow.addEventListener('click',()=>{
    wrong_car(carrinha, carro, moto)
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
    fogo.setAttribute("visible",'false');
    fire.setAttribute("visible",'false');
    ex_som.components.sound.stopSound();
    fg_som.components.sound.stopSound();
    fire2.setAttribute("visible",'false');
})

/*movimentos da opcao correta*/
async function correct (carrinha, carro, moto){
    carrinha.setAttribute("animation", `property: position; from: -20.420 3.8 -4; to: 100 3.8 -4; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; delay:1500; dur: 3500; easing: easeInOutCubic`)
    await sleep(4000)
    moto.setAttribute("animation", `property: position; from:6 0 -5; to: 4 0 100; loop: false; delay:50; dur: 5000; easing: linear`);
    carro.setAttribute("animation",`property: position; from:-9 0 0; to: -9 0 -6; loop: false; dur: 500; delay:500; easing: linear`,`property: rotation; to: 0 90 0; loop: false; dur: 1500; delay:50; easing: easeInOutCubic`);
    await sleep(1000)
    carro.setAttribute("animation",`property: rotation; from:0 0 0; to: 0 90 0; loop: false; dur: 1500; delay:50; easing: easeInOutCubic`)
    await sleep(1500)
    fg_som.components.sound.playSound();
    carro.setAttribute("animation",`property: position; from:-9 0 -6; to: -100 0 -3; loop: false; dur: 2000; delay:50; easing: linear`);
    fire.setAttribute("visible", `true`);
    fire2.setAttribute("visible", `true`);
}

/*movimentos opcao errada em que a moto avança primeiro*/
async function wrong_moto (carrinha, carro, moto){
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; delay:500; dur: 4000; easing: easeInOutCubic`)
    await sleep(2000)
    carrinha.setAttribute("animation", `property: position; from: -20.420 3.8 -4; to: -5 3.8 -4; loop: false; delay: 1000; dir: alternate; dur: 500; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: position; from:-9 0 0; to: -9 0 -8; loop: false; dur: 500; delay:700; easing: linear`);
    fogo.setAttribute("animation",`property:position; from:-2.420 -1.2 -4; to:-2.420 -1 -4; delay:99999`)
    await sleep(1500)
    fogo.setAttribute("visible",`true`)
    fogo.setAttribute("sound",`autoplay:true`)
    ex_som.components.sound.playSound();
}

/*movimentos opcao errada em que o carro avança primeiro*/
async function wrong_car (carrinha, carro, moto){
    carro.setAttribute("animation",`property: position; from:-9 0 0; to: -9 0 -10; loop: false; dur: 500; delay:200; easing: linear`);
    carrinha.setAttribute("animation", `property: position; from: -20.420 3.8 -4; to: -5 3.8 -4; loop: false; delay: 600; dir: alternate; dur: 500; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 80 0; loop: false; delay:300; dur: 1000; easing: easeInOutCubic`)
    fogo.setAttribute("animation",`property:position; from:-2.420 -1.2 -4; to:-2.420 -1 -4; delay:99999`)
    await sleep(1200)
    fogo.setAttribute("visible",`true`)
    fogo.setAttribute("sound",`autoplay:true`)
    ex_som.components.sound.playSound();
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}