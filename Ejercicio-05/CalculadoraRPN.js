


class CalculadoraRPN{

    
    constructor(pila){
        this.pila = pila;
    }
    
    

   
    mostrar(){
        if(!this.pila.vacio()){
            document.querySelector('textarea[name=\"pantalla\"]').innerHTML = this.pila.printStack(this.pila);
            
        }
       
        
    }


    digito(x){
        
       document.querySelector('input[type=text][name=\"currentnum\"]').value += x;
        
    }

    suma(){
        if(this.pila.size() >= 2){
            this.pila.push(this.pila.pop()+this.pila.pop());

            this.mostrar();
        }
    }


    resta(){
        if(this.pila.size() >= 2){
            this.pila.push(this.pila.pop()-this.pila.pop());
            this.mostrar();
        }

    }


    multiplicacion(){

        if(this.pila.size() >= 2){
            this.pila.push(this.pila.pop()*this.pila.pop());
            this.mostrar();
        }

    }

    division(){

        if(this.pila.size() >= 2){
            this.pila.push(this.pila.pop()/this.pila.pop());
             this.mostrar();
        }

    }

    sin(){

        if(this.pila.size() >= 1){
            this.pila.push(Math.sin(this.pila.pop()));
            this.mostrar();
        }

    }

    cos(){
        if(this.pila.size() >= 1){
            this.pila.push(Math.cos(this.pila.pop()));
            this.mostrar();
        }

    }

    tan(){
        if(this.pila.size() >= 1){
            this.pila.push(Math.tan(this.pila.pop()));
            this.mostrar();
        }


    }

    arcsin(){
        if(this.pila.size() >= 1){
            this.pila.push(Math.asin(this.pila.pop()));
            this.mostrar();
        }

    }

    arctan(){

        if(this.pila.size() >= 1){
            this.pila.push(Math.atan(this.pila.pop()));
            this.mostrar();
        }

    }

    arccos(){
        if(this.pila.size() >= 1){
            this.pila.push(Math.acos(this.pila.pop()));
            this.mostrar();
        }

    }

    changeSign(){
        if(this.pila.size() >= 1){
            this.pila.push(this.pila.pop() * (-1));
            this.mostrar();
        }

    }

    enter(){
        this.pila.push(Number(document.getElementById('currentnum').value));
       document.querySelector('input[type=text][name=\"currentnum\"]').value = "";
        this.mostrar();
    }

    vaciar(){
        this.pila.vaciar();
       document.querySelector('input[type=text][name=\"currentnum\"]').value = "";
        document.querySelector('textarea[name=\"pantalla\"]').innerHTML = "";
    }

}
var pila = new Pila();
calculadoraRPN = new CalculadoraRPN(pila);



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