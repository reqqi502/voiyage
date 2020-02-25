var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var contentWrapp = document.getElementById("contentWrapp");
var navBar = document.getElementById("navbar");
var myForm = document.getElementById("subform");
var playVid = document.getElementById("playvid");
var closeBtn = document.getElementById("closeBtn");
var vidList = document.querySelectorAll(".thevideo");
playVid.style.display = "none";
var x = 0 ;
for(var v = 0; v<vidList.length;v++){
    vidList[v].addEventListener("click",function(){
        playVid.style.display = "block";
    });
}
closeBtn.addEventListener("click",function(){
    playVid.style.display = "none";
});
prevBtn.addEventListener("click",prevSlid);
nextBtn.addEventListener("click",nextSlid);
window.addEventListener("scroll",stikyNav);
function prevSlid(){
    contentWrapp.scrollLeft = x - 200;
    x = contentWrapp.scrollLeft;
    console.log(1);
}
function nextSlid(){
    contentWrapp.scrollLeft = x +  200;
    x = contentWrapp.scrollLeft;
    console.log(2);

}

function stikyNav(){
    if(window.pageYOffset > 10){
        navBar.classList.add("navwithcolor");
    }else{
        navBar.classList.remove("navwithcolor");
    }
    
}
function submitform(){
    myForm.submit();
}