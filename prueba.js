
$(document).ready(function(){

	$(".val").click(function(e){		
		e.preventDefault();
		var digito = $(this).attr("href");				
		$(".screen").append(digito);		
	});

	$(".result").click(function(){		
			array_digitos = $(".screen").text().split("");
			total = "";

			for (i in array_digitos){				
				total = total + array_digitos[i];
			}			

			$(".screen").text(eval(total));	
	});

	$(".clear").click(function(){          
          $(".screen").html("");
    });
});