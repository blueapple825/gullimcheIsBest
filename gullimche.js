function gullimche(){
    var tags=document.querySelectorAll("*");
    for(var i=0;i<tags.length;i++){
        tags[i].style.fontFamily="굴림체";
    }
}

setInterval(gullimche,500)
