
localStorage.removeItem("inventario");

const respuestasGenerales = [
  "una tostadora cuántica rota",
  "un servo que grita cuando lo mirás",
  "una licencia para llorar en público",
  "un LED que solo prende si estás triste",
  "una caja que contiene otra caja",
  "una resistencia emocional de 10kΩ",
  "un sensor de sarcasmo defectuoso",
  "una pantalla que muestra tu arrepentimiento",
  "una batería que se carga con tus errores",
  "un manual para entender a los gatos",
  "una piedra que te juzga en silencio",
  "una app que solo funciona cuando no la necesitás",
  "un cable que se enrosca solo por maldad",
  "una promesa rota en formato .zip",
  "una calculadora que te da consejos de vida",
  "una nube que te sigue a todos lados",
  "una silla que desaparece cuando querés sentarte",
  "un espejo que te muestra tus decisiones dudosas",
  "una planta que te grita si no la regás",
  "una caja de recuerdos que no son tuyos",
  "la fruta gomu gomu",
  "una app de citas donde todos son de tu mismo sexo",
  "una licencia de conducir expirada en 1992",
  "un cigarrillo",
  "una tostadora que imprime memes",
  "una lámpara que te juzga con su luz",
  "una bufanda que te susurra tus errores",
  "una licuadora que canta reggaetón",
  "una radio que transmite tus pensamientos",
  "una cortina que se abre cuando mentís",
  "una taza que se llena con tus lágrimas",
  "una mochila que te abandona en momentos difíciles",
  "una heladera que enfría tus relaciones",
  "una escoba que barre tus recuerdos",
  "una billetera que te da consejos financieros pasivo-agresivos",
  "una remera que cambia de color según tu autoestima",
  "una lapicera que escribe tus pensamientos más incómodos",
  "una caja que contiene el sonido del silencio",
  "una silla gamer que te critica mientras jugás",
  "una tostadora que te pregunta si estás bien",
  "una lámpara que te recuerda tus ex",
  "una calculadora que te cobra por cada operación",
  "una ventana que muestra lo que pudo haber sido",
  "una tostadora que solo funciona si pedís perdón",
  "una piedra que te acompaña pero no te entiende",
  "una tostadora que te bloquea en redes sociales",
  "una linterna que ilumina tus excusas",
  "una tostadora que solo tuesta tus expectativas",
  "una caja que contiene una tostadora que contiene otra caja",
  "una tostadora que te ignora cuando más la necesitás",
  "una placa pizoelectrica que no es pizo ni es electrica",
  "una remera azul rota, vieja y con olor a humedad",
  "computadoras de abordo pero no son computadoras ni estan abordo",
  "una tostadora que imprime tus traumas en pan",
  "un servo que baila cuando lo ignorás",
  "una licencia para procrastinar legalmente",
  "un LED que parpadea con tus inseguridades",
  "una caja que contiene una duda existencial",
  "una resistencia de 1MΩ a los compromisos",
  "un sensor de empatía que no funciona en reuniones",
  "una pantalla que muestra tus conversaciones no enviadas",
  "una batería que se descarga con tus pensamientos negativos",
  "un manual para entender a los humanos (versión beta)",
  "una piedra que te da consejos financieros",
  "una app que se actualiza justo cuando la necesitás",
  "un cable que se enrosca por ansiedad social",
  "una promesa rota en formato .rar",
  "una calculadora que te pregunta si sos feliz",
  "una nube que te spoilea el final de tu día",
  "una silla que te hace ghosting",
  "un espejo que te devuelve tu versión 2012",
  "una planta que te exige validación emocional",
  "una caja de recuerdos que te reclama atención",
  "una fruta que te convierte en procrastinador profesional",
  "una app de citas donde todos son bots",
  "una licencia de conducir emitida por un gato",
  "un cigarrillo que te da consejos de vida",
  "una tostadora que imprime tus errores en formato PDF",
  "una lámpara que te hace gaslighting con su brillo",
  "una bufanda que te recuerda tus exámenes fallidos",
  "una licuadora que grita tus contraseñas",
  "una radio que transmite tus pensamientos en AM",
  "una cortina que se cierra cuando decís la verdad",
  "una taza que se llena con tus excusas",
  "una mochila que te juzga por tu historial de navegación",
  "una heladera que te ignora cuando estás triste",
  "una escoba que barre tus logros",
  "una billetera que invierte en criptomonedas sin tu permiso",
  "una remera que cambia de color según tu nivel de ansiedad",
  "una lapicera que escribe en idiomas que no conocés",
  "una caja que contiene el sonido de tu última discusión",
  "una silla gamer que te spoilea el final del juego",
  "una tostadora que te pregunta si ya superaste a tu ex",
  "una lámpara que te recuerda tus decisiones dudosas",
  "una calculadora que te cobra en emociones",
  "una ventana que muestra lo que nunca dijiste",
  "una tostadora que solo funciona si pedís ayuda",
  "una piedra que te bloquea en redes sociales",
  "una linterna que ilumina tus contradicciones",
  "una tostadora que solo tuesta tus arrepentimientos",
  "una caja que contiene una tostadora que contiene una duda",
  "una tostadora que te deja en visto",
  "una placa piezoeléctrica que vibra con tus pensamientos",
  "una remera que huele a tus decisiones pasadas",
  "computadoras de abordo que solo funcionan en sueños",
  "una tostadora que imprime tus tweets eliminados",
  "una planta que florece con tus errores",
  "una app que te recuerda tus momentos incómodos",
  "una piedra que te pregunta si sos feliz",
  "una silla que se ríe cuando te sentás",
  "una batería que se carga con tus arrepentimientos",
  "una radio que transmite tus pensamientos en Morse",
  "una cortina que se abre cuando te arrepentís",
  "una caja que contiene el eco de tus decisiones",
  "una tostadora que te exige disculpas antes de funcionar",
  "una calculadora que solo suma tus errores",
  "una linterna que ilumina tus contradicciones internas",
  "una silla que te pregunta si realmente querés sentarte",
  "una planta que florece cuando mentís",
  "una caja que contiene una versión alternativa de vos",
  "una remera que cambia de color según tu historial de búsqueda",
  "una piedra que te da consejos sobre relaciones tóxicas",
  "una app que te bloquea si no le das las gracias",
  "una mochila que te abandona en momentos de éxito",
  "una taza que se llena con tus pensamientos no expresados",
  "una cortina que se abre cuando decís algo incómodo",
  "una radio que transmite tus sueños en tiempo real",
  "una heladera que te juzga por comer después de las 12",
  "una licuadora que te pregunta por tu propósito en la vida",
  "una lámpara que te recuerda tus errores de 2016",
  "una tostadora que imprime tus arrepentimientos en pan",
  "una caja que contiene una tostadora que contiene una promesa rota",
  "una silla gamer que te critica por no tener logros desbloqueados",
  "una lapicera que escribe tus pensamientos más oscuros",
  "una billetera que te da consejos financieros basados en memes",
  "una planta que te ignora si no le hablás con cariño",
  "una piedra que te sigue en redes sociales",
  "una app que te hace ghosting cuando más la necesitás",
  "una tostadora que solo funciona si estás en paz con vos mismo",
  "una lámpara que te bloquea si no meditás",
  "una calculadora que te responde con frases motivacionales",
  "una ventana que muestra lo que otros piensan de vos",
  "una caja que contiene el sonido de tu última mentira",
  "una tostadora que imprime tus pensamientos en pan de centeno",
  "una silla que desaparece si dudás de vos mismo",
  "una mochila que te recuerda tus metas olvidadas",
  "una taza que se llena con tus promesas incumplidas",
  "una radio que transmite tus contradicciones en estéreo",
  "una cortina que se abre cuando te arrepentís de algo",
  "una planta que florece con tus inseguridades",
  "una piedra que te da spoilers de tu futuro",
  "una app que te pregunta si sos feliz cada 5 minutos",
  "una tostadora que te manda mensajes pasivo-agresivos",
  "una lámpara que te hace gaslighting con su intensidad",
  "una calculadora que te cobra por cada pensamiento negativo",
  "una silla gamer que te juzga por tu KD ratio",
  "una caja que contiene una tostadora que contiene una duda existencial",
  "una lapicera que escribe en lenguaje de tus traumas",
  "una billetera que invierte en tus miedos",
  "una planta que florece cuando te equivocás",
  "una piedra que te bloquea si no la entendés",
  "una app que te exige validación emocional",
  "una tostadora que imprime tus tweets eliminados",
  "una lámpara que te recuerda tus errores cada vez que la encendés",
  "una calculadora que solo funciona si estás triste",
  "una ventana que muestra lo que pudo haber sido si no procrastinabas",
  "una silla que te pregunta si te merecés descansar",
  "una mochila que te abandona cuando tenés éxito",
  "una taza que se llena con tus excusas más creativas",
  "una radio que transmite tus pensamientos en formato podcast",
  "una cortina que se abre cuando decís la verdad",
  "una planta que florece con tus fracasos",
  "una piedra que te juzga por tus decisiones financieras",
  "una app que te bloquea si no cumplís tus metas",
  "una heladera que solo se abre si confesás tu mayor arrepentimiento",
  "un altavoz Bluetooth que, en lugar de música, reproduce el sonido de tu oportunidad perdida",
  "una llave USB que solo te permite guardar recuerdos que te dan vergüenza",
  "una cafetera que te da un café que sabe a la cantidad de horas de sueño que perdiste",
  "un mouse que se congela cada vez que pensás en el futuro",
  "un teclado que cambia las letras por símbolos cada vez que intentás ser productivo",
  "un paraguas que solo se abre cuando no está lloviendo",
  "una billetera que, en lugar de dinero, contiene pequeñas notas con tus miedos",
  "un espejo que te muestra el rostro de la persona que serías si hubieras tomado otra decisión",
  "una escoba que, al barrer, hace desaparecer tus buenos propósitos",
  "un despertador que te susurra los errores que cometiste el día anterior",
  "una puerta que solo se abre si tenés el coraje de enfrentar lo que hay detrás",
  "una cama que te acusa de ser perezoso",
  "una silla de oficina que te recuerda que podrías estar haciendo algo más importante",
  "una mesa de luz que te proyecta las decisiones dudosas que tomaste",
  "una alfombra mágica que solo te permite viajar a los momentos que más te incomodan",
  "una biblioteca que reorganiza los libros según tus inseguridades",
  "un sillón que vibra al ritmo de tu ansiedad"
];

