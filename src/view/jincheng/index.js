import React,{Component} from "react";
import AnimatedWrapper from "../AnimatedWrapper";
import "./jincheng.css";
import $ from "jquery";
import "./coolShow.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
var ppp=['asdfsa','dsajhfgiohdsagoi','s1234567'];
class  JinchengComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            imgSrc:'',
            name:'trans_fade_image_click',
            pshow:'none',
            content:''
        }
        const Imgsrc=['./img/1.jpg']
    }
    rotate3D = () => {
        let wrap = document.getElementById("wrap")
        var oImg = wrap.getElementsByTagName("img");
        let imgArr = Array.from(oImg)
        var length = imgArr.length;//获取图片个数
        var deg = 360/length;
        imgArr.map((item,index)=>{
            item.style.transform = "rotateY("+deg*index+"deg) translateZ(350px)";
            item.style.transition = " 2s " + (length-1-index)*0.2 + "s";//设置过度动画
            
        })
        var newX,newY,lastX,lastY,minusX,minusY,rotX = -20 ,rotY = 0;
    


        setInterval(()=> {
            rotY+=0.15;
            wrap.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
        },10)
      
    }
//    imgCS=(e)=>{

//         $('#wrap').find('img').on('click',function(){
//             alert(4);
//             $(this).stop();
//             $('#coolShow b').remove();
//             /*     生成图片的载体    */
//             for (var i = 0;i<($("#coolShow").height()/10);i++) $('#coolShow').append('<b></b>');
//             console.log($("#coolShow").height());
//             /*     图片显示特效    */
//             var psn = 0;
//             var imgId = $(this).children().data('img');
//             $('#coolShow b').each(function(){
//                 $(this).css({
//                     opacity:0,
//                     backgroundPosition:"0 "+psn+"px",
//                     backgroundImage:'url("'+options.id+'")'
//                 });
//                 psn -= 10;
//             });
//             var time = 0;
//             $('#coolShow b').each(function(){
//                 $(this).delay(time).animate({opacity:"1"},500);
//                 time += 40;
//             });
//         });
   
//    }



  fadeIn =(props)=>{
    $.fn.coolShow = function(options){
        // alert(1);
		// /*     初始化参数     */
		// var defaults = {
		// 	imgSrc:'',
		// 	speed:50
        // };
	
		 var inita=	function(){
                alert(2);
				$('#wrap').find('img').on('click',function(){
                    alert(4);
					$(this).stop();
					$('#coolShow b').remove();
					/*     生成图片的载体    */
                    for (var i = 0;i<($("#coolShow").height()/10);i++) $('#coolShow').append('<b></b>');
                    console.log($("#coolShow").height());
					/*     图片显示特效    */
					var psn = 0;
					var imgId = $(this).children().data('img');
					$('#coolShow b').each(function(){
						$(this).css({
							opacity:0,
							backgroundPosition:"0 "+psn+"px",
                            backgroundImage:'url("'+options.id+'")'
						});
						psn -= 10;
					});
					var time = 0;
					$('#coolShow b').each(function(){
						$(this).delay(time).animate({opacity:"1"},500);
						time += 40;
					});
				});
			}
        

		/*     代码开始     */
		return this.each(function(){
            alert(3);
			/*     接收传参     */
		
			/*     生成按钮的载体    */
         
			/*     特效开始    */
            inita();
		});
    };
  }

	

    imgShow=(e)=>{  
        this.setState({
            id:e.target.id,
            imgSrc:e.target.src,
            name:'',
            pshow:'block',
            content:ppp[this.state.id]
        }) 
        let ImgSrcs=  e.target.src;
    
            $('#coolShow b').remove();
            /*     生成图片的载体    */
            for (var i = 0;i<($("#coolShow").height()/10);i++) $('#coolShow').append('<b></b>');
            console.log($("#coolShow").height());
            /*     图片显示特效    */
            var psn = 0;
            var imgId = $(this).children().data('img');
            $('#coolShow b').each(function(){
                $(this).css({
                    opacity:0,
                    backgroundPosition:"0 "+psn+"px",
                    backgroundImage:'url("'+ImgSrcs+'")'
                });
                psn -= 10;
            });
            var time = 0;
            $('#coolShow b').each(function(){
                $(this).delay(time).animate({opacity:"1"},500);
                time += 40;
            });
       
        // $('#coolShow').coolShow({
        //     speed: 40,
        //     id:this.state.imgSrc
        // });   
        // alert(6); 
       
}

    componentDidMount(){
        this.rotate3D();
        this.fadeIn();
        $('#coolShow').coolShow({
            speed: 40,
            id:this.state.imgSrc
        });   
    }
    render(){
        return(
            <div id="mainWrap">
                <div id="perspective"    onClick={(e)=>this.imgShow(e)} >
                    <div id="wrap" >
                        <img id="0" alt="" src={img2}></img>
                        <img id="1" alt="" src={img3}></img>
                        <img id="2" alt="" src={img4}></img>
                        <img id="3" alt="" src={img5}></img>
                        <img id="4" alt="" src={img6}></img>
                        <img id="5" alt="" src={img7}></img>
                        <img id="6" alt="" src={img8}></img>
                        <img id="7" alt="" src={img9}></img>
                    </div>
                </div>
                <div id="wrap1" >
                <p style={{display:this.state.pshow}} id="showp">{this.state.content}</p>
                {/* <img id="show" alt="" className={this.state.name} src={this.state.imgSrc}></img> */}
                <div className="main">
                <div id="coolShow"></div>
                <div id="handBar">   
 </div>
   
    </div>

                    </div>
            </div>
        )
    }
}

const Jincheng = AnimatedWrapper(JinchengComponent);
export default  Jincheng;