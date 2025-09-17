const topNav = document.getElementById('top-nav');
const search = document.getElementById('search');
const searchMobile = document.querySelector('.search-mobile');
const hr = document.querySelector(".top-nav hr");

window.addEventListener('scroll', function () {
    let y = window.scrollY;

    if (y >= 150) {
        topNav.style.backgroundColor = 'white';
        search.style.display = 'block';
        topNav.style.boxShadow = '0 0 15px gray';
        searchMobile.classList.remove('d-none');
        hr.classList.remove('d-none');
    }
    else {
        topNav.style.backgroundColor = 'transparent';
        search.style.display = 'none';
        topNav.style.boxShadow = 'none';
        searchMobile.classList.add('d-none');
        hr.classList.add('d-none');
    }
});



let lastScrollY = window.scrollY;
let header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY - lastScrollY >= 40 && window.scrollY >= 150) {
        header.style.top = '-75px';
        lastScrollY = window.scrollY;
    }
});

window.addEventListener('scroll', function() {
    if (lastScrollY - window.scrollY >= 40 && window.scrollY >= 150) {
        header.style.top = '0';
        lastScrollY = window.scrollY;
    }
});

let date = document.getElementById('date');
let body = document.getElementById('body');
let flag = true;

date.addEventListener('click', function () {
    date.classList.add('border-for-inputs');
    flag = false;
});

body.addEventListener('click', function () {
    if (date.classList.contains('border-for-inputs') && flag) {
        date.classList.remove('border-for-inputs');
    }
        
    flag = true;
});

let tedad = document.querySelector('.tedad div');
let tedadSelect = document.querySelector('.tedad-select');
let add = document.querySelector('#add');
let minus = document.querySelector('#minus');
let tedadCounter = document.getElementById('tedad-counter');
let tedadInput = document.getElementById('tedad-input');
let flag1 = true;

function visibleTedad() {

    tedad.classList.add('border-for-inputs');
    tedadSelect.classList.remove('d-none');
    tedadSelect.classList.add('d-block');
    flag1 = false;
}

tedad.addEventListener('click', visibleTedad);
tedadSelect.addEventListener('click', visibleTedad);

body.addEventListener('click', function () {
    if (tedad.classList.contains('border-for-inputs') && flag1) {
        tedad.classList.remove('border-for-inputs');
        tedadSelect.classList.remove('d-block');
        tedadSelect.classList.add('d-none');
    }

    flag1 = true;
});

let tedadvalue = 0;

add.addEventListener('click', function(){
    if(tedadCounter.innerHTML < 10){
        tedadCounter.innerHTML = ++tedadvalue;
        if(tedadvalue == 0){
            tedadInput.innerHTML = "تعداد نفرات";
        }else{
            tedadInput.innerHTML = tedadCounter.innerHTML + " نفر";
        }
    }
});

minus.addEventListener('click', function(){
    if(tedadCounter.innerHTML > 0){
        tedadCounter.innerHTML = --tedadvalue;
        if(tedadvalue == 0){
            tedadInput.innerHTML = "تعداد نفرات";
        }else{
            tedadInput.innerHTML = tedadCounter.innerHTML + " نفر";
        }
    }
});

// modal input

let floatingInput = document.getElementById('floatingInput');
let modalBtn = document.getElementById('modalBtn');


modalBtn.addEventListener('click', function(){
    if(!floatingInput.value.startsWith("09") && !floatingInput.value.length != 11){
        floatingInput.style.border = "2px solid red";
    }else{
        floatingInput.style.border = "1.8px solid #4756b4";
    }
});


// show button
var show = document.getElementById("show");
let hide1 = document.querySelector('.can-hide1');
let hide2 = document.querySelector('.can-hide2');

show.addEventListener('click', function(){
    if (show.innerHTML == "مشاهده کمتر") {
        hide2.classList.toggle('hide');

        if(screen.width < 550){
            hide1.classList.add('hide');
        }

        show.innerHTML = "مشاهده بیشتر";
    }else{
        hide1.classList.remove('hide');
        hide2.classList.toggle('hide');
        show.innerHTML = "مشاهده کمتر";
    }

    
});

let mobileMenu = document.getElementById('mobile-menu-bar');
let lastScrollY1 = window.scrollY;

window.addEventListener('scroll', function() {
    if (window.scrollY - lastScrollY1 >= 40 && window.scrollY >= 150) {
        mobileMenu.style.bottom = '-56px';
        lastScrollY1 = window.scrollY;
    }
});

window.addEventListener('scroll', function() {
    if (lastScrollY1 - window.scrollY >= 40 && window.scrollY >= 150) {
        mobileMenu.style.bottom = '0';
        lastScrollY1 = window.scrollY;
    }
});