const respuestasNacho = [
  "un pistacho",
  "una bolsa de pistachos sin abrir",
  "un árbol de pistachos en miniatura",
  "una tostadora que solo tuesta pistachos",
  "trueque justo, el pibito de la familia del futuro",
  "una licencia para cultivar pistachos en Marte",
  "un alfajor Havanna Dubai relleno de pistacho",
  "trueque justo, Mati Prato",
  "una caja fuerte con un solo pistacho adentro",
  "una canción dedicada al pistacho",
  "el documento que te corona como Lord Pistacho Garcia, rey del reino pistacho",
  "trueque justo, Tobi",
  "un rite con la materia de sicoloni desaprobada",
  "un dispenser de pistachos"
];

const respuestasMauro = [
  "un disco de Babasonicos",
  "una foto de Ciro Martinez",
  "un dibujo de Ace de One Piece",
  "un alfajor Gula",
  "una partida de Haxball maldita",
  "un chicle con un tatuaje del Indio",
  "un carnet falso con la edad de 18 años",
  "una compu que nunca puede instalar el Football Manager",
  "trueque justo, Gustavo Cerati",
  "un rite con la materia de Pagano desaprobada"
];

const respuestasTejeda = [
  "una foto de Yabli disfrutando otra rosca de pascua",
  "un soldador que solo suelda con crema pastelera",
  "trueque justo, Fresh de Subway Surfers"
];

