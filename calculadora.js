const display= document.querySelector(".display");
const btn= document.querySelectorAll(".btn");

btn.forEach(boton=>{
    boton.addEventListener("click", ()=>{
const botonApretado= boton.textContent;

if(boton.id ==="c"){
    display.textContent= "0";
    return;
}
if(boton.id==="borrar"){
    if(display.textContent.length === "1"|| display.textContent==="err"){
        display.textContent="0";
        
    }else{
        display.textContent= display.textContent.slice(0, -1);
      
    }
    return;

    
}
if(boton.id==="igual"){
    try {
        display.textContent= eval(display.textContent);
    } catch{
        display.textContent= "error";
    }
    return;
}

if(display.textContent==="0" ||display.textContent==="err" ){

    display.textContent= botonApretado;
}else{
    display.textContent +=botonApretado;
}
})
})