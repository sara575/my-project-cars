
var sliderImg = document.querySelectorAll(".slider-items .item");
var i=0;
var x = setInterval(function(){
    sliderImg[i].classList.add("active");
        i++;
    if(i==sliderImg.length){
        clearInterval(x);
    }
        
},1000)

/*
var sliderImg = document.querySelectorAll(".slider-items img");
var sliderImgNumber = sliderImg.length;
var sliderNumber = 1;
var buttonPrev = document.getElementById("prev"); 
function next(){
     sliderNumber++;
    sliderImg[sliderNumber-1].classList.add("active");
}
function prev(){
    sliderNumber--;    
    sliderImg[sliderNumber-1].classList.remove("active");    
}

function removeAll(){
    sliderImg.forEach(function(img){
        img.classList.remove("active");
    })
}
function check(){
    sliderImg[currentSlider-2].classList.add("active");
if(currentSlider==6){
    buttonNext.style.backgroundColor="rgba(10,30,50,50%)";
    buttonNext.style.cursor="no-drop";
}
    else{
        buttonNext.style.backgroundColor="blue";
        buttonNext.style.cursor="pointer";
    }
}
*/



0