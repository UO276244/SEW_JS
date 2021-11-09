class CalculadoraBasica{

    constructor() {
        this.memoria = "";
       
    }

    

    digitos(x) {
        document.getElementById('pantalla').value += Number(x);
         
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




class calculadoraCientifica extends CalculadoraBasica{

    constructor() {
        super();
    }

    abrirParentesis() {
        document.getElementById('pantalla').value += "(";
    }

    cerrarParentesis() {
        document.getElementById('pantalla').value += ")";
    }

    pi() {
        document.getElementById('pantalla').value += "Math.PI";
    }

    pow() {
        document.getElementById('pantalla').value += "**";
    }

    pow2() {
        document.getElementById('pantalla').value += "**2";
    }

    sqrt() {
        document.getElementById('pantalla').value += "Math.sqrt(";
    }

    baseten() {
        document.getElementById('pantalla').value += "Math.pow(10, ";
    }
    
    log() {
        document.getElementById('pantalla').value += "Math.log10(";
    }

    exp() {
        document.getElementById('pantalla').value += "Math.exp(";
    }

    abs() {
        document.getElementById('pantalla').value += "Math.abs(";
    }

    borrarUltimo() {
        var aux = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = aux.slice(0, -1);
    }

    e() {
        document.getElementById('pantalla').value += "Math.E";
    }

    ln() {
        document.getElementById('pantalla').value += "Math.log(";
    }

    factorial() {
            var aux;
            try {
                aux = eval(document.getElementById('pantalla').value);
                var total = 1; 
            
                for (var i = 1; i <= aux; i++) {
                    total = total * i; 
                } 
                
                this.ans = total;
                document.getElementById('pantalla').value = total;
            }
            catch (err) {
                document.getElementById('pantalla').value =  "SyntaxError";
            }    
    }


    sin() {
        document.getElementById('pantalla').value += "Math.sin(";
    }

    cos() {
        document.getElementById('pantalla').value += "Math.cos(";
    }

    tan() {
        document.getElementById('pantalla').value += "Math.tan(";
    }

    asin() {
        document.getElementById('pantalla').value += "Math.asin(";
    }

    acos() {
        document.getElementById('pantalla').value += "Math.acos(";
    }

    atan() {
        document.getElementById('pantalla').value += "Math.atan(";
    }


    cambiarSigno() {
       this.actual = Number(document.getElementById('pantalla').value)
       document.getElementById('pantalla').value = this.actual*(-1)
        
    }


    

}

calculadora = new calculadoraCientifica();


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