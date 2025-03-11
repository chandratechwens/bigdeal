document.addEventListener("DOMContentLoaded", function () {
    const toggleHamburger = document.querySelector('.toggle-hamburger');
    const mbContainer = document.querySelector('.mb-container');
    const tgl = document.querySelector('.tgl');

    if (toggleHamburger && mbContainer && tgl) {
        toggleHamburger.addEventListener('click', function () {
            mbContainer.classList.add('open-menu');
        });

        tgl.addEventListener('click', function () {
            mbContainer.classList.remove('open-menu');
        });
    }

});






$(document).ready(function () {
    $(".commercial-slider").owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        items: 1,
        autoplay: false,
        autoPlaySpeed: 500,
        autoplayTimeout: 5000,
        dots: true,
    });
});



$(document).ready(function () {
    $(".commercial-tab").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true
    });

    $(".tab-item").each(function () {
        var $this = $(this);
        $this.find(".space-tabs button").on("click", function (e) {
            e.preventDefault();
            var target = $(this).attr("data-bs-target");

            $this.find(".tab-pane").removeClass("show active");
            $this.find(target).addClass("show active");

            $this.find(".space-tabs button").removeClass("active");
            $(this).addClass("active");
        });
    });
});



$(document).ready(function () {
    $(".services-slider").owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        autoplay: false,
        autoplaySpeed: 500,
        autoplayTimeout: 5000,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1400: {
                items: 4
            },
            992: {
                items: 3
            }
        }
    });
});





// Rating-Slider
const slider = document.getElementById("rating-slider");
const sliderValue = document.getElementById("slider-value");

function updateSliderValue() {
    const value = slider.value;
    sliderValue.textContent = value + "★";
    const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
    sliderValue.style.left = `calc(${percent}% - 10px)`;
}

slider.addEventListener("input", updateSliderValue);
updateSliderValue();
