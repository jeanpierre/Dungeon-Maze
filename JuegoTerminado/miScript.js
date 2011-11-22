//variales de mi heroe
	var seleccion=false;	
    var attack = 0;
	var defense = 0;	
	var damage = 0;
	var life = 0;
	var nick="";
	var nombre="";	
	var miheroe=0;
	
//variables de los enemigos

	var monsterAttack = 0;
	var monsterDefense = 0;	
	var monsterDamage = 0;
	var monsterLife = 0;
	
	
//variables lanzar dado
	var dicex=30;
	var dicey=30;
	var dicewidth=60;
	var diceheight=60;
	var dotrad=4;
	var ctx;
	var dx=100;
	var dy=100;
	var sum=0;
	
//variables mensajes	
	var ganaste="Ganaste!!! Fue todo para él";
	var perdiste="Game Over";
	
//posicion inicial de mi personaje
	var x_personaje=0;
	var y_personaje=0;	
		
//posicion inicial de los skulls
	var y_1 = 100;
	var x_1 = 300;
	var y_2 = 400;
	var x_2 = 250;
	var y_3 = 300;
	var x_3 = 500;
	var x_4=-1000;
	var y_4=-1000;
	var y_5=-1000;
	var x_5=-1000;
		
//posicion inicial de la llave, monedas		
	var x_llave=750;
	var y_llave=10;	
	var gold1_x=0;
	var gold1_y=200;
	var gold2_x=200;
	var gold2_y=350;
	var gold3_x=600;
	var gold3_y=150;
	var gold4_x=400;
	var gold4_y=200;
	var gold5_x=300;
	var gold5_y=50;
		
//sumador de skulls para nivel 2 y 3
	var showSkull=4;
	
//variable para el puntaje 
	var puntaje=0;		
		
//validar campos de la intro	
	function validar(campo1,campo2)
	{		
		validarCampo(campo1,campo2);	
		return false;
	};
	
	function validarCampo(input_id1,input_id2)
	{
		$(input_id1).next().hide();
		$(input_id2).next().hide();		
        if ($(input_id1).val() == "") {
          $(input_id1).next().fadeIn('slow', function() {
					
      });			
        }if($(input_id2).val() == ""){
		$(input_id2).next().fadeIn('slow', function() {
    
      });		
		}if($(input_id1).val() != "" && $(input_id2).val() != ""){
		nombre=$(input_id1).val();
		nick=$(input_id2).val()
		$("#container1").hide("fast");
		$("#container2").show("slow");
		setDatos();
		enemigoDatos();
		}       
    };
	function setDatos()
	{	
		var datos=nick+" ("+nombre+") ";
		$(".miniImagen").css({'background-image': 'url(imagenes/mini'+miheroe+'.jpg)'});
		$("#setDatos").text(datos);		
		$(".setAttack").text("Attack: "+attack);
		$(".setDefense").text("Defense: "+defense);
		$('.setDamage').text("Damage: "+damage);
		$('.setLife').text("Life: "+life);
		$("#setPoints").text("Points: "+0);		
	}
	function enemigoDatos()
	{
		var random = Math.floor(Math.random()*2);
		switch(random)
		{
		case 0: //ogro
		$("#enemigoImage").css({'background-image': 'url(imagenes/miniOgro.jpg)'});		
		monsterAttack = 10;
		monsterDefense = 12;	
		monsterDamage = 10;
		monsterLife = 20;		
		$("#enemigoAttack").text("Attack: "+monsterAttack);
		$("#enemigoDefense").text("Defense: "+monsterDefense);
		$('#enemigoDamage').text("Damage: "+monsterDamage);
		$('#enemigoLife').text("Life: "+monsterLife);
		break;
		case 1: //goblin
		$("#enemigoImage").css({'background-image': 'url(imagenes/miniGoblin.jpg)'});
		monsterAttack = 5;
		monsterDefense = 10;	
		monsterDamage = 5;
		monsterLife = 10;			
		$("#enemigoAttack").text("Attack: "+monsterAttack);
		$("#enemigoDefense").text("Defense: "+monsterDefense);
		$('#enemigoDamage').text("Damage: "+monsterDamage);
		$('#enemigoLife').text("Life: "+monsterLife);
		break;
			
		}

	}
	
	
