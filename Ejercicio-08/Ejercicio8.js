


class Meteo{

    constructor(ciudad){                                    
        this.apiKey =  "55cda3b12c001193d3c26685dd14ba6e";// "47b790fd0fc41878c80c57c9846132cb";//"55cda3b12c001193d3c26685dd14ba6e";
        this.ciudad = ciudad;
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apiKey;
       this.datos;
    }


    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    this.datos = datos;

                
                    var listaDatos = "<li><ul><li>Ciudad: " + datos.name + "</li>";
                    listaDatos += "<li>País: " + datos.sys.country + "</li>";
                    listaDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    listaDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                    listaDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                    listaDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                    listaDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                    listaDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    listaDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    listaDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                    listaDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *1000).toLocaleTimeString() + "</li>";
                    listaDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    listaDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    listaDatos += "<li>Hora de la medida: " + new Date(datos.dt *1000).toLocaleTimeString() + "</li>";
                    listaDatos += "<li>Fecha de la medida: " + new Date(datos.dt *1000).toLocaleDateString() + "</li>";
                    listaDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                    listaDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                    listaDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li>";
                    listaDatos += "<li><img src=\"https://openweathermap.org/img/w/" + datos.weather[0].icon + ".png\" alt=\"Icono del tiempo\"></li></ul></li>"
                $("ol").append(listaDatos);
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
            this.ciudades[i].cargarDatos();
        }
       

        $('button').prop('disabled', true);
        $('button').css("visibility", "hidden");

    }
}

		


var oviedo = new Meteo("Oviedo");
var valladolid = new Meteo("Valladolid");
var palencia = new Meteo("Palencia");
var alcañiz = new Meteo("Alcañiz");
var llanera = new Meteo("Llanera")

var clusterCiudades = new ArrayCiudades([oviedo,valladolid,palencia,alcañiz,llanera]);
