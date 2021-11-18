


class JQuery{

    constructor(){

    }

    ocultarTitulos(){

        $(":header").hide();
            

    }

    mostrarTitulos(){

        $(":header").show();
           
    }

    modificarAutor(){
        let str = "El autor de esta practica es: " + $("#campoAutor").val();
        $("p").text(str);
    }


    afterAutor(){
        $("p").after("<p>Esto se ha añadido con after() detrás de un elemento p</p>");
    }

    removeAllH2(){
        $("h2").remove();
    }

    traverseDOM(){
        
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    
    }


    sumarCeldas(){

        let total = parseInt("0");

        $("table tr td").each(function(){
            if(!isNaN(parseInt($(this).text()))){
                total += parseInt($(this).text());
            }
        });
        
      


          $("#totSum").val( total);
    }

}

		


var jquery = new JQuery();
