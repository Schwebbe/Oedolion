$(document).ready(function(){
    $("#button").click(function(){
        $(".cover").fadeOut(6000);
    });
});
$(document).ready(function(){
    $("#button").click(function(){
        $(".stars").fadeIn(8000);
    });
});
$(document).ready(function(){
    $("#button").click(function(){
        $(".twinkling").fadeIn(4000);
    });
});
$(document).ready(function(){
    $("#button").click(function(){
        $("#button").fadeOut(1000);
    });
});
$(document).ready(function(){
    $('#button').click(function(){ 
        $('nav').toggleClass("animated fadeInDown animation-delay-10",function(){
            $(this).remove();
        });
    });     
});
//moving loading bar animation
function move() {
    var elem = document.getElementById("loadingBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100){
            //clears id when 100%
            clearInterval(id);
            
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}   

