

class Mapeador{

    constructor(){

    }

    initMap(){
        var lugar = {lat: 41.909412, lng: -2.762607};
        var mapa = new google.maps.Map(document.getElementById('show'),{zoom: 8,center:lugar});
        var marcador = new google.maps.Marker({position:lugar,map:mapa});
    }

}


var mapaDinamicoGoogle = new Object();

var mapeador = new Mapeador();
mapaDinamicoGoogle.initMap = mapeador.initMap;
