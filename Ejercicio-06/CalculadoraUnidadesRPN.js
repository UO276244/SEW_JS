


class CalculadoraRPN{

    
    constructor(pilaNumeros){
        this.pilaNumeros = pilaNumeros;
        
    }
   
    mostrar(){
        if(!this.pilaNumeros.vacio()){
            document.querySelector('textarea[name=\"pantalla\"]').value = this.pilaNumeros.printStack(this.pilaNumeros);
            
        }
       
        
    }


    digito(x){
        
        document.querySelector('input[type=text][name=\"currentnum\"]').value += x;
        
    }

    suma(){
        if(this.pilaNumeros.size() >= 2){
            this.pilaNumeros.push(this.pilaNumeros.pop()+this.pilaNumeros.pop());

            this.mostrar();
        }
    }


    resta(){
        if(this.pilaNumeros.size() >= 2){
            this.pilaNumeros.push(this.pilaNumeros.pop()-this.pilaNumeros.pop());
            this.mostrar();
        }

    }


    multiplicacion(){

        if(this.pilaNumeros.size() >= 2){
            this.pilaNumeros.push(this.pilaNumeros.pop()*this.pilaNumeros.pop());
            this.mostrar();
        }

    }

    division(){

        if(this.pilaNumeros.size() >= 2){
            this.pilaNumeros.push(this.pilaNumeros.pop()/this.pilaNumeros.pop());
             this.mostrar();
        }

    }

    sin(){

        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(Math.sin(this.pilaNumeros.pop()));
            this.mostrar();
        }

    }

    cos(){
        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(Math.cos(this.pilaNumeros.pop()));
            this.mostrar();
        }

    }

    tan(){
        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(Math.tan(this.pilaNumeros.pop()));
            this.mostrar();
        }


    }

    arcsin(){
        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(Math.asin(this.pilaNumeros.pop()));
            this.mostrar();
        }

    }

    arctan(){

        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(Math.atan(this.pilaNumeros.pop()));
            this.mostrar();
        }

    }

    arccos(){
        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(Math.acos(this.pilaNumeros.pop()));
            this.mostrar();
        }

    }

    changeSign(){
        if(this.pilaNumeros.size() >= 1){
            this.pilaNumeros.push(this.pilaNumeros.pop() * (-1));
            this.mostrar();
        }

    }

    enter(){
        this.pilaNumeros.push(Number(document.querySelector('input[type=text][name=\"currentnum\"]').value));
        document.querySelector('input[type=text][name=\"currentnum\"]').value = "";
        this.mostrar();
    }

    vaciar(){
        this.pilaNumeros.vaciar();
        
        document.querySelector('input[type=text][name=\"currentnum\"]').value = "";
        document.querySelector('textarea[name=\"pantalla\"]').value = "";
    }

}


class CalculadoraUnidadesRPN extends CalculadoraRPN{

   
    constructor(pilaNumeros, pilaUnidad){
        super(pilaNumeros);

        this.pilaUnidad = pilaUnidad;

        
        
    }

    mostrarUnidades(){
        if(!this.pilaNumeros.vacio() && !this.pilaUnidad.vacio()){
            
            document.querySelector('textarea[name=\"pnUnidades\"]').value = this.pilaUnidad.printStack(this.pilaUnidad);
            
        }
       
        
    }


    digito(x){
        
        document.querySelector('input[type=text][name=\"currentnum\"]').value += x;
       
        
    }

    suma(){

        if(this.pilaNumeros.size() >= 2 && this.pilaUnidad.size() >= 2){

            let primerUnd = this.pilaUnidad.pop();
            let segnudoUnd = this.pilaUnidad.pop();
            
            if(primerUnd === segnudoUnd){//Están en la misma unidad
                super.suma();
                this.pilaUnidad.push(primerUnd);
                this.mostrarUnidades();
            }else{
                document.querySelector('input[type=text][name=\"undActual\"]').value = "Error de unidades: unidades diferentes.";
                this.pilaUnidad.push(segnudoUnd);
                this.pilaUnidad.push(primerUnd);
            }
        }
        


    }


    resta(){


        if(this.pilaNumeros.size() >= 2 && this.pilaUnidad.size() >= 2){

            let primerUnd = this.pilaUnidad.pop();
            let segnudoUnd = this.pilaUnidad.pop();
            
            if(primerUnd === segnudoUnd){//Están en la misma unidad
                super.resta();
                this.pilaUnidad.push(primerUnd);
                this.mostrarUnidades();
            }else{
                document.querySelector('input[type=text][name=\"undActual\"]').value = "Error de unidades: unidades diferentes.";
                this.pilaUnidad.push(segnudoUnd);
                this.pilaUnidad.push(primerUnd);
            }
        }



    }


