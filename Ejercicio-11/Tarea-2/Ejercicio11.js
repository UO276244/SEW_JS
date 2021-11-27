

class Geolocalizacion{
    constructor (){
    navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.verErrores.bind(this));
}

getPosicion(posicion){
    this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
    this.longitud         = posicion.coords.longitude; 
    this.latitud          = posicion.coords.latitude;  
    this.precision        = posicion.coords.accuracy;
    this.altitud          = posicion.coords.altitude;
    this.precisionAltitud = posicion.coords.altitudeAccuracy;
    this.rumbo            = posicion.coords.heading;
    this.velocidad        = posicion.coords.speed;       
}

cargarDatos(){

    $('p').remove();

   
    var datos='<p>'+ this.mensaje + '</p>'; 
    datos+='<p>Longitud: '+this.longitud +' grados</p>'; 
    datos+='<p>Latitud: '+this.latitud +' grados</p>';
    datos+='<p>Precisión de la longitud y latitud: '+ this.precision +' metros</p>';
    datos+='<p>Altitud: '+ this.altitude +' metros</p>';
    datos+='<p>Precisión de la altitud: '+ this.precisionAltitud +' metros</p>'; 
    datos+='<p>Rumbo: '+ this.rumbo +' grados</p>'; 
    datos+='<p>Velocidad: '+ this.velocidad +' metros/segundo</p>';

    $('h1').after(datos);
    
}


verErrores(error){
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
}
var localizacion = new Geolocalizacion();
