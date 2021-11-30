
class Meteo{

  constructor(ciudad){                                    
      this.apiKey =  "55cda3b12c001193d3c26685dd14ba6e";// "47b790fd0fc41878c80c57c9846132cb";//"55cda3b12c001193d3c26685dd14ba6e";
      this.ciudad = ciudad;
      this.unidades = "&units=metric";
      this.idioma = "&lang=es";
      this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad  + this.unidades + this.idioma + "&APPID=" + this.apiKey;
     this.datos;
     this.executed = false;
  }


  cargarDatos(){
      $.ajax({
          dataType: "json",
          url: this.url,
          method: 'GET',
          success: function(datos){
                  this.datos = datos;

              
                  var listaDatos = "<ol><li><ul><li>Ciudad: " + datos.name + "</li>";
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
                  listaDatos += "<li><img src=\"https://openweathermap.org/img/w/" + datos.weather[0].icon + ".png\" alt=\"Icono del tiempo\"></li></ul></li></ol>"
              $("button:last").after(listaDatos);
              }
        
      });
  }


}


class Aplicacion{

    constructor(){

      if(!navigator.clipboard){
        alert("Cuidado, tu navegador no soporta la API Clipboard");
      }
        this.nFiles = 0;
        this.fileArray;
        this.totalBytes = 0;
        this.URL = "https://drive.google.com/uc?export=download&id=1da2ftKYFPWBUCkjVyuKwJK0EfWe0jBK-";
        

        this.marcadores = [];
        this.map;
        
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
      
    }

    mostrarTiempo(){

      $('ol').remove();

      var loc = $('input[type=text]').val();
      let loc2 = loc.trim().split(',')[1].replaceAll(" ",'');
      var meteo = new Meteo(loc2);

      meteo.cargarDatos();


    }

    insertarMarcador(datos){

      var yo = this;

      $.each($("features",datos), yo.guardarMarc);

    }

    guardarMarc(nombre,descripcion,latitud,longitud,color){

      var marcador = new google.maps.Marker({
        title: nombre,
        position : new 
        google.maps.LatLng(latitud,longitud),
        map : this.map,
        icon: {                             
          url: "http://maps.google.com/mapfiles/ms/icons/"+color+"-dot.png"                           }
        });

        marcador.addListener('click', function(event) {
          
          
          var content = nombre + " --> " + descripcion;
          var testimonial = document.querySelector('section p');
          testimonial.innerHTML = content;

          if(nombre != "Localizacion Actual"){

            try{
              navigator.clipboard.writeText(nombre);
            }catch(Exception)
            {
              alert("El focus debe de estar en la página para poder copiar al portapapeles");
            }
    
            
    
          }

          
         
  
        });

        this.marcadores.push(marcador);

    }



    

    loadGeoJSON(){


      if (!(window.File && window.FileReader && window.FileList && window.Blob)) 
      {  
          alert("Este navegador NO soporta la subida de archivos");
          return;
      
      }

      let regex = '\.geojson';
      var file  = document.querySelector('input').files[0];
      if(!file.name.match(regex)){
        alert("Formato no valido");
        return;
      }

     
      var fr = new FileReader();
      fr.readAsText(file);
      var yo = this;
      fr.onload = function (evento) {
        var result= fr.result;
        yo.parseJSON(result);
      };

      

      // $.getJSON(this.URL,yo.insertarMarcador);
    }

    parseJSON(jsonAsText){


      var jsonObj = JSON.parse(jsonAsText);
      this.geoJSONOBJ = jsonObj;
      var marks = jsonObj.features;
      
      for(let i = 0; i<marks.length; i++ )
      {
          this.guardarMarc(marks[i].properties.Name,marks[i].properties.description,
            marks[i].geometry.coordinates[1],
            marks[i].geometry.coordinates[0],
            "red");
      }  

      

      
     
    }

    pushCurrentLocation(){


      this.guardarMarc("Localizacion Actual","Aquí estás tu",this.latitud,this.longitud,"blue")

        
    }

    getPosicion(posicion){
      
      this.longitud         = posicion.coords.longitude; 
      this.latitud          = posicion.coords.latitude;  
      this.pushCurrentLocation();
     }
   
    
    initMap() {

      
      this.map = new google.maps.Map(document.querySelector('main'), {
        center: new google.maps.LatLng(40.42028, -3.70577),
        zoom: 2,
        mapTypeId: 'terrain'
      });

      

      
    }
  

}





var app = new Aplicacion();
  


