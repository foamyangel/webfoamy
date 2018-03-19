/*$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				

				$("nav").css({"background": "rgba(0,0,0,.8)"});
				$("nav").css({"width": "97%"});
				$("nav").css({"margin-top": "0px"});
				$("nav").css({"margin-left": "15px"});
			    $("nav").css({"position": "absolute"});
			    $("#otro").css({"display": "none"});

				flag = true;
			}
		}
		else{
			if(flag){
				
				$("nav").css({"background": "rgba(0,0,0,.8)"});
				$("nav").css({"width": "97%"});
				$("nav").css({"margin-left": "15px"});
				/*$("nav").css({"margin-top": "185px"});
				$("#otro").css({"display": "inherit"});
			
				
				flag = false;
			}
		}
    
      
	});

});*/

$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			/*if(!flag)*/{
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("nav").css({"background": "rgba(0,0,0,0.8"});
				$("nav").css({"margin-top": "50px"});
				$("nav").css({"position": "fixed"});
				$("nav").css({"z-index": "100"});
				$("#otro").css({"display": "none"});

				
				/*flag = true;*/ 
			}
		}else{
			/*if(flag)*/{
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});
                $("#particles-js").css({"margin-top": "115px"}); 
				$("nav").css({"background": "rgba(0,0,0,0.8)"});
				$("nav").css({"margin-left": "15px"});
				$("#otro").css({"display": "inherit"});
				/*flag = false;*/
				
			}
		}


	});

});