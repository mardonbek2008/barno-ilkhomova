var owl = $('.owl-testmonial');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
});

$('.owl-specialist').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

let one = document.querySelector(".button-one")
let two = document.querySelector(".button-two")
let three = document.querySelector(".button-threee")
let img = document.querySelector(".hover-img")
let textone = document.querySelector(".tag-text")
let texttwo = document.querySelector(".teg-mini")

function turon() {
    textone.innerHTML = "Turon Bank"
    texttwo.innerHTML = "2018-yildan Barno Ilhomova Turon  Banki bilan hamkorlik qilishni boshladi."
    img.src = "./assets/img/turon bank logo.png"


}

function kta() {
    textone.innerHTML = "Kattaqo’rg’on hokimligi"
    texttwo.innerHTML = "2022-yilda esa psixolog Andijon viloyatining “Kattaqo’rg’on” tumani bilan hamkorlikni boshladi."
    img.src = "./assets/img/d.png"



}

function uzb() {
    textone.innerHTML = "O’zbekiston telekanali"
    texttwo.innerHTML = "2019-yildan boshlab Barno Ilhomova O’zbekiston telekanali bilan ham hamkorlik qilib, hozirgi kunda “Oydin hayot live” ko’rsatuvida boshlovchi va psixolog bo’lib ish olib boradi."
    img.src = "./assets/img/uzzb.png"

}