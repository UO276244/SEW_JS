
class FileUploader{

    constructor(){
        this.nFiles = 0;
        this.fileArray;
        this.totalBytes = 0;
        this.URL = "https://drive.google.com/uc?export=download&id=1da2ftKYFPWBUCkjVyuKwJK0EfWe0jBK-";
        

        this.marcadores = [];
        this.map;
        
    }

    insertarMarcador(datos){

      var yo = this;

      $.each($("features",datos), yo.guardarMarc);

    }

    guardarMarc(mark){

      var marcador = new google.maps.Marker({
        title: mark.nombre,
        position : new 
        google.maps.LatLng(mark.geometry.coordinates[1],mark.geometry.coordinates[0]),
        map : this.map,
        });

        marcador.addListener('click', function(event) {
          
          
          var content = mark.properties.Name + " --> " + mark.properties.description;
          var testimonial = document.querySelector('section p');
          testimonial.innerHTML = content;
  
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
      var marks = jsonObj.features;

      for(let i = 0; i<marks.length; i++ )
      {
          this.guardarMarc(marks[i]);
      }  
     
    }
   
    
    initMap() {

      
      this.map = new google.maps.Map(document.querySelector('main'), {
        center: new google.maps.LatLng(40.42028, -3.70577),
        zoom: 2,
        mapTypeId: 'terrain'
      });

      

      

      
  
    }
  

}

var fileUploader = new FileUploader();
  


