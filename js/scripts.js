$(document).ready(function(){
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#signupButton').click(function(){
        $('#signupModal').modal('show');
    });
    $(".img-fluid").addClass("wow fadeIn z-depth-1-half");
    new WOW().init();
});