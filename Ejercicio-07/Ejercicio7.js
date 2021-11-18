


class JQuery{

    constructor(){

        this.recorrido = false;

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
        
        if(this.recorrido == false){
            $("*", document.body).each(function() {
                var etiquetaPadre = $(this).parent().get(0).tagName;
                $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> tipo elemento : <" + $(this).get(0).tagName +"> valor: "));
            });

            this.recorrido = true;
        }
        
    
    }


    sumarCeldas(){


        if(this.recorrido == true){
                alert("El contenido de las celdas ha cambiado debido a recorrer el arbol dom, recargue la página para resetear.");
        }else{

            
                let total = parseInt("0");

                $("table tr td").each(function(){
                    if(!isNaN(parseInt($(this).text()))){
                        total += parseInt($(this).text());
                    }
                });
                
            


                $("#totSum").val( total);
            }

        }

}

		


var jquery = new JQuery();
