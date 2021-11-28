
class FileUploader{

    constructor(){
        this.nFiles = 0;
        this.fileArray;
        this.totalBytes = 0;
        this.URL = "https://drive.google.com/uc?export=download&id=17_YEbLGXmof0A5nb_SLRu3HwgfZED9_E";


    }

   
    
    initMap() {
        var map;
      map = new google.maps.Map(document.querySelector('main'), {
        center: new google.maps.LatLng(40.42028, -3.70577),
        zoom: 2,
        mapTypeId: 'terrain'
      });
    
      var kmlLayer = new google.maps.KmlLayer(this.URL, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map
      });
      kmlLayer.addListener('click', function(event) {
          
          
        var content = event.featureData.infoWindowHtml;
        var testimonial = document.querySelector('section p');
        testimonial.innerHTML = content;

      });
    }

}

var fileUploader = new FileUploader();
  