//seleccion del personaje	
$(document).ready(function() 
{	$("#enfrentamiento").hide();

	$('#atacar').hide();
	$('#siguiente').hide();
	$("#container2").hide();
	$("#info").corner();
	$("#caracteristicas").corner();	
	$("#skull4").hide();
	$("#skull5").hide();
	
	 $(".personaje").click(function()
	  {
		$('#siguiente').show();
	   });
	   
	
		function default1(){
		$("#guerrero").css({'border': '2px solid black'});
		$("#clerigo").css({'border': '2px solid black'});
		$("#valkiria").css({'border': '2px solid black'});
		$("body").css({'background-repeat': 'no-repeat'});
		seleccion = false;
	}
	
	function seleccionado(personaje_id)
	{	$(personaje_id).css({'border':'red 2px solid'});		
	}
	
	$("#guerrero").click(function()
	{
	default1();
	 if(seleccion == false)
	 {
		seleccionado("#guerrero");
		$("#container1").css({'background-image': 'url(imagenes/castillo.jpg)'});
		$("#caracteristicas").css({'visibility':'visible'});
		$("#info").css({'visibility':'visible'});
		attack = 10;
		defense = 14;
		damage = 15;
		life = 100;		
		$("#attack").text("Attack: "+attack);
		$("#defense").text("Defense: "+defense);
		$("#damage").text("Damage: "+damage);
		$("#life").text("Life: "+life);	
		miheroe=1;		
		seleccion = true;
	 }
	});
	
	$("#clerigo").click(function()
	{
	default1();
	 if(seleccion == false)
	 {		
	    seleccionado("#clerigo");	
		$("#container1").css({'background-image': 'url(imagenes/magia.jpg)'});		
		attack = 5;
		defense = 16;
		damage = 5;
		life = 150;		
		$("#attack").text("Attack: "+attack);
		$("#defense").text("Defense: "+defense);
		$("#damage").text("Damage: "+damage);
		$("#life").text("Life: "+life);	
		$("#caracteristicas").css({'visibility':'visible'});
		$("#info").css({'visibility':'visible'});
		miheroe=2;
		seleccion = true;
	 }		
	});
	
	$("#valkiria").click(function()
	{	
	default1();
	 if(seleccion == false)
	 {
		seleccionado("#valkiria");
		$("#container1").css({'background-image': 'url(imagenes/bosque.jpg)'});		
		attack = 10;
		defense = 12;
		damage = 20;
		life = 50;		
		$("#attack").text("Attack: "+attack);
		$("#defense").text("Defense: "+defense);
		$("#damage").text("Damage: "+damage);
		$("#life").text("Life: "+life);
		$("#caracteristicas").css({'visibility':'visible'});
		$("#info").css({'visibility':'visible'});
		miheroe=3;
		seleccion = true;
	 }		
	});	
	

});
$("#container1").corner();

//Atacar al enemigo
var finalAttack=0;
function atacarEnemigo()
{
	finalAttack=attack+sum;	
	if(finalAttack>monsterDefense){
		monsterLife=monsterLife-damage;
		$('#enemigoLife').text("Life: "+monsterLife);
	}
	if(finalAttack>monsterDefense && monsterLife-damage<=0){
	alert(ganaste);

	enemigoDatos();
	$("#main").show();
	$("#enfrentamiento").hide();
	
	
	
	}
	
	
	atacarHeroe();
	$('#lanzarDados').show();
	$('#atacar').hide();
}
//Ataque del enemigo

function atacarHeroe(){
	
	finalAttack=monsterAttack+sum;	
	if(finalAttack>defense && life-monsterDamage<=0){
	alert(perdiste);
	window.location="index.html";	
	}
	if(finalAttack>defense){
		life=life-monsterDamage;
		$('.setLife').text("Life: "+life);
	}

}

//movimiento de mi personaje

function moverPersonaje(direccion)
{
switch(direccion.keyCode)
	{
		case 38:				
      	if (y_personaje < 10) y_personaje = 10;
			y_personaje-=10;
			document.getElementById("image").style.top=String(y_personaje)+"px";
			moverEnemigos(x_1,y_1,1);
			moverEnemigos(x_2,y_2,2);
			moverEnemigos(x_3,y_3,3);
			moverEnemigos(x_4,y_4,4);
			moverEnemigos(x_5,y_5,5);
			
			break;
		case 37:
		if (x_personaje < 10) x_personaje= 10;
			x_personaje-=10;
			document.getElementById("image").style.left=String(x_personaje)+"px";
			moverEnemigos(x_1,y_1,1);
			moverEnemigos(x_2,y_2,2);
			moverEnemigos(x_3,y_3,3);
			moverEnemigos(x_4,y_4,4);
			moverEnemigos(x_5,y_5,5);
			
			break;
		case 40:
		if (y_personaje> 420) y_personaje = 420;
			y_personaje+=10;
			document.getElementById("image").style.top=String(y_personaje)+"px";
			moverEnemigos(x_1,y_1,1);
			moverEnemigos(x_2,y_2,2);
			moverEnemigos(x_3,y_3,3);
			moverEnemigos(x_4,y_4,4);
			moverEnemigos(x_5,y_5,5);
			
			break;
		case 39:
		if (x_personaje> 740) 
			x_personaje= 740; 
			x_personaje+=10;
			document.getElementById("image").style.left=String(x_personaje)+"px";
			moverEnemigos(x_1,y_1,1);
			moverEnemigos(x_2,y_2,2);
			moverEnemigos(x_3,y_3,3);
			moverEnemigos(x_4,y_4,4);
			moverEnemigos(x_5,y_5,5);
			
			break;
	}		

	choque(x_1,y_1,'enemigo',50,1,1);
	choque(x_llave,y_llave,'llave',50,1,1);
	choque(x_2,y_2,'enemigo',50,1,2);
	choque(x_3,y_3,'enemigo',50,1,3);
	choque(x_4,y_4,'enemigo',50,1,4);
	choque(x_5,y_5,'enemigo',50,1,5);
	
	choque(gold1_x,gold1_y,'puntaje',30,1,1);
	choque(gold2_x,gold2_y,'puntaje',30,2,1);
	choque(gold3_x,gold3_y,'puntaje',30,3,1);
	choque(gold4_x,gold4_y,'puntaje',30,4,1);
	choque(gold5_x,gold5_y,'puntaje',30,5,1);
}
		
//movimiento enemigos


function setx_1(x){x_1=x;}
function sety_1(y){y_1=y;}
	
function setx_2(x){x_2=x;}
function sety_2(y){y_2=y;}	
	
function setx_3(x){x_3=x;}
function sety_3(y){y_3=y;}
	
function setx_4(x){x_4=x;}
function sety_4(y){y_4=y;}	

function setx_5(x){x_5=x;}
function sety_5(y){y_5=y;}	


function moverEnemigos(x,y,i)
{		
	if(Math.sqrt(Math.pow((x-x_personaje),2))>Math.sqrt(Math.pow((y-y_personaje),2))){
		if((x-x_personaje)>0){
		x=x-10;
		}else
		{x=x+10;
		}
		if(i==1)
		{setx_1(x);
		}
		else if(i==2)
		{setx_2(x);
		}
		else if(i==3){
		setx_3(x);
		}
		else if(i==4){
		setx_4(x);
		
		}
		else 
		{setx_5(x);
		}
		$("#skull"+i).css({"top":y+"px"});
		$("#skull"+i).css({"left":x+"px"});
		}else
		{
		if((y-y_personaje)>0)
		{
		y=y-10;	
		}else
		{
		y=y+10;
		}
		if(i==1)
		{
		sety_1(y);
		}
		else if(i==2)
		{
		sety_2(y);
		}
		else if(i==3)
		{
		sety_3(y);
		}
		else if(i==4)
		sety_4(y);
		else
		{
		sety_5(y);
		}
		$("#skull"+i).css({"top":y+"px"});
		$("#skull"+i).css({"left":x+"px"});		
		}
	}
	
	//matar enemigo
	function matarEnemigo(j)
{

	switch(j){
	
	case 1:
				$("skull"+j).hide();
				x_1=-10000;
				y_1=-10000;
				break;
	case 2:	
				$("skull"+j).hide();
				x_2=-10000;
				y_2=-10000;				
				break;
	case 3:
				$("skull"+j).hide();
				x_3=-10000;
				y_3=-10000;
				break;
	case 4:	
				$("skull"+j).hide();
				x_4=-1000;
				y_4=-1000;
				break;
	case 5:
				$("skull"+j).hide();
				x_5=-10000;
				y_5=-10000;
				break;

	}
	
	}
	
	
//comer moneda
function comerMoneda(i)
{

	switch(i){
	
	case 1:
				gold1_x=-300;
				gold1_y=-300;
				break;
	case 2:	
				gold2_x=-300;
				gold2_y=-300;				
				break;
	case 3:
				gold3_x=-300;
				gold3_y=-300;
				break;
	case 4:	
				gold4_x=-300;
				gold4_y=-300;
				break;
	case 5:
				gold5_x=-300;
				gold5_y=-300;
				break;

	}
}
// choque de personajes
var numNivel=2;		