    multiplicacion(){

        if(this.pilaNumeros.size() >= 2 && this.pilaUnidad.size() >= 2){

            let primerUnd = this.pilaUnidad.pop();
            let segnudoUnd = this.pilaUnidad.pop();
            
            if(primerUnd === segnudoUnd){//Están en la misma unidad
                super.multiplicacion();
                this.pilaUnidad.push(primerUnd);
                this.mostrarUnidades();
            }else{
                document.querySelector('input[type=text][name=\"undActual\"]').value = "Error de unidades: unidades diferentes.";
                this.pilaUnidad.push(segnudoUnd);
                this.pilaUnidad.push(primerUnd);
            }
        }


        

    }

    division(){

        if(this.pilaNumeros.size() >= 2 && this.pilaUnidad.size() >= 2){

            let primerUnd = this.pilaUnidad.pop();
            let segnudoUnd = this.pilaUnidad.pop();
            
            if(primerUnd === segnudoUnd){//Están en la misma unidad
                super.division();
                this.pilaUnidad.push(primerUnd);
                this.mostrarUnidades();
            }else{
                document.querySelector('input[type=text][name=\"undActual\"]').value = "Error de unidades: unidades diferentes.";
                this.pilaUnidad.push(segnudoUnd);
                this.pilaUnidad.push(primerUnd);
            }
        }


    }

    sin(){

        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            
            
                super.sin();
                
                this.mostrarUnidades();
            
        }

    }

    cos(){
        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            super.cos();
                
                this.mostrarUnidades();
        }

    }

    tan(){
        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            super.tan();
                
            this.mostrarUnidades();
        }


    }

    arcsin(){
        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            super.arcsin();
                
            this.mostrarUnidades();
        }

    }

    arctan(){

        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            super.arctan();
                
            this.mostrarUnidades();
        }

    }

    arccos(){
        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            super.arccos();
                
                this.mostrarUnidades();
        }

    }

    changeSign(){
        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            super.changeSign();
                
                this.mostrarUnidades();
        }

    }

    enter(){
        let und = document.querySelector('input[type=text][name=\"undActual\"]').value;
        if(und === ""){
            alert("SELECCIONA UNIDAD");
            return;
        }

        super.enter();

        this.pilaUnidad.push(und);
        
        this.mostrarUnidades();

    }

    vaciar(){
        this.pilaNumeros.vaciar();
        
        document.querySelector('input[type=text][name=\"currentnum\"]').value = "";
        document.querySelector('textarea[name=\"pantalla\"]').value = "";
        document.querySelector('input[type=text][name=\"undActual\"]').value = "";
        document.querySelector('textarea[name=\"pnUnidades\"]').value = "";
    }

    unidadesMillas(){


        document.querySelector('input[type=text][name=\"undActual\"]').value = "MILLAS";

    }

    unidadesKm(){
        document.querySelector('input[type=text][name=\"undActual\"]').value = "KM";

    }

    aMillas(){

        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            let variable = this.pilaNumeros.pop();
            let unidad = this.pilaUnidad.pop();

            if(unidad === "KM"){

                variable = variable / 1.609;
                unidad = "MILLAS";
            }

            this.pilaNumeros.push(variable);
            this.pilaUnidad.push(unidad);


            super.mostrar();
            this.mostrarUnidades();
        }



    }

    aKM(){

        if(this.pilaNumeros.size() >= 1 && this.pilaUnidad.size() >= 1){

            let variable = this.pilaNumeros.pop();
            let unidad = this.pilaUnidad.pop();

            if(unidad === "MILLAS"){

                variable = variable * 1.609;
                unidad = "KM";
            }

            this.pilaNumeros.push(variable);
            this.pilaUnidad.push(unidad);


            super.mostrar();
            this.mostrarUnidades();
        }

    }


}



var pilaNumeros = new Pila();
var pilaUnidad = new Pila();
calculadoraRPN = new CalculadoraUnidadesRPN(pilaNumeros,pilaUnidad);



document.addEventListener('keydown', function (event) {
    if (event.key === '+') {
        calculadoraRPN.suma();
    }
    if (event.key === '-') {
        calculadoraRPN.resta();
    }
    if (event.key === '/') {
        calculadoraRPN.division();
      }
    if (event.key === '*') {
        calculadoraRPN.multiplicacion();
    }
    if(event.key >= '0' && event.key <= '9'){

        calculadoraRPN.digito(Number(event.key));

}
    if(event.key === 'Enter'){//Enter
        event.preventDefault();
        calculadoraRPN.enter();
    }
    if(event.key === 'Delete'){//Borrar todo
        event.preventDefault();
        calculadoraRPN.vaciar();
    }
    
  
  });