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
            document.querySelector('input[type=text][name=\"pantalla\"]').value = "Systax Error.";
        }
        
    }




}




class calculadoraCientifica extends CalculadoraBasica{

    constructor() {
        super();
        this.isDeg = true;
    }

    deg(){


        let num = eval(document.querySelector('input[type=text][name=\"pantalla\"]').value);

        if(this.isDeg == true){

            document.querySelector('input[type=text][name=\"pantalla\"]').value = num *( Math.PI/180);
            this.isDeg = false;

        }else{
            
            document.querySelector('input[type=text][name=\"pantalla\"]').value = num *(180/Math.PI);
            this.isDeg = true;
        }

    }

    mr(){
        document.querySelector('input[type=text][name=\"pantalla\"]').value = this.memoria;
    }

    mc(){
        this.memoria = "";
    }

    abrirParentesis() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "(";
    }

    cerrarParentesis() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += ")";
    }

    pi() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.PI";
    }

    pow() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "**";
    }

    pow2() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "**2";
    }

    sqrt() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.sqrt(";
    }

    baseten() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.pow(10, ";
    }
    
    log() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.log10(";
    }

    exp() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.exp(";
    }

    abs() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.abs(";
    }

    borrarUltimo() {
        var aux = document.querySelector('input[type=text][name=\"pantalla\"]').value;
        document.querySelector('input[type=text][name=\"pantalla\"]').value = aux.slice(0, -1);
    }

    e() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.E";
    }

    ln() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.log(";
    }

    factorial() {
            var aux;
            try {
                aux = eval(document.querySelector('input[type=text][name=\"pantalla\"]').value);
                var total = 1; 
            
                for (var i = 1; i <= aux; i++) {
                    total = total * i; 
                } 
                
                this.ans = total;
                document.querySelector('input[type=text][name=\"pantalla\"]').value = total;
            }
            catch (err) {
                document.querySelector('input[type=text][name=\"pantalla\"]').value =  "SyntaxError";
            }    
    }


    sin() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.sin(";
    }

    cos() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.cos(";
    }

    tan() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.tan(";
    }

    asin() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.asin(";
    }

    acos() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.acos(";
    }

    atan() {
        document.querySelector('input[type=text][name=\"pantalla\"]').value += "Math.atan(";
    }


    cambiarSigno() {
       this.actual = Number(document.querySelector('input[type=text][name=\"pantalla\"]').value)
       document.querySelector('input[type=text][name=\"pantalla\"]').value = this.actual*(-1)
        
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
    if(event.key === 'Backspace'){//Borrar ultimo
        event.preventDefault();
        calculadora.borrarUltimo();
    }
  });