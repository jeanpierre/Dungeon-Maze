var contador=1;
		function CambiarFondo()
		{
		if(contador !=4)
		{
			var valor= "imagenes/banner"+contador+".jpg"
			var src_img_div='url(\''+valor+'\')';
				$("#sub-banner2").css('background-image',src_img_div);
				$("#sub-banner2").css('background-repeat','no-repeat');			
				$("#sub-banner2 img").fadeOut('slow',function()
				{
					$("#sub-banner2 img").attr('src',valor);
				});
				$("#sub-banner2 img").fadeIn('slow');
				$("#sub-banner2 img").css('display','block');
				setTimeout("CambiarFondo()",4000);
				contador +=1;	
		}
		else
		{
			contador=1;
			setTimeout("CambiarFondo()",1000);
		}
		}
	$(document).ready(function(){
	CambiarFondo();
	});