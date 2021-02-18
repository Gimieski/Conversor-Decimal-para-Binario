var capturar="";
       
       function sla(){
        capturar=parseInt(document.querySelector("#num").value);
        //função pega o valor na hora 
        if(isNaN(capturar)){
            alert("Digite algo valido")
        }else{
        let binario=capturar.toString(2)
        let res=document.querySelector("#resultado");
        res.innerHTML=binario;
        }
    }