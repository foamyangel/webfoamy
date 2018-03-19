$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 150){
			if(!flag){
				

				$("nav").css({"background": "rgba(0,0,0,.8)"});
				$("nav:hover").css({"background": "rgba(0,0,0,.6)"});
				$("nav").css({"width": "97%"});
				$("nav").css({"margin-top": "0px"});
				$("nav").css({"margin-left": "15px"});
			    $("nav").css({"position": "fixed"});
			    $("#otro").css({"display": "none"});

				flag = true;
			}
		}
		else{
			if(flag){
				
				$("nav").css({"background": "rgba(0,0,0,1)"});
				$("nav").css({"width": "97%"});
				$("nav").css({"margin-left": "15px"});
				$("nav").css({"margin-top": "0px"});
				$("#particles-js").css({"margin-top": "85px"});
				$("#bienvenidos2").css({"margin-top": "40px"});
				$("#otro").css({"display": "inherit"});
			
				
				flag = false;
			}
		}
    
      
	});

});



function cambiar_color_over(celda){ 
	
   celda.style.backgroundColor="rgba(49, 44, 255, 0.5)" 
} 
function cambiar_color_out(celda){ 
	
   celda.style.backgroundColor= "rgba(188, 53, 255, 0.5)"
}; 

function cambiar_color_1(celda){ 
	
   celda.style.backgroundColor= "rgba(0, 0, 0, 0.7)";
}; 

function cambiar_color_2(celda){ 
	
   celda.style.backgroundColor= "transparent";
}; 



function cambiar_fondoE() {
                obj = document.getElementById('colorNav');
                obj.style.backgroundColor = (obj.style.backgroundColor == 'rgba(204, 204, 204)') ? 'transparent' : '#000000';
            }

function cambiar_fondo() {
                obj = document.getElementById('colorNav');
                obj.style.backgroundColor = (obj.style.backgroundColor == 'rgba(204, 204, 204)') ? 'transparent' : '#401989';
            }


