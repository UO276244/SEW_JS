class CalculadoraBasica{

    constructor() {
        this.memoria = "";
        //this.dig = null;
    }

    

    digitos(x) {
        document.getElementById('pantalla').value += Number(x);
        //this.dig = dig; 
    }

    punto() {
        document.getElementById('pantalla').value += ".";
    }

   
    suma() {
        document.getElementById('pantalla').value += "+";
    }

    resta() {
        document.getElementById('pantalla').value += "-";
    }

    multiplicacion() {
        document.getElementById('pantalla').value += "*";
    }
    
    division() {
        document.getElementById('pantalla').value += "/";
    }


    mrc() {
        document.getElementById('pantalla').value += this.memoria;
    }

    mMenos() {
        this.memoria = "";
    }

    /**/
    mMas() {
        this.memoria += document.getElementById('pantalla').value;
    }



    borrar() {
        document.getElementById('pantalla').value = "";
    }

    igual() {
        try {
            var toEval = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value = eval(toEval);
        } catch (err) {
            document.getElementById('pantalla').value = "Error.";
        }
        
    }




}

calculadora = new CalculadoraBasica();


document.addEventListener('keydown', function (event) {
    if (event.key === '+') {
      calculadora.suma();
    }
    if (event.key === '-') {
      calculadora.resta();
    }
    if (event.key === '/') {
        calculadora.division();
      }
    if (event.key === '*') {
        calculadora.multiplicacion();
    }
    if(event.key === '1' || event.key==='2' ||
        event.key === '3' || event.key==='4' ||
        event.key === '5' || event.key==='6' ||
        event.key === '7' || event.key==='8' ||
        event.key === '9'){

            calculadora.digitos(Number(event.key));

    }
    if(event.keyCode === 13){//Enter
        event.preventDefault();
        calculadora.igual();
    }
    if(event.keyCode === 46){//Borrar
        event.preventDefault();
        calculadora.borrar();
    }

  });