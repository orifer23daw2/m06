window.onload = function() {
let guanyades = 0;
let perdudes = 0;
let empatades = 0;

function jugarPartida() {
    const pedra = document.getElementById("pedra").checked;
    const paper = document.getElementById("paper").checked;
    const tisores = document.getElementById("tisores").checked;

    if (!pedra && !paper && !tisores) {
        document.getElementById("resultat").innerText = "Has perdut el joc. Selecciona una opció.";
        return;
    }

    const opcions = ["pedra", "paper", "tisores"];
    const seleccioApp = opcions[Math.floor(Math.random() * 3)];

    if ((pedra && seleccioApp === "tisores") ||
        (paper && seleccioApp === "pedra") ||
        (tisores && seleccioApp === "paper")) {
        guanyades++;
        document.getElementById("resultat").innerText = "L'ordinador ha escollit "+seleccioApp+". Has guanyat el joc!";
        
    } else if ((pedra && seleccioApp === "paper") ||
               (paper && seleccioApp === "tisores") ||
               (tisores && seleccioApp === "pedra")) {
        perdudes++;
        document.getElementById("resultat").innerText = "L'ordinador ha escollit "+seleccioApp+". Has perdut el joc!";
        
    } else {
        document.getElementById("resultat").innerText = "L'ordinador ha escollit el mateix. "+"Empat!";
        
        empatades++;
        
    }


    document.getElementById("guanyades").innerText = `Guanyades: ${guanyades}`;
    document.getElementById("perdudes").innerText = `Perdudes: ${perdudes}`;
    document.getElementById("empatades").innerText = `Empatades: ${empatades}`;
}

document.getElementById("novaJugada").addEventListener("click", jugarPartida);
document.getElementById("esborraSelecció").addEventListener("click", esborrarSeleccio);
document.getElementById("inicialitza").addEventListener("click", inicialitzarComptadors);
document.getElementById("esborraResultat").addEventListener("click", esborrarResultat);

function esborrarSeleccio() {
    document.getElementById("pedra").checked = false;
    document.getElementById("paper").checked = false;
    document.getElementById("tisores").checked = false;
}

function inicialitzarComptadors() {
    guanyades = 0;
    perdudes = 0;
    empatades = 0;
    document.getElementById("guanyades").innerText = "";
    document.getElementById("perdudes").innerText = "";
    document.getElementById("empatades").innerText = "";
}

function esborrarResultat() {
    document.getElementById("resultat").innerText = "";
}
}