const respuestasBaza = [
  "un libro donde todas las frases empiezan con 'Vas a'",
  "yerba Taragüi",
  "la maldición que hace que nunca te saques más de un 9",
  "una beca universitaria para estudiar gastronomía aeroespacial"
];

const respuestasRaul = [
  "un teletransportador que solo te teletransporta a Peru",
  "el ave sagrada de Peru",
  "una carta de Milei diciendo Peru es clave",
  "una estatua de un inca",
  "ceviche podrido",
];

const respuestasIsidro = [
  "un pase para audicionar como Woody en la nueva peli de Toy Story",
  "un nuevo amigo, Buzz Lightyear",
  "una nueva novia, Jessie",
  "un celular que solo puede tener el tono de llamada de brainrot",
  "unos auriculares llenos de cera",
];

const respuestasLopa = [
  "una cinta metrica que le resta 23 centimetros a todo",
  "el superpoder de sumarle 23 centimetros a todos",
  "un futuro donde la copachon es la mayor copa de futbol del mundo",
];

const respuestasFranco = [
  "trueque justo, Franco Colapinto",
  "un carro de formula 1 roto",
  "un dron que solo vuela cuando comes facturas",
  "unos scones secos y rancios sin el toque del gordo",
  "la maldicion donde todos tus compañeros se visten de Astolfo"
];

