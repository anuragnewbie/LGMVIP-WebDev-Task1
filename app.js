let photos = ["images/nature1.jpg","images/animal1.jpg", "images/nature2.jpg", "images/nature5.jpg", "images/nature6.jpg",
              "images/animal2.jpg", "images/animal3.jpg", "images/plant2.jpg", "images/animal4.jpg", "images/plant1.jpg", 
              "images/animal5.jpg", , "images/plant3.jpg","images/plant5.jpg", "images/plant6.jpg", "images/bird2.jpg", 
              "images/bird3.jpg", "images/bird4.jpg", "images/bird6.jpg", "images/nature7.jpg", "images/animal6.jpg"];

$(document).ready(function(){
    photos.forEach((photo)=>{
        $('.bxslider').append("<li> <img src='" + photo + "' alt='nature images' /></li>");
    });
    $('.bxslider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
        controls: false,
        easing: 'ease-in',
        speed: 2000
    });
});
