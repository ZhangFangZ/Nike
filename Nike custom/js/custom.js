window.onload=function(){
    var mfa=document.getElementById("m_fa");
    var windowWidth=$(window).width();
    var scrollTop=document.documentElement.scrollTop;
console.log(scrollTop)
    if(windowWidth>=768){
        mfa.onmouseenter=function(){
            this.style.height="420px";
        }
        mfa.onmouseleave=function(){
            this.style.height="192px"
        }
    }else{
       for(var i=0;i<4;i++){
        mfa.children[i].onclick=function(){
           if(this.lastChild.style.display=="block"){
               this.lastChild.style.display="none"
           }else{
               this.lastChild.style.display="block"
           }
         }
         
       }
    }

    if(scrollTop>122){
    document.getElementsByClassName("main_top")[0].style.top="0"
}else{
    document.getElementsByClassName("main_top")[0].style.top="114px"
}
}