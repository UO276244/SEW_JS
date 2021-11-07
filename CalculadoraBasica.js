class CalculadoraBasica{

    constructor() {
        this.memoria = "";
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



    digitos(x) {
        document.getElementById('pantalla').value += x;
        this.digitos = digitos; 
    }

    punto() {
        document.getElementById('pantalla').value += ".";
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