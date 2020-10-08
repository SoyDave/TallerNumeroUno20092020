let registrarAprendiz = (nombre,edad,planeta,estatura,clasificarAprendiz) => { 
    
    let padawan={
        nombrePadawan:nombre,
        edadPadawan:edad,
        planetaPadawan:planeta,
        estaturaPadawan:estatura,
    }

    if(edad<15){
        let mensaje="Entrenamiento de la fuerza";
        clasificarAprendiz(mensaje);
    }else{
        let mensaje="entrenamiento con el sable de luz";
        clasificarAprendiz(mensaje);
    }

}

registrarAprendiz("Juan",26,"Tierra","182Cm",(mensaje)=>{

    console.log(mensaje);
    
});