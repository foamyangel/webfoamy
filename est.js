
alert("dddddf");
$( document ).ready(function() {
	//alert("dddduyiiuidf");
	
$("#box").hover(
    function (){
        $(this).animate({ 'width': "400px", "height" : "400px"});
        $("#int").css(

        	{"color": "#ffffff"}
        	);
        $("#int2").css(
        	{"display": "inline"}
        	);
   // $("int").css({"display": "none"});
        },
    
    function (){

        $(this).animate({ 'width': "100px", "height" : "110px"});
        $("#int").css(

        	{"display": "inline"}
        	);

        $("#int2").css(

            {"display": "none"}
            );
    }
);

$("#").hover(
    function (){
        $(this).animate({ 'width': "400px", "height" : "400px"});
    },
    function (){
        $(this).animate({ 'width': "150px", "height" : "150px"});
    }

);



});