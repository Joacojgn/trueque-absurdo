
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
  "una tostadora que te ignora cuando más la necesitás"
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
  "un rite donde con la materia de sicoloni desaprobada"
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

const Lopa= [
  "una cinta metrica que le resta 23 centimetros a todo",
  "el superpoder de sumarle 23 centimetros a todos",
  "un futuro donde la copachon es la mayor copa de futbol del mundo",
];

const Franco= [
  "trueque justo, Franco Colapinto",
  "un carro de formula 1 roto",
  "un dron que solo vuela cuando comes facturas",
  "unos scones secos y rancios sin el toque del gordo"
];



const alias = {
  nacho: ["nacho", "nachito", "nacho garcia", "nachito garcia"],
  mauro: ["mauro", "mauri", "mauricio", "mau", "mauro garcia", "mau garcia"],
  tejeda: ["tejeda", "santutu", "santi teje"],
  baza: ["vicky", "vicki", "vicky baza","baza"],
  raul: ["raul", "victor"],
  isidro: ["isidro", "ichi", "isidrost","stabille"],
  lopa: ["lopa", "lopachon", "copachon"],
  franco: ["franco", "garabato"]
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
    respuesta = elegirAleatorio(Franco);
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