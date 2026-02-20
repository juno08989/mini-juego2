// 1. Elementos que controlamos
const botonInicio = document.getElementById('start-button');
const botonSiguiente = document.getElementById('next-button'); // El nuevo cable
const pantallaInicio = document.getElementById('start-screen');
const pantallaJuego = document.getElementById('game-screen');
const imagenKitty = document.getElementById('kitty-image');
const textoMensaje = document.getElementById('love-message');

// 2. Tu lista de sorpresas (Puedes añadir todas las que quieras aquí)
const sorpresas = [
    {
        foto: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXhkZ2dvbzJlMnllcWFzOWQ0bGNhOTVvdnR6YmNzNWRtNjVxOXRmMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kZqbBT64ECtjy/giphy.gif', 
        frase: '¡Eres la persona más linda del mundo! 🎀😍'
    },
    {
        foto: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmNhdGM5cnlqcGZqc3Fhb20wcTkydW50bTRvdjl2dHJveG1tbjhiYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/92YG8KKSjYhMc/giphy.gif', 
        frase: 'Sabes q siempre estare contigo mi amor. 💗'
    },
    {
        foto: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDFscXA1OTF1cjlqYmprcGZrNGtzNW11YzhtYmUxb3hwbzZ2Z3dxcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7nVxy5Npn3ARFPtjgv/giphy.gif', 
        frase: 'Contigo todo es más bonito. 💕'
    }
];

let indiceActual = 0; // Esto lleva la cuenta de en qué mensaje vamos

// 3. FUNCIÓN PARA MOSTRAR LA SORPRESA
function mostrarSorpresa() {
    imagenKitty.src = sorpresas[indiceActual].foto;
    textoMensaje.innerText = sorpresas[indiceActual].frase;
}

// 4. CLIC EN EL CORAZÓN INICIAL
botonInicio.addEventListener('click', function() {
    pantallaInicio.classList.add('hidden');
    pantallaJuego.classList.remove('hidden');
    mostrarSorpresa(); // Mostramos la primera
});

// 5. CLIC EN EL BOTÓN SIGUIENTE (Aquí está la magia)
botonSiguiente.addEventListener('click', function() {
    indiceActual++; // Sumamos 1 a la cuenta
    
    // Si llegamos al final de la lista, volvemos al principio
    if (indiceActual >= sorpresas.length) {
        indiceActual = 0;
    }
    
    mostrarSorpresa(); // Actualizamos la imagen y el texto
});