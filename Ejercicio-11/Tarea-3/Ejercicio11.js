

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

    this.generarMapa();
    
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


    generarMapa(){
       
        var apiKey = "&key=AIzaSyDO5kYgf-pUcspiZbLvrwGtYQN0m_EXZHo";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parámetros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom ="&zoom=15";
        //Tamaño del mapa en pixeles (obligatorio)
        var tamaño= "&size=800x600";
        //Escala (opcional)
        //Formato (opcional): PNG,JPEG,GIF
        //Tipo de mapa (opcional)
        //Idioma (opcional)
        //region (opcional)
        //marcadores (opcional)
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false"; 
        
        this.url = url + centro + zoom + tamaño + marcador + sensor + apiKey;

        $('img').remove();
        $('p:last').after("<img src=\"" + this.url + "\" alt=\"mapa\" />");
    }
}
var localizacion = new Geolocalizacion();
