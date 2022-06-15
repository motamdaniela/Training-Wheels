
let btn1 = document.querySelector('.field1')
btn1.addEventListener('click', function() {
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.remove('hide');
    field2.classList.add('hide') ;
    field3.classList.add('hide');
    field4.classList.add('hide');
})

let btn2 = document.querySelector('.field2')
btn2.addEventListener('click', function() {
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.remove('hide');
    field3.classList.add('hide');
    field4.classList.add('hide');
})

let btn3 = document.querySelector('.field3')
btn3.addEventListener('click', function(){
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.add('hide');
    field3.classList.remove('hide');
    field4.classList.add('hide');
})

let btn4 = document.querySelector('.field4')
btn4.addEventListener('click', function(){
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    var field3 = document.getElementById("fs3");
    var field4 = document.getElementById("fs4");
    field1.classList.add('hide');
    field2.classList.add('hide');
    field3.classList.add('hide');
    field4.classList.remove('hide');
})

