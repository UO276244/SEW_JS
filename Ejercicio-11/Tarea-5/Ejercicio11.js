

class Geolocalizacion{
    constructor (){

        //Por defecto por si no tiene geolocalización
        this.longitud = -3.707306;
        this.latitud = 40.416228;
        
        navigator.geolocation.getCurrentPosition(this.cargarDatos.bind(this), this.handlearError.bind(this));
        
    
    }   


    cargarDatos(position){

        this.longitud         = position.coords.longitude; 
    this.latitud          = position.coords.latitude;  

    }

    handlearError(error){

        switch(error.code) {
   
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Posición no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La peticion ha caducado"
                break;
            case error.PERMISSION_DENIED:
                this.mensaje = "No se han dado permisos de localización"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
                }

    }

    escribirMapa(){

        $('h1').after("<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyDO5kYgf-pUcspiZbLvrwGtYQN0m_EXZHo&callback=localizacion.initMap\"></script>");

    }


    initMap(){

        var lugar = {lat: this.latitud, lng: this.longitud};
        var mapa = new google.maps.Map(document.querySelector('main'),{zoom: 8,center:lugar});
        var marcador = new google.maps.Marker({position:lugar,map:mapa});

    }

}


var localizacion = new Geolocalizacion();