const respuestasPleper = [
  "una placa de energia pizoelectrica renovable que no es una placa de energia, ni es pizoelectrica ni es renovable",
  "una plantilla UP FEET que fue imprimida en marzo de 2025 y tiene olor al pie de Lopa",
  "una carpeta de campo donde no se registro ninguna tarea",
  "la maldicion donde tu repo del github no puede pasar de los 65 commits",
];



const alias = {
  nacho: ["nacho", "nachito", "nacho garcia", "nachito garcia"],
  mauro: ["mauro", "mauri", "mauricio", "mau", "mauro garcia", "mau garcia"],
  tejeda: ["tejeda", "santutu", "santi teje"],
  baza: ["vicky", "vicki", "vicky baza", "baza"],
  raul: ["raul", "victor"],
  isidro: ["isidro", "ichi", "isidrost", "stabille"],
  lopa: ["lopa", "lopachon", "copachon"],
  franco: ["franco", "garabato"],
  pleper: ["pleper"]
};

let inventario = [];

function truequear() {
  const objeto = document.getElementById("objeto").value.trim();
  const resultado = document.getElementById("resultado");
  const sonidoTrueque = document.getElementById("sonidoTrueque");
  const sonidoError = document.getElementById("sonidoError");
  document.getElementById("btnDevolver").disabled = false;

  if (objeto === "") {
    resultado.innerText = "Tenés que ofrecer algo, aunque sea tu dignidad.";
    sonidoError.play();
    return;
  }

  const lower = objeto.toLowerCase();
  let respuesta;

  if (alias.nacho.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasNacho);
  } else if (alias.mauro.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasMauro);
  } else if (alias.tejeda.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasTejeda);
  } else if (alias.baza.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasBaza);
  } else if (alias.raul.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasRaul);
  } else if (alias.isidro.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasIsidro);
  } else if (alias.lopa.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasLopa);
  } else if (alias.franco.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasFranco);
  } else if (alias.pleper.some(nombre => lower.includes(nombre))) {
    respuesta = elegirAleatorio(respuestasPleper);
  } else {
  
    respuesta = elegirAleatorio(respuestasGenerales);
  }

  resultado.innerText = `A cambio de "${objeto}", recibís ${respuesta}.`;
  sonidoTrueque.play();

  inventario.push({ objeto, respuesta });
  localStorage.setItem("inventario", JSON.stringify(inventario));
  actualizarInventario();
  document.getElementById("objeto").value = "";
}

function elegirAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function actualizarInventario() {
  const lista = document.getElementById("inventario");
  lista.innerHTML = "";
  inventario.slice(-10).reverse().forEach(item => {
    const li = document.createElement("li");
    li.innerText = `Ofreciste "${item.objeto}" → Recibiste ${item.respuesta}`;
    lista.appendChild(li);
  });
}

actualizarInventario();

function mostrarColeccion() {
  const coleccion = document.getElementById("coleccion");
  const objetosUnicos = [...new Set(inventario.map(item => item.respuesta))];
  coleccion.innerHTML = "";

  if (objetosUnicos.length === 0) {
    coleccion.innerText = "Todavía no tenés objetos en tu colección inútil.";
    return;
  }

  objetosUnicos.forEach(obj => {
    const li = document.createElement("li");
    li.innerText = obj;
    coleccion.appendChild(li);
  });
}

function mostrarDevolucion() {
  const reglas = [
    "No se puede devolver porque el objeto ya se encariñó con vos.",
    "Tu objeto fue enviado a otra dimensión.",
    "La tostadora que gestiona devoluciones está ocupada llorando.",
    "Solo se aceptan devoluciones en martes 13 con luna llena.",
    "El objeto fue absorbido por el protocolo de trueque eterno.",
    "Necesitás una licencia interdimensional para devolverlo.",
    "El objeto ya publicó un tweet sobre vos, no hay vuelta atrás.",
    "La devolución requiere un sacrificio emocional que no estás listo para hacer.",
    "Ciclo del trueque: truequeas algo - recibes algo peor - lo truequeas - recibes algo peor",
    "El trueque es sagrado, acaso no te importa los sentimientos del objeto truequeado? Das asco"
  ];

  const mensaje = reglas[Math.floor(Math.random() * reglas.length)];
  const devolucion = document.getElementById("devolucion");
  devolucion.innerText = mensaje;
}
