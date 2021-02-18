$(document).ready(function(){
    $('.header_burger').click(function(e){
        $('.header_burger, nav').toggleClass("active");
        $('body').toggleClass("lock");
    });
});