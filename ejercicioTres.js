function calculaTemperaturaMedia (temperaturaMinima,temperaturaMaxima){

    let temperaturaMin = parseFloat(temperaturaMinima);
    let temperaturaMax = parseFloat(temperaturaMaxima);

    let temperaturaMedia = (temperaturaMinima + temperaturaMaxima) / 2;

    return (temperaturaMedia);    
}

    console.log (calculaTemperaturaMedia(24, 32));