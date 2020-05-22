window.onload=function(){
    var mfa=document.getElementById("m_fa");
    var windowWidth=$(window).width();
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
}