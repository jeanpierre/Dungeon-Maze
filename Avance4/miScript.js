
		var x=0;
		var y=0;	
		var num=0;
		
		function moverNinja(direccion)
		{switch(direccion.keyCode)
			{
			
				case 38:
				
      			if(y>0){
					y-=5;
					document.getElementById("image").style.top=String(y)+"px";
					moverEnemigos();
					}
				break;
				case 39:
				if(x>=-720){
					x-=5;
					document.getElementById("image").style.right=String(x)+"px";
					moverEnemigos();
					}
				break;
				
				case 40:
				
				if(y<=385){
					y+=5;
					document.getElementById("image").style.top=String(y)+"px";
						moverEnemigos();
					}
				break;
				
				case 37:
				if(x<0){
					x+=5;
					document.getElementById("image").style.right=String(x)+"px";
					moverEnemigos();
				}
				break;
				
			}		
				
			if(x<=(-680) && y<(60)){				
			document.getElementById("llave").style.visibility="hidden";
			}
			if( x>=-170 &&    x<=(-160) && y>(280)){				
			document.getElementById("gold1").style.visibility="hidden";						
			}
			
			
		}
		
		
		function moverEnemigos(){
		
		var aleatorio = Math.floor(Math.random()*2);
		switch(aleatorio)
			{
			case 0:
				num+=5;
				document.getElementById("skull1").style.left=String(num)+"px";
				document.getElementById("skull2").style.top=String(num)+"px";
				document.getElementById("skull3").style.right=String(num)+"px";
				break;
			
			case 1:
				num-=5;
				document.getElementById("skull1").style.top=String(num)+"px";
				document.getElementById("skull2").style.bottom=String(num)+"px";
				document.getElementById("skull3").style.left=String(num)+"px";	
				break;				
			

			}
		}
		