function showGold(){
$("#gold1").show();
$("#gold2").show();
$("#gold3").show();
$("#gold4").show();
$("#gold5").show();
}


function choque(x,y,personaje,diferencia,i,j)
{
	
	
	var  enemigo="Enfrentamiento";
	var  nivel="Pasaste al Nivel "+numNivel+"!!";
	var  llave="llave";
	var  gold="puntaje";
	if((x_personaje==(x+diferencia))&&((y>=y_personaje-diferencia)&&(y<=y_personaje+diferencia))){
		if( personaje==llave)
		{
		if(numNivel==4){
			alert("Ganasteeee!!!! Tu puntaje fue  "+puntaje )
			window.location="index.html";
			}
		if(numNivel==3){
			x_5 = 700;
			y_5= 400;	
				
			}		
			$("#llave").hide();
			if(numNivel<4)
				alert(nivel);
			
			
			numNivel=numNivel+1;			
			x_personaje=0;
			y_personaje=0;
			y_1 = 100;
			x_1 = 300;
			y_2 = 400;
			x_2 = 250;
			y_3 = 300;
			x_3 = 500;
			x_4 = 600;
			y_4= 100; 	
			
			gold1_x=0;
			gold1_y=200;
			gold2_x=200;
			gold2_y=350;
			gold3_x=600;
			gold3_y=150;
			gold4_x=400;
			gold4_y=200;
			gold5_x=300;
			gold5_y=50;
			showGold();
			$('#image').fadeIn();
			$("#llave").show('slow');
			$("#skull"+showSkull).show('slow');
			showSkull+=1;
			
			
		}
		else if(personaje == gold)
		{
		puntaje = puntaje+20;
		$("#setPoints").text("Points: "+puntaje);			
		$("#gold"+i).hide();
		comerMoneda(i);
		}
		else
		{
		alert(enemigo);
		$("#main").hide();
		$("#enfrentamiento").show();
		matarEnemigo(j);
		
		
		}
		}else
		{
			if(((x_personaje+diferencia)==x)&&((y>=y_personaje-diferencia)&&(y<=y_personaje+diferencia))){
			if( personaje==llave)
		{
		if(numNivel==4){
			alert("Ganasteeee!!!! Tu puntaje fue  "+puntaje )
			window.location="index.html";
			}
		if(numNivel==3){
			x_5 = 700;
			y_5= 400;			
			}
		
			$("#llave").hide();
			if(numNivel<4)
				alert(nivel);
				
			$("#llave").hide();
			numNivel=numNivel+1;			
			x_personaje=0;
			y_personaje=0;
			y_1 = 100;
			x_1 = 300;
			y_2 = 400;
			x_2 = 250;
			y_3 = 300;
			x_3 = 500;
			x_4 = 600;
			y_4= 100; 		

			gold1_x=0;
			gold1_y=200;
			gold2_x=200;
			gold2_y=350;
			gold3_x=600;
			gold3_y=150;
			gold4_x=400;
			gold4_y=200;
			gold5_x=300;
			gold5_y=50;
			showGold();	
			$('#image').fadeIn();
			$("#llave").show('slow');
			$("#skull"+showSkull).show('slow');
			showSkull+=1;
	  }		
	  
	  else if(personaje == gold){
				puntaje = puntaje+20;
				$("#setPoints").text("Points: "+puntaje);			
				$("#gold"+i).hide();
					comerMoneda(i);
				
				

			}
				else{
				alert(enemigo);
				$("#main").hide();
				$("#enfrentamiento").show();
				matarEnemigo(j);
				
		}
		 }
			
		 else{
				if(((y_personaje+diferencia)==y)&&((x>=x_personaje-diferencia)&&(x<=x_personaje+diferencia))){
			if( personaje==llave)
			{
			$().hide;
			x_personaje=0;
			y_personaje=0;
			if(numNivel==4){
			alert("Ganasteeee!!!! Tu puntaje fue  "+puntaje )
			window.location="index.html";
			}
			if(numNivel==3){
			x_5 = 700;
			y_5= 400;			
			}		
			$("#llave").hide();
			if(numNivel<4)
				alert(nivel);
				
			$("#llave").hide();	
			numNivel=numNivel+1;			
			
			y_1 = 100;
			x_1 = 300;
			y_2 = 400;
			x_2 = 250;
			y_3 = 300;
			x_3 = 500;
			x_4 = 600;
			y_4= 100; 

			gold1_x=0;
			gold1_y=200;
			gold2_x=200;
			gold2_y=350;
			gold3_x=600;
			gold3_y=150;
			gold4_x=400;
			gold4_y=200;
			gold5_x=300;
			gold5_y=50;		
			showGold();	
			$('#image').fadeIn();
			$("#llave").show('slow');
			$("#skull"+showSkull).show('slow');
			showSkull+=1;
			}
	  
			else if(personaje == gold){
				puntaje = puntaje+20;
				$("#setPoints").text("Points: "+puntaje);		
				$("#gold"+i).hide();
					comerMoneda(i);
			}
			else{
			alert(enemigo);
			$("#main").hide();
			$("#enfrentamiento").show();
			matarEnemigo(j);
			}
		}else{
		if(((y_personaje-diferencia)==y)&&((x>=x_personaje-diferencia)&&(x<=x_personaje+diferencia)))
		{
		   if( personaje==llave)
		   {
			if(numNivel==4){
			alert("Ganasteeee!!!! Tu puntaje fue  "+puntaje )
			window.location="index.html";
			}
			if(numNivel==3){
			x_5 = 700;
			y_5= 400;			
			}
		
			$("#llave").hide();
			if(numNivel<4)
				alert(nivel);
				
			$("#llave").hide();	
			numNivel=numNivel+1;			
			x_personaje=0;
			y_personaje=0;
			y_1 = 100;
			x_1 = 300;
			y_2 = 400;
			x_2 = 250;
			y_3 = 300;
			x_3 = 500;
			x_4 = 600;
			y_4= 100;
			
			gold1_x=0;
			gold1_y=200;
			gold2_x=200;
			gold2_y=350;
			gold3_x=600;
			gold3_y=150;
			gold4_x=400;
			gold4_y=200;
			gold5_x=300;
			gold5_y=50;
			showGold();
			$('#image').fadeIn();
			$("#llave").show('slow');
			$("#skull"+showSkull).show('slow');
			showSkull+=1;
		   }	  
			else if(personaje == gold)
			{
				puntaje = puntaje+20;
				$("#setPoints").text("Points: "+puntaje);		
				$("#gold"+i).hide();
				comerMoneda(i);
			}
			else
			{
			alert(enemigo);
			$("#main").hide();
			$("#enfrentamiento").show();
			matarEnemigo(j);
			
			}	
		}
	  }
	 }
	}
	
}




