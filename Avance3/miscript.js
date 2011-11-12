var seleccion=false;

$(document).ready(function() {



	function default1(){
		$("#guerrero").css({'border': '2px solid black'});
		$("#clerigo").css({'border': '2px solid black'});
		$("#valkiria").css({'border': '2px solid black'});
		
		$("body").css({'background-repeat': 'no-repeat'});
		$("body").css({'background-position': 'center'});
		
		seleccion = false;
	}
	
	function seleccionado(personaje_id){
		$(personaje_id).css({'border':'red 2px solid'});
		
	}
	
	$("#guerrero").click(function() {
	default1();
		if(seleccion == false){
			default1();
			seleccionado("#guerrero");
			$("#container").css({'background-image': 'url(castillo.jpg)'});
			$("#atack").text("Atack: 10");
			$("#defense").text("Defense: 14");
			$("#damage").text("Damage: 15");
			$("#life").text("Life: 100");
			seleccion = true;
		}
		
	});
	
	$("#clerigo").click(function() {
	default1();
		if(seleccion == false){
			default1();
			seleccionado("#clerigo");
			$("#container").css({'background-image': 'url(magia.jpg)'});
			$("#atack").text("Atack: 5");
			$("#defense").text("Defense: 16");
			$("#damage").text("Damage: 5");
			$("#life").text("Life: 150");
			seleccion = true;
		}
		
	});
	
	$("#valkiria").click(function() {
	default1();
		if(seleccion == false){
			default1();
			seleccionado("#valkiria");
			$("#container").css({'background-image': 'url(bosque.jpg)'});
			$("#atack").text("Atack: 10");
			$("#defense").text("Defense: 12");
			$("#damage").text("Damage: 20");
			$("#life").text("Life: 50");
			seleccion = true;
		}
		
	});
	
	
	$("#caracteristicas").corner();
	
	
	$(".calendario").datepicker();

});