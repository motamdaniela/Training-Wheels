let green = document.querySelector("#btn_green");
let red = document.querySelector("#btn_red");
let yellow = document.querySelector("#btn_yellow");
let blue = document.querySelector("#btn_blue");

/*veiculos*/
let carrinha = document.querySelector("#carrinha");
let moto = document.querySelector("#moto_inteira");
let carro = document.querySelector("#carro_todo");

green.addEventListener('click',()=>{
    carrinha.setAttribute("animation", `property: position; from: -12 -0.9 -7; to: 100 -0.9 -7; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; delay:1500; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:4500; easing: linear`)
})
red.addEventListener('click',()=>{
    carrinha.setAttribute("animation", `property: position; from: -12 -0.9 -7; to: 100 -0.9 -7; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:2000; easing: linear`)
})
yellow.addEventListener('click',()=>{
    carrinha.setAttribute("animation", `property: position; from: -12 -0.9 -7; to: 100 -0.9 -7; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:2000; easing: linear`)
})
blue.addEventListener('click', ()=>{
    carrinha.removeAttribute("animation");
    carro.removeAttribute("animation");
    moto.removeAttribute("animation");
    carrinha.setAttribute("position",'-12 -0.9 -7');
    carro.setAttribute("rotation",'0 0 0');
    moto.setAttribute("rotation", '0 0 0');
})
/*carrinha-->moto-->carro*/