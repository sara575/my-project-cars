var mySection1 = document.getElementById("Section1"),
    myInput=document.getElementById("num"),
    showPrice = document.getElementById("show"),
    myButton1 = document.getElementById("btu1"),
    myButton2 = document.getElementById("btu2"),
    Complete = document.getElementById("done");
var mySection2 = document.getElementById("Section2"),
    myInput2   =document.getElementById("num2"),
    showPrice2 = document.getElementById("show2"),
    myButton1  = document.getElementById("btu3"),
    myButton2  = document.getElementById("btu4"),
    Complete2 = document.getElementById("done2");
var mySection3 = document.getElementById("Section3"),
    myInput3   =document.getElementById("num3"),
    showPrice3 = document.getElementById("show3"),
    myButton2  = document.getElementById("btu5"),
    myButton3  = document.getElementById("btu6"),
    Complete3 = document.getElementById("done3");
var mySection4 = document.getElementById("Section4"),
    myInput4   =document.getElementById("num4"),
    showPrice4 = document.getElementById("show4"),
    myButton3  = document.getElementById("btu7"),
    myButton4  = document.getElementById("btu8"),
    Complete4 = document.getElementById("done4");
/*ثاني سكشن*/
var mySection5 = document.getElementById("Section5"),
    myInput5   =document.getElementById("num5"),
    showPrice5 = document.getElementById("show5"),
    myButton5  = document.getElementById("btu8"),
    myButton6  = document.getElementById("btu9"),
    Complete5 = document.getElementById("done5");
var mySection6 = document.getElementById("Section6"),
    myInput6   =document.getElementById("num6"),
    showPrice6 = document.getElementById("show6"),
    myButton7  = document.getElementById("btu10"),
    myButton8  = document.getElementById("btu11"),
    Complete6 = document.getElementById("done6");
var mySection7 = document.getElementById("Section7"),
    myInput7   =document.getElementById("num7"),
    showPrice7 = document.getElementById("show7"),
    myButton9  = document.getElementById("btu12"),
    myButton10  = document.getElementById("btu13"),
    Complete7 = document.getElementById("done7");
var mySection8 = document.getElementById("Section8"),
    myInput8   =document.getElementById("num8"),
    showPrice8 = document.getElementById("show8"),
    myButton11  = document.getElementById("btu14"),
    myButton12  = document.getElementById("btu15"),
    Complete8 = document.getElementById("done8");
var dabgo=document.getElementById("Img2");
/*اول سكشن*/
function sale(){
    var price = 2000.5;
    showPrice.innerHTML ="Total:" + myInput.value*price+"g";
}
function ok(){
            mySection1.style.opacity="0.5";
            Complete.innerHTML="Successfully completed!";
            Complete.style.animation="change 2s 5 ease";
}
function clea(){
         mySection1.style.opacity="1";

}
function sale2(){
    var price = 4580;
    showPrice2.innerHTML ="Total:" + myInput2.value*price+"g";
}
function ok2(){
            mySection2.style.opacity="0.5";
            Complete2.innerHTML="Successfully completed!";
            Complete2.style.animation="change 2s 5 ease";
}
function clea2(){
         mySection2.style.opacity="1";

}
function ok3(){
            mySection3.style.opacity="0.5";
            Complete3.innerHTML="Successfully completed!";
            Complete3.style.animation="change 2s 5 ease";
}
function clea3(){
         mySection3.style.opacity="1";

}
function sale3(){
    var price = 4.788;
    showPrice3.innerHTML ="Total:" + myInput3.value*price+"g";
}
function ok4(){
            mySection4.style.opacity="0.5";
            Complete4.innerHTML="Successfully completed!";
            Complete4.style.animation="change 2s 5 ease";
}
function sale4(){
    var price = 2.399;
    showPrice4.innerHTML ="Total:" + myInput4.value*price+"g";
}
function clea4(){
         mySection4.style.opacity="1";

}
/*ثاني سكشن*/
function sale5(){
    var price = 3.399;
    showPrice5.innerHTML ="Total:" + myInput5.value*price+"g";
}
function ok5(){
            mySection5.style.opacity="0.5";
            Complete5.innerHTML="Successfully completed!";
            Complete5.style.animation="change 2s 5 ease";
}
function clea5(){
         mySection5.style.opacity="1";

}
function sale6(){
    var price = 4.600;
    showPrice6.innerHTML ="Total:" + myInput6.value*price+"g";
}
function ok6(){
            mySection6.style.opacity="0.5";
            Complete6.innerHTML="Successfully completed!";
            Complete6.style.animation="change 2s 5 ease";
}
function clea6(){
         mySection6.style.opacity="1";

}
function ok7(){
            mySection7.style.opacity="0.5";
            Complete7.innerHTML="Successfully completed!";
            Complete7.style.animation="change 2s 5 ease";
}
function clea7(){
         mySection7.style.opacity="1";

}
function sale7(){
    var price = 3.884;
    showPrice7.innerHTML ="Total:" + myInput7.value*price+"g";
}
function ok8(){
            mySection8.style.opacity="0.5";
            Complete8.innerHTML="Successfully completed!";
            Complete8.style.animation="change 2s 5 ease";
}
function sale8(){
    var price = 3199;
    showPrice8.innerHTML ="Total:" + myInput8.value*price+"g";
}
function clea8(){
         mySection8.style.opacity="1";

}
