setTimeout(function(){
    $('.cover').removeClass('cover').fadeOut(500);
},155000);

function move() {
    var elem = document.getElementById("loadingBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100){
            clearInterval(id);
            
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}   

