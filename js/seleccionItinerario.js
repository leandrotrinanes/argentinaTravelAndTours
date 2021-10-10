var itinerario = [];

function FiltrarItinerario(cod){

    itinerario[0]=cod;
    itinerario[1]="es";
    localStorage.setItem("itinerario", JSON.stringify(itinerario));
}
