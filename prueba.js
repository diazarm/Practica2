const encuesta = [];
 
function encuestas(){
    var nombreEncuesta = prompt(`Nombre de la encuesta`)
    var cantPreguntas = Number(prompt(`Ingrese la cantidad de preguntas en la encuesta ${nombreEncuesta}`))
    let nuevaEncuesta = {
        nameEncuesta: nombreEncuesta,
        preguntas: [] // Aquí se almacenarán las preguntas
    };
    for (let i=0; i<cantPreguntas; i++){
        let pregunta = prompt(`Ingrese la pregunta ${i+1} de la encuesta ${nombreEncuesta}`)
        nuevaEncuesta.preguntas.push(pregunta)
    }
    encuesta.push(nuevaEncuesta)
    //console.log(encuesta[0].preguntas)
}

encuestas()
//encuestas()
//console.log(encuesta);
