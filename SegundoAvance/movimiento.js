
		var x = 0;		
		var y = 0;
function moverPulpin(direccion){
	
		// invocamos el metodo con el evento
			switch(direccion.keyCode){   // evento.codigoDelasTeclas(Keycode)
				case 38:  // flecha hacia arriba.
					y -=5;
					document.getElementById("image").style.top = String(y1)+"px";
					
				break;
				
				case 39:   // flecha hacia la derecha.
					x -=5;
					document.getElementById("image").style.right = String(x1)+"px";
					
				break;
			
				case 40:    // flecha hacia abajo.
					y +=5; 
					document.getElementById("image").style.top = String(y1)+"px";
					
				break;
				
				case 37:   // flecha hacia izquierda.
					x +=5;
					document.getElementById("image").style.right = String(x1)+"px";
					
				break;
			}
		}
		
		