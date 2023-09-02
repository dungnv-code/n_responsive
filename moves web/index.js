
var imgs = [
    { img: './img/1.jfif', title: 'NARUTO' },
    { img: './img/2.jfif', title: 'ONEPIECE' },
    { img: './img/3.jfif', title: 'KIEM HIEP' },
    { img: './img/4.jfif', title: 'HARRY BOTTER' },
    { img: './img/5.jfif', title: 'HANH DONG' },
    { img: './img/6.jfif', title: 'MAT BIEC' },
    { img: './img/7.jfif', title: 'VE NHA DI CON' },
    { img: './img/8.jfif', title: 'UNIVERSE MAVER' },
]

$(document).ready(function () {
    var count = 0;
    $('.next').click(function () {
        count++;

        $('div.box-content')[0].style.display = 'none';
        $('div.box-content').slideDown("slow");
        if (count == imgs.length) {
            count = 0;
            $('h2.title').text(imgs[count].title)
            $('img.img-move')[0].src = imgs[count].img;
        }
        $('img.img-move')[0].src = imgs[count].img;
        $('h2.title').text(imgs[count].title)
    })
    $('.prev').click(function () {
        count--;
        $('div.box-content')[0].style.display = 'none';
        $('div.box-content').slideDown("slow");
        if (count == -1) {
            count = imgs.length - 1;
            $('img.img-move')[0].src = imgs[count].img;
            $('h2.title').text(imgs[count].title)
        }
        $('img.img-move')[0].src = imgs[count].img;
        $('h2.title').text(imgs[count].title)
        console.log(count);
    })

    $("#owl").owlCarousel({
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        //Autoplay
        autoPlay: 3000,
        goToFirst: true,
        goToFirstSpeed: 1000,
        // Navigation
        navigation: false,
        navigationText: ["prev", "next"],
        pagination: false,
        paginationNumbers: false,
        // Responsive
        responsive: true,
        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });


    $(".latest-fiml").owlCarousel({
        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        //Autoplay
        autoPlay: 3000,
        goToFirst: true,
        goToFirstSpeed: 1000,
        // Navigation
        navigation: true,
        navigationText: ["<-", "->"],
        pagination: false,
        paginationNumbers: false,
        // Responsive
        responsive: true,
        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });

})