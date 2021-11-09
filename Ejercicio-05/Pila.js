class Pila {
    constructor(){
        this.datos = [];
        this.cima = -1;
    }

    push(element) {
        
        this.datos.push(element);
        this.cima += 1;
    }

    pop(){
        if(!this.vacio()){
            this.cima -= 1;
            return this.datos.pop();
        }
       
    }

    get(x){
        if(x >= this.size()-1){
            return this.datos[x];
        }
    }

    size(){
        return this.cima+1;
    }

    vacio(){
        return this.cima < 0;
    }

    printStack(s)//Param is an stack
    {
        var arrayAux = [];
        let str = "";
        // If stack is empty then return
        if (s.size() == 0)
            return;
        
        let i = 0;
        var elem;
        for(i = 0; i<this.size();i++){
            elem = this.datos.pop();
            str += "("+i+": " + elem +") - ";
            arrayAux.push(elem);
        }

        for(i = 0; i<this.size();i++){
            elem = arrayAux.pop();
            
            this.datos.push(elem);
        }

        return str;
       
    }

    vaciar(){
        let i = 0;
        for(i = 0; i<this.size();i++){
            this.datos.pop();
           
        }

        this.cima = -1;
    }
}