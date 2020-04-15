export function calcularPeso(peso, planeta, unidad) {
    // gravedad de cada cuerpo astronómico.
    // gravity for each astronomical body.
    let gravedad_tierra = 9.8, 
        gravedad_luna = 1.62,
        gravedad_marte = 3.7,
        gravedad_saturno = 10.4,
        gravedad_jupiter = 24.8,
        gravedad_agujero = 1300000,
        peso_final = null;

    let datoFinal = {
        peso_final,
        planeta,
        unidad
    };
    // calcular el peso en cada planeta y retornar resultados
    // calculate the weight in each planet and return results
    switch (planeta) {
        case "luna":
            peso_final = peso * gravedad_luna / gravedad_tierra;
            console.log(`tu peso en ${planeta} es ${peso_final.toFixed(1)} ${unidad}`);
            
            datoFinal.peso_final = peso_final.toFixed(1);
            datoFinal.planeta = planeta;
            datoFinal.unidad = unidad;

            return datoFinal;
        case "marte":
            peso_final = peso * gravedad_marte / gravedad_tierra;
            console.log(`tu peso en ${planeta} es ${peso_final.toFixed(1)} ${unidad}`);
            
            datoFinal.peso_final = peso_final.toFixed(1);
            datoFinal.planeta = planeta;
            datoFinal.unidad = unidad;

            return datoFinal;
        case "saturno":
            peso_final = peso * gravedad_saturno / gravedad_tierra;
            console.log(`tu peso en ${planeta} es ${peso_final.toFixed(1)} ${unidad}`);
            
            datoFinal.peso_final = peso_final.toFixed(1);
            datoFinal.planeta = planeta;
            datoFinal.unidad = unidad;

            return datoFinal;
        case "jupiter":
            peso_final = peso * gravedad_jupiter / gravedad_tierra;
            console.log(`tu peso en ${planeta} es ${peso_final.toFixed(1)} ${unidad}`);
            
            datoFinal.peso_final = peso_final.toFixed(1);
            datoFinal.planeta = planeta;
            datoFinal.unidad = unidad;

            return datoFinal;
        case "agujero":
                peso_final = peso * gravedad_agujero / gravedad_tierra;
                console.log(`tu peso en ${planeta} es ${peso_final.toFixed(1)} ${unidad}`);
                
                datoFinal.peso_final = peso_final.toFixed(1);
                datoFinal.planeta = planeta;
                datoFinal.unidad = unidad;
    
                return datoFinal;

            default:
            console.log("error: los datos han sido alterados");
            break;
    }
}