let green = document.querySelector("#btn_green");
let red = document.querySelector("#btn_red");
let yellow = document.querySelector("#btn_yellow");

green.addEventListener('click',()=>{
    let carrinha = document.querySelector("#carrinha");
    let moto = document.querySelector("#moto_inteira");
    let carro = document.querySelector("#carro_todo");
    carrinha.setAttribute("animation", `property: position; from: -12 -0.9 -7; to: 100 -0.9 -7; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; delay:2000; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:6000; easing: linear`)
})
red.addEventListener('click',()=>{
    let carrinha = document.querySelector("#carrinha");
    let moto = document.querySelector("#moto_inteira");
    let carro = document.querySelector("#carro_todo");
    carrinha.setAttribute("animation", `property: position; from: -12 -0.9 -7; to: 100 -0.9 -7; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:2000; easing: linear`)
})
yellow.addEventListener('click',()=>{
    let carrinha = document.querySelector("#carrinha");
    let moto = document.querySelector("#moto_inteira");
    let carro = document.querySelector("#carro_todo");
    carrinha.setAttribute("animation", `property: position; from: -12 -0.9 -7; to: 100 -0.9 -7; loop: false; delay: 300; dir: alternate; dur: 6000; easing: easeInOutCubic`)
    moto.setAttribute("animation", `property: rotation; to: 0 100 0; loop: false; dur: 5000; easing: easeInOutCubic`)
    carro.setAttribute("animation",`property: rotation; to: 0 90 0; loop: false; dur: 2000; delay:2000; easing: linear`)
})

/*carrinha-->moto-->carro*/