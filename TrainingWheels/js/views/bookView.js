
let btn2 = document.querySelector('.field2')
btn2.addEventListener('click', function() {
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    field1.classList.add('hide');
    field2.classList.remove('hide') ;
})

let btn1 = document.querySelector('.field1')
btn1.addEventListener('click', function() {
    var field1 = document.getElementById("fs1");
    var field2 = document.getElementById("fs2");
    field1.classList.remove('hide');
    field2.classList.add('hide') ;
})
