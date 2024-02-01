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
                slidesToScroll: 1,
                // centerMode: true,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(document).ready(function () {
    AOS.init();
    new WOW().init();
})

//maen aos
$("section p, .golongan .img").attr({ "data-aos": "fade-up", "data-aos-delay": "100", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" })
$("section h3").attr({ "data-aos": "zoom-in", "data-aos-delay": "100", "data-aos-duration": "300", "data-aos-offset": "10", "data-aos-easing": "linear" });

$(".siapa .org").attr({ "data-aos": "fade-left", "data-aos-delay": "100", "data-aos-duration": "700", "data-aos-offset": "10", "data-aos-easing": "linear" });

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
    markers: false,
})

//countdown
// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2024 07:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var jam = ("0" + hours).slice(-2);
    var min = ("0" + minutes).slice(-2);
    var hari = ("0" + days).slice(-2);
    var tik = ("0" + seconds).slice(-2);

    // Output the result in an element with id="demo"
    //   document.getElementById("demo").innerHTML = days + " Hari " + hours + " Jam "
    //   + minutes + " Menit " + seconds + " Detik ";

    $(".day").html(`
    ${hari} <small>Hari</small>
`)
    $(".ho").html(`
    ${jam} <small>Jam</small>
`)
    $(".min").html(`
    ${min} <small>Menit</small>
`)
    $(".sec").html(`
    ${tik} <small>Detik</small>
`)

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("demo").innerHTML = "EXPIRED";

        $("#demo").html(
            `
        <div class="expired"></div>
      `
        )
    }
}, 1000);