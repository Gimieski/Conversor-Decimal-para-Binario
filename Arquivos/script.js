var capturar="";
function converterDecimal(){
    capturar=parseInt(document.querySelector("#num1").value);
    const binario=capturar.toString(2)
    const res=document.querySelector("#resultado");
    res.innerHTML=binario;
}

function converterBinario(){
    capturar=parseInt(document.querySelector("#num2").value,2);
    const decimal=capturar.toString(10);
    const res=document.querySelector(".resultado2");
    res.innerHTML=decimal;
}
