
const Entradas ={
    Entrada1:"atun",
    Entrada2 : "pozole",
    Entrada3: "tacosdorados"
}

document.getElementById("btnEntrada1").addEventListener('click', ()=>{
window.location.href="src/entrada.html?entrada="+Entradas.Entrada1;

})

document.getElementById("btnEntrada2").addEventListener('click', ()=>{
    window.location.href="src/entrada.html?entrada="+Entradas.Entrada2;
    
    })

    document.getElementById("btnEntrada3").addEventListener('click', ()=>{
        window.location.href="src/entrada.html?entrada="+Entradas.Entrada3;
        
        })
        