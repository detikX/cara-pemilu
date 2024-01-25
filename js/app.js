$('.all').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.kaca').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(document).ready(function () {
    AOS.init();

})

//maen aos
$("section p, .golongan .img").attr({ "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })
$("section h3").attr({ "data-aos": "zoom-in", "data-aos-delay": "100", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" });

//gsap
gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

const animation = gsap.to(".photo:not(:first-child)", {
    opacity: 1, scale: 1, duration: 1, stagger: 1
})

ScrollTrigger.create({
    trigger: ".gallery",
    start: "top top",
    end: "bottom bottom",
    pin: ".last .right",
    animation: animation,
    scrub: true,
    markers: true
})
