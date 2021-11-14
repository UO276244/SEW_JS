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
        this.memoria = document.getElementById('pantalla').value ;
    }

    mMenos() {
        document.getElementById('pantalla').value = document.getElementById('pantalla').value +  "-" + this.memoria;
    }

    /**/
    mMas() {
        document.getElementById('pantalla').value = document.getElementById('pantalla').value +  "+" + this.memoria;
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