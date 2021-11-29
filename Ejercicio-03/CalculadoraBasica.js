class CalculadoraBasica{

    constructor() {
        this.memoria = "";
       
    }


    
  

    digitos(x) {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += Number(x);
        
    }

    punto() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += ".";
    }

   
    suma() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "+";
    }

    resta() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "-";
    }

    multiplicacion() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "*";
    }
    
    division() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "/";
    }


    mrc() {
        this.memoria = document.querySelector('input[type=text][name=\"pantalla\"]').value ;
    }

    mMenos() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value = document.querySelector('input[type=text][name=\"pantalla\"]').value +  "-" + this.memoria;
    }

    /**/
    mMas() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value = document.querySelector('input[type=text][name=\"pantalla\"]').value +  "+" + this.memoria;
    }



    borrar() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value = "";
    }

    igual() {
        try {
            var toEval = document.querySelector('input[type=text][name=\"pantalla\"]').value;
            document.querySelector('input[type=text][name=\"pantalla\"]').value = eval(toEval);
        } catch (err) {
            document.querySelector('input[type=text][name=\"pantalla\"]').value = "Error.";
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
    if(event.key >= '0' && event.key <= '9'){

        calculadora.digitos(Number(event.key));

}

    if(event.key === 'Enter'){//Enter
        event.preventDefault();
        calculadora.igual();
    }
    if(event.key === 'Delete'){//Borrar todo
        event.preventDefault();
        calculadora.borrar();
    }

  });