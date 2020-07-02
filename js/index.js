// Slider From Swiper lib

var swiper = new Swiper('.swiper-container', {
    loop: 'true',
    pagination: {
        el: '.swiper-pagination',
        progressBar: 'true',
        clickable: 'true',
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// ScrollMagic

var product_tl = new gsap.timeline();
product_tl.from(".product-card", {
    opacity: 0,
    y: 100,
    ease: Power2,
    duration: .75

});

var monoCtrl = new ScrollMagic.Controller();
var monoScene = new ScrollMagic.Scene({
        triggerElement: ".product-title",
        triggerHook: .01
    })
    .setTween(product_tl)
    .addTo(monoCtrl);


// about page ani
var aboutTL = new gsap.timeline();
aboutTL.from(".btn-fb", {
    opacity: 0,
    y: 100,
    ease: Power2.inOut,
    duration: 1,

});

// controller for about page

var aboutCtrl = new ScrollMagic.Controller();
var aboutScene = new ScrollMagic.Scene({
        triggerElement: "#footer",
        triggerHook: 1
    })
    .setTween(aboutTL)
    .addTo(aboutCtrl);

// controller for porducts

var prodCtrl = new ScrollMagic.Controller();
var prodScene = new ScrollMagic.Scene({
    triggerElement: ".products-title",
    triggerHook: "1"
})
    .setTween(product_tl)
    .addTo(prodCtrl);

// Home ScrollMagic anim

var collTL = new gsap.timeline();
collTL.from(".monograms-kids", {
    opacity: 0,
    ease: Power2.inOut,
    duration: 1
})
    .from(".monograms-weds", {
        opacity: 0,
        ease: Power2.inOut,
        duration: 1
    })
    .from(".monograms-beds", {
        opacity: 0,
        ease: Power2.inOut,
        duration: 1
    })
    .from(".monograms-bath", {
        opacity: 0,
        ease: Power2.inOut,
        duration: 1
    })
var collCtrl = new ScrollMagic.Controller();
var collScene = new ScrollMagic.Scene({
    triggerElement: "#monograms"
})
    .setTween(collTL)
    .addTo(collCtrl);
