


class Meteo{

    constructor(ciudad){                                                               // MARTIN
        this.apiKey =  "55cda3b12c001193d3c26685dd14ba6e";// "47b790fd0fc41878c80c57c9846132cb";//"55cda3b12c001193d3c26685dd14ba6e";
        this.ciudad = ciudad;
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apiKey + "&mode=xml";
       this.datos;
       this.shown = false;
    }


    getShown(){
        return this.shown;
    }

    setShown(bool){
        this.shown = bool;
    }


    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    this.datos = datos;

                    

                    var totalNodos            = $('*',datos).length; 
                    var ciudad                = $('city',datos).attr("name");
                    var longitud              = $('coord',datos).attr("lon");
                    var latitud               = $('coord',datos).attr("lat");
                    var pais                  = $('country',datos).text();
                    var amanecer              = $('sun',datos).attr("rise");
                    var minutosZonaHoraria    = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970   = Date.parse(amanecer);
                        amanecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer             = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970  = Date.parse(oscurecer);
                        oscurecerMiliSeg1970  -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var temperatura           = $('temperature',datos).attr("value");
                    var temperaturaMin        = $('temperature',datos).attr("min");
                    var temperaturaMax        = $('temperature',datos).attr("max");
                    var humedad               = $('humidity',datos).attr("value");
                    var humedadUnit           = $('humidity',datos).attr("unit");
                    var presion               = $('pressure',datos).attr("value");
                    var presionUnit           = $('pressure',datos).attr("unit");
                    var velocidadViento       = $('speed',datos).attr("value");
                    var nombreViento          = $('speed',datos).attr("name");
                    var direccionViento       = $('direction',datos).attr("value");
                    var nubosidad             = $('clouds',datos).attr("value");
                    var visibilidad           = $('visibility',datos).attr("value");
                    var descripcion           = $('weather',datos).attr("value");
                    var horaMedida            = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                    var icono                 = $('weather',datos).attr("icon");  

                
                    var listaDatos = "<li><ul><li>Numero de nodos: " + totalNodos + "</li>";
                    listaDatos += "<li>Ciudad: " + ciudad + "</li>";
                    listaDatos += "<li>País: " + pais + "</li>";
                    listaDatos += "<li>Latitud: " + latitud + " grados</li>";
                    listaDatos += "<li>Longitud: " + longitud + " grados</li>";
                    listaDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                    listaDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                    listaDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                    listaDatos += "<li>Presión: " + presion +" " + presionUnit +  " </li>";
                    listaDatos += "<li>Humedad: " + humedad + " "+ humedadUnit + "</li>";
                    listaDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                    listaDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                    listaDatos += "<li>Dirección del viento: " +direccionViento+ " grados</li>";
                    listaDatos += "<li>Velocidad del viento: " +velocidadViento + " metros/segundo</li>";
                    listaDatos += "<li>Nombre del viento: " +nombreViento + "</li>";
                    listaDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                    listaDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                    listaDatos += "<li>Descripción: " + descripcion + "</li>";
                    listaDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                    listaDatos += "<li>Nubosidad: " + nubosidad + " %</li>";
                    listaDatos += "<li><img src=\"https://openweathermap.org/img/w/" + icono + ".png\" alt=\"Icono del tiempo\"></li></ul></li>"
                $("ol:last").append(listaDatos);
                },

                error:function(){
                    $("h2").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                    $("ol li").remove();
                    
                    }
          
        });
    }


}


class ArrayCiudades{

    constructor(array){
        this.ciudades = array;
    }


    mostrarTodas(){

        let i = 0;

        for(i = 0; i<this.ciudades.length ; i++){

            if(this.ciudades[i].getShown()==false){
                this.ciudades[i].cargarDatos();
                this.ciudades[i].setShown(true);
            }
            
        }
       

    }
}

		


var oviedo = new Meteo("Oviedo");
var valladolid = new Meteo("Valladolid");
var palencia = new Meteo("Palencia");
var alcañiz = new Meteo("Alcañiz");
var llanera = new Meteo("Llanera")

var clusterCiudades = new ArrayCiudades([oviedo,valladolid,palencia,alcañiz,llanera]);