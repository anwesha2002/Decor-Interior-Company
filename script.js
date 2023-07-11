// JavaScript Document
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var plus1 = document.getElementById("plus1");
var plus2 = document.getElementById("plus2");
var plus3 = document.getElementById("plus3");
var plus4 = document.getElementById("plus4");

	
	plus1.addEventListener("click",function(){
	card1.classList.toggle('flipcard');
});
plus2.addEventListener("click",function(){
	card2.classList.toggle('flipcard');
});
plus3.addEventListener("click",function(){
	card3.classList.toggle('flipcard');
});
plus4.addEventListener("click",function(){
	card4.classList.toggle('flipcard');
});

$(document).ready(function(){
	$("#living").click(function(){
		$("#livingroom").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu").click(function(){
		$("#livingroom").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#bed").click(function(){
		$("#bedroom").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu").click(function(){
		$("#bedroom").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#kitchen").click(function(){
		$("#kit").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu").click(function(){
		$("#kit").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#bath").click(function(){
		$("#bathroom").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu").click(function(){
		$("#bathroom").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#res_mode").click(function(){
		$("#modern1").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu").click(function(){
		$("#modern1").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#res_trad").click(function(){
		$("#trad1").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu").click(function(){
		$("#trad1").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#com_trad").click(function(){
		$("#trad2").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu1").click(function(){
		$("#trad2").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#com_mod").click(function(){
		$("#modern2").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu1").click(function(){
		$("#modern2").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#hos_mod").click(function(){
		$("#modern3").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu2").click(function(){
		$("#modern3").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#hos_trad").click(function(){
		$("#trad3").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu2").click(function(){
		$("#trad3").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#out_trad").click(function(){
		$("#trad4").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu3").click(function(){
		$("#trad4").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#out_mod").click(function(){
		$("#modern4").slideDown("slow");
	});
});
$(document).ready(function(){
	$("#dropdownmenu3").click(function(){
		$("#modern4").slideUp("slow");
	});
});
$(document).ready(function(){
	$("#image").waypoint(function(direction){
		$("#image").addClass('animate__animated animate__slideInLeft');
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$(".head-para").waypoint(function(direction){
		$(".head-para").addClass('animate__animated animate__slideInRight')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#img1>div").waypoint(function(direction){
		$("#img1>div").addClass('animate__animated animate__rotateInDownLeft')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#img2>img").waypoint(function(direction){
		$("#img2>img").addClass('animate__animated animate__rotateInUpRight')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#img3>div").waypoint(function(direction){
		$("#img3>div").addClass('animate__animated animate__rotateInDownLeft')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#why_us").waypoint(function(direction){
		$("#why_us").addClass('animate__animated animate__fadeInRight')
	},{
		offset : "50%"
	});
});
/*$(document).ready(function(){
	$("#card1").waypoint(function(direction){
		$("#card1").addClass('animate__animated animate__slideInDown')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#card2").waypoint(function(direction){
		$("#card2").addClass('animate__animated animate__fadeInUp')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#card3").waypoint(function(direction){
		$("#card3").addClass('animate__animated animate__slideInDown')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#card4").waypoint(function(direction){
		$("#card4").addClass('animate__animated animate__fadeInUp')
	},{
		offset : "50%"
	});
});*/
$(document).ready(function(){
	$("#founders .desc").waypoint(function(direction){
		$("#founders .desc").addClass('animate__animated animate__fadeInRight')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#founders .card").waypoint(function(direction){
		$("#founders .card").addClass('animate__animated animate__fadeIn')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$("#services .card").waypoint(function(direction){
		$("#services .card").addClass('animate__animated animate__rotateIn')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$(".heading>h6").waypoint(function(direction){
		$(".heading>h6").addClass('animate__animated animate__bounceInLeft')
	},{
		offset : "50%"
	});
});
$(document).ready(function(){
	$(".heading>h4").waypoint(function(direction){
		$(".heading>h4").addClass('animate__animated animate__bounceInRight')
	},{
		offset : "50%"
	});
});
