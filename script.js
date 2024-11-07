const lampadina = document.getElementById("lamp");
const accendiSpegniBtn = document.getElementById("Btn");

// Funzione on/off
accendiSpegniBtn.addEventListener("click", function() {

    // Se la lampadina è bianca allora impostala = a gialla e cambia il testo al suo interno
    if (lampadina.src.includes("img/white_lamp.png")) {
        lampadina.src = "./img/yellow_lamp.png";
        accendiSpegniBtn.innerText = "Basta luce";

    // Se la lampadina è gialla allora impostala = a bianca e cambia il testo al suo interno
    } else {
        lampadina.src = "./img/white_lamp.png";
        accendiSpegniBtn.innerText = "E luce fu";
    }   
});


