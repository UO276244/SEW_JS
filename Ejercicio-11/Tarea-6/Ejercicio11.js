

class Geolocalizacion{
    constructor (){

    }   


    cargarDatos(position){

        this.longitud         = position.coords.longitude; 
        this.latitud          = position.coords.latitude;  


    }


    calcularRuta(){
        let origen = $('#origen').val();
        let destino = $('#destino').val();

        if(origen == "" || destino == ""){
            alert("Rellena todos los campos.");
            return;
        }
        this.ir(origen,destino);
    }

    ir(origen,destino){

        $('br:last').remove();
        $('iframe').remove();

        let query =  "origin=" + origen + "&destination=" + destino;

        $('button').after("<br><iframe  loading=\"lazy\" allowfullscreen src=\"https://www.google.com/maps/embed/v1/directions?" + query +"&key=AIzaSyDO5kYgf-pUcspiZbLvrwGtYQN0m_EXZHo&mode=walking\"></iframe>");
    }


    initMap(){

        var lugar = {lat: this.latitud, lng: this.longitud};
        var mapa = new google.maps.Map(document.getElementById('show'),{zoom: 8,center:lugar});
        var marcador = new google.maps.Marker({position:lugar,map:mapa});

    }

}


var localizacion = new Geolocalizacion();

