// JavaScript Document
$ (document).ready(function(e){
	//alert("ya")
	document.addEventListener("deviceready", function(){
	$(' .btn').tap(function(){
	var boton=(($(this).attr('class')).split(' '))[1];
	
	switch (boton)
	{
	case 'b1':
	navigator.notification.beep(1);
	break;
	case 'b2':
	navigator.notification.beep(2);
	break;
	case 'b3':
	navigator.notification.beep(5);
	break;
	case 'v1':
	navigator.notification.vibrate(500);
	break;
	case 'v2':
	navigator.notification.vibrate(300);
		navigator.notification.vibrate(1000);	
	break;
	}
	});
	$('#derecha').swiperight(function(){
		navigator.notification.alert("Desliz&oacute; a la derecha", function(){},"Practica 1","Aceptar");
	});
	},false);
	$('table td').eq(1).text(device.name);
	$('table td').eq(3).text(device.cordova);
	$('table td').eq(5).text(device.plataform);
	$('table td').eq(7).text(device.version);
	$('table td').eq(9).text(device.UUID);
});

//$ (document).ready(function(e){
	//alert("ya")
	//document.addEventListener("deviceready", function(){
//	$('.btn').click(function(){
//	var boton=(($(this).attr('class')).split(' '))[1];
//	alert(boton)
//	});
	//},false);
//});