//Dados
	
	
function throwdice()
{
		$('#atacar').show();
		$('#lanzarDados').hide();
		
		var sum1;
		var sum2
		var ch=1+Math.floor(Math.random()*6);
		sum1=ch;
		dx=dicex;
		dy=dicey;
		drawface(ch);
		dx=(dicex+100);
		ch=1+Math.floor(Math.random()*6);
		sum2 = ch;
		drawface(ch);
		sum=sum1+sum2;
	function draw1(){
		var dotx;
		var doty;
		ctx.beginPath();
		dotx=dx+.5*dicewidth;
		doty=dy+.5*diceheight;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
	}
	
	function draw2(){
		var dotx;
		var doty;
		ctx.beginPath();
		dotx=dx+3*dotrad;
		doty=dy+3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+diceheight-3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
	}
	
	function draw4(){
		var dotx;
		var doty;
		ctx.beginPath();
		dotx=dx+3*dotrad;
		doty=dy+3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+diceheight-3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		ctx.beginPath();
		
		dotx=dx+3*dotrad;
		doty=dy+diceheight-3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+3*dotrad;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
	}
	
	function draw2mid(){
		var dotx;
		var doty;
		ctx.beginPath();
		dotx=dx+3*dotrad;
		doty=dy+.5*diceheight;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		dotx=dx+dicewidth-3*dotrad;
		doty=dy+.5*diceheight;
		ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
	}
	
	function drawface(n){
		ctx=document.getElementById('canvas').getContext('2d');
		ctx.lineWidth=2;
		ctx.clearRect(dx,dy,dicewidth,diceheight);
		ctx.strokeRect(dx,dy,dicewidth,diceheight);
		var dotx;
		var doty;
		ctx.fillStyle="#009966";
		switch(n)
		{
			case 1:
				draw1();
				break;
			case 2:
				draw2();
				break;
				case 3:
				draw2();
				draw1();
				break;
			case 4:
				draw4();
				break;
			case 5:
				draw4();
				draw1();
				break;
			case 6:
				draw4();
				draw2mid();
				break
		}
			
		}
}


