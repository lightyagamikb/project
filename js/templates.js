//image slide

var slide = document.getElementsByClassName("slide_img");
var index=0;
slideimg(0);
function slideimg(x){
    setInterval(function(x){

        for (var i=0;i<slide.length;i++){
            slide[i].style.display = "none";
        }
        index++
            if(index == slide.length){
                index=0;
            };
        slide[index].style.display = "block";

    },3000);
};
