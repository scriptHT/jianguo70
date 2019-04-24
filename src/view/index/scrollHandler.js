const scrollHandler =function() {
let avatars = document.getElementsByClassName('avatar');
const avaW = window.getComputedStyle(avatars[0]).getPropertyValue("width");
const arr = [];
arr.push(avaW);
// console.log(arr)
let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
let scrollWidth = document.body.clientWidth;
let articleHeight = document.getElementById("artical1").clientHeight-100;
let carousel = document.getElementsByClassName("ant-carousel")[0];
let card1 = document.getElementsByClassName("card1")[0];
let mainTitle = document.getElementById('mainTitle');
let remCollapse = document.getElementsByClassName("remCollapse")[0];
let powerCard2 = document.getElementsByClassName('powerCard2');
let txts = document.getElementsByClassName('txt');
let sec2Card = document.getElementsByClassName('sec2Card');
if(scrollTop < 50 && scrollWidth >767){
    mainTitle.style.left="25%";
    carousel.style.opacity="0";
    carousel.style.left="25%";
    card1.style.right="50%";
    card1.style.opacity="1"; 
}else if(scrollTop > 150){
    mainTitle.style.left="-400px";
}
if(scrollTop > articleHeight && scrollTop < articleHeight*2){
    if(carousel || card1){
    carousel.style.opacity="1";
    carousel.style.left="0%";
    card1.style.right="5%";
    card1.style.opacity="1"; 
    }     
}else if(scrollTop > articleHeight*2){
    this.Jincheng.rotate3D();
    this.Jincheng.rotate3D=function(){};
    carousel.style.opacity="0";
    carousel.style.left="25%";
    card1.style.right="50%";
    card1.style.opacity="1"; 
}
//remember
if(scrollTop > articleHeight*4 ){
    remCollapse.style.opacity = "1";
    // card3.style.opacity = "1";
}else if(scrollTop < articleHeight*4 ){
    remCollapse.style.opacity = "0";
    // card3.style.opacity = "0";
}
if(scrollTop < articleHeight*3 || scrollTop > articleHeight*4){
        Array.from(powerCard2).map((item,index)=>{
            item.style.backgroundColor="rgba(255,255,255,0.4)";
        })
        Array.from(avatars).map((item,index)=>{
            item.style.top="200px";
            item.style.width = item.style.height=arr[0];
            avatars[index].style.opacity="0";
        })
        Array.from(txts).map((item,index)=>{
            item.style.top="550px";
            item.style.opacity='0';
        }) 
        Array.from(sec2Card).map((item,index)=>{
            item.style.height="0";
            item.style.backgroundColor="rgba(255,255,255,0.4)";
        })
    }else {
        Array.from(sec2Card).map((item,index)=>{
            sec2Card[index].style.height="600px";
            avatars[index].style.opacity="1";
        })

    }
}
export default scrollHandler