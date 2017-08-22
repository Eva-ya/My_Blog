var cv=document.querySelector('canvas');
var context=cv.getContext('2d');
// 画一个方格背景；15*15；
var heng=30;
var su=30;
for(var i=0;i<15;i++){
	context.beginPath();
	context.moveTo(30,su);
	context.lineTo(450,su);
	context.closePath();
	context.stroke();
	su+=30;	
}
for(var i=0;i<15;i++){
	context.beginPath();
	context.moveTo(heng,30);
	context.lineTo(heng,450);
	context.closePath();
	context.stroke();
	heng+=30;	
}





// 每点击一次，在对应的范围内画一个圆形棋子；
    var flag=true;//判断棋子颜色；
    var arrzix=[];//每个棋子的x；
    var arrziy=[];//每个棋子的y；
    var arrzicl=[];//每个棋子的color；
    var arrall=[];//已有棋子的数组；

    cv.onclick=function(ev){
    	var ev=ev||event;
	 	var x=Math.round(ev.clientX/30)*30;
	 	var y=Math.round(ev.clientY/30)*30;
	 	var ifclick=1;//是否放棋子
	 	for(var i=0;i<255;i++){
	 		if(x==arrzix[i]&&y==arrziy[i]){
	 			// alert('不能放在这');
	 			ifclick=0;
	 			break;
	 		}
	 		
	 	}
	 	if(ifclick==1){

	 			arrzix.push(x);
	 	 		arrziy.push(y);
	 	 		context.beginPath();
			 	context.arc(x,y,15,0,360*Math.PI/180);
			    
				if(flag){
			 		context.fillStyle="black";
			 		arrzicl.push(1);
			 		flag=false;
			 	}
				 	
				else{
					context.fillStyle="white";
					arrzicl.push(0);
			 		flag=true;
				} 	
			 		context.closePath();
				 	context.fill();
	 	}
	 			

	 	shuxiang();
	 	hengxiang();

	 	//判断胜负(竖向)
	 	function shuxiang(){
	 			var arrzix_1=[];
			 	var arrziy_1=[];
			 	var arrzicl_1=[];
			 	var arrziy_b=[];
			 	var arrziy_w=[];
			 	for(var i=0;i<arrzix.length;i++){
			 		
			 		if(arrzix[i]==x){
			 			arrzicl_1.push(arrzicl[i]);
			 			arrziy_1.push(arrziy[i]);
			 			
			 		}
			 	}
			 	for(var i=0;i<arrzicl_1.length;i++){
			 		
			 		if(arrzicl_1[i]==1){
			 			arrziy_b.push(arrziy_1[i]);

			 		}
			 		else{
			 			arrziy_w.push(arrziy_1[i])
			 		}
			 	}
			 	arrziy_b.sort(function(a,b){return a-b;})
			 	arrziy_w.sort(function(a,b){return a-b;})
			 	function blackwin(){
			 		var num=1;
				 	for(var i=0;i<arrziy_b.length;i++){
				 		if(arrziy_b[i]==arrziy_b[i+1]-30){
				 			num++;
				 			if(num==5){
				 				alert("black win!!!")
				 			}
				 		}

				 	}
			 	}
			 	function whitewin(){
			 		var num=1;
				 	for(var i=0;i<arrziy_w.length;i++){
				 		if(arrziy_w[i]==arrziy_w[i+1]-30){
				 			num++;
				 			if(num==5){
				 				alert("white win!!!")
				 			}
				 		}

				 	}
			 	}
			 	blackwin();
			 	whitewin();
			 	}
	 	
	 	//判断胜负(横向)
		
 		function hengxiang(){
	 			var arrzix_1=[];
			 	var arrziy_1=[];
			 	var arrzicl_1=[];
			 	var arrzix_b=[];
			 	var arrzix_w=[];
			 	for(var i=0;i<arrziy.length;i++){
			 		
			 		if(arrziy[i]==y){
			 			arrzicl_1.push(arrzicl[i]);
			 			arrzix_1.push(arrzix[i]);
			 			
			 		}
			 	}
			 	for(var i=0;i<arrzicl_1.length;i++){
			 		
			 		if(arrzicl_1[i]==1){
			 			arrzix_b.push(arrzix_1[i]);

			 		}
			 		else{
			 			arrzix_w.push(arrzix_1[i]);

			 		}
			 	}
			 	arrzix_b.sort(function(a,b){return a-b;})
			 	arrzix_w.sort(function(a,b){return a-b;})
			 	function blackwin(){
			 		var num=1;
				 	for(var i=0;i<arrzix_b.length;i++){
				 		if(arrzix_b[i]==arrzix_b[i+1]-30){
				 			num++;
				 			if(num==5){
				 				alert("black win!!!")
				 			}
				 		}

				 	}
			 	}
			 	function whitewin(){
			 		var num=1;
				 	for(var i=0;i<arrzix_w.length;i++){
				 		if(arrzix_w[i]==arrzix_w[i+1]-30){
				 			num++;
				 			if(num==5){
				 				alert("white win!!!")
				 			}
				 		}

				 	}
			 	}
			 	blackwin();
			 	whitewin();
			 	}

			 	//判断胜负(右上左下);
			 	
			 	var num1=30;
			 	 var num2=30;
			 	 var num3=30;
			 	 var num4=30;
			 	yxs_b();
			 	zxx_b();
			 	yxs_w();
			 	zxx_w();
			 	function yxs_b(){
				 	for(var i=0;i<255;i++){
				 	
					 		if((x-arrzix[i])==num1&&(arrziy[i]-y)==num1&&(arrzicl[i]-ifclick)==0){	
					 			
				 								num1+=30;
				 								yxs_b();
					 		}
					 }
				}	 
				
				function zxx_b(){
					for(var i=0;i<255;i++){

					 		if((arrzix[i]-x)==num2&&(y-arrziy[i])==num2&&(arrzicl[i]-ifclick)==0){
					 					 							 			
				 								num2+=30;
				 								zxx_b();
					 		}
					 }
				}
				function yxs_w(){
				 	for(var i=0;i<255;i++){
				 	
					 		if((x-arrzix[i])==num3&&(arrziy[i]-y)==num3&&(arrzicl[i]-ifclick)==-1){	
					 			
				 								num3+=30;
				 								yxs_w();
					 		}
					 }
				}	 
				
				function zxx_w(){
					for(var i=0;i<255;i++){

					 		if((arrzix[i]-x)==num4&&(y-arrziy[i])==num4&&(arrzicl[i]-ifclick)==-1){
					 					 							 			
				 								num4+=30;
				 								zxx_w();
					 		}
					 }
				}
				var numb=num1+num2;
				var numw=num3+num4;

				if(numb>=180&&arrzicl[arrzicl.length-1]==1){
						alert('blackwin!!')
				}	
				if(numw>=180&&arrzicl[arrzicl.length-1]==0){
						alert('whitewin!!')
				} 
				//判断胜负(左上右下);
			 	
			 	var num5=30;
			 	 var num6=30;
			 	 var num7=30;
			 	 var num8=30;
			 	yxs_bb();
			 	zxx_bb();
			 	yxs_ww();
			 	zxx_ww();
			 	function yxs_bb(){
				 	for(var i=0;i<255;i++){
				 	
					 		if((arrzix[i]-x)==num5&&(arrziy[i]-y)==num5&&(arrzicl[i]-ifclick)==0){	
					 			
				 								num5+=30;
				 								yxs_bb();
					 		}
					 }
				}	 
				
				function zxx_bb(){
					for(var i=0;i<255;i++){

					 		if((x-arrzix[i])==num6&&(y-arrziy[i])==num6&&(arrzicl[i]-ifclick)==0){
					 					 							 			
				 								num6+=30;
				 								zxx_bb();
					 		}
					 }
				}
				function yxs_ww(){
				 	for(var i=0;i<255;i++){
				 	
					 		if((arrzix[i]-x)==num7&&(arrziy[i]-y)==num7&&(arrzicl[i]-ifclick)==-1){	
					 			
				 								num7+=30;
				 								yxs_ww();
					 		}
					 }
				}	 
				
				function zxx_ww(){
					for(var i=0;i<255;i++){

					 		if((x-arrzix[i])==num8&&(y-arrziy[i])==num8&&(arrzicl[i]-ifclick)==-1){
					 					 							 			
				 								num8+=30;
				 								zxx_ww();
					 		}
					 }
				}
				var numbb=num5+num6;
				var numww=num7+num8;

				if(numbb>=180&&arrzicl[arrzicl.length-1]==1){
						alert('blackwin!!')
				}	
				if(numww>=180&&arrzicl[arrzicl.length-1]==0){
						alert('whitewin!!')
				} 
	 }
// 创建每个棋子坐标，颜色的数组arrzi；
//var arrzi=[];

// 创建一个数组arrall，获取所有arrzi；
// 每放一个子，对arrzi进行判断；



