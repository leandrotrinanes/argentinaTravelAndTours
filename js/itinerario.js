var itinerarios= [];
var dia= [];
/* var cod= 24;
var lang= "es"; */
var seleccionar = [];



//levantar con ajax itinerarios mas dias

$.ajax({
    type: "get",
    url: "../json/days.json",
    dataType: "json",
    success: function (respuesta) {
        dia = respuesta;
      
        $.ajax({
          type: "get",
          url: "../json/itinerarios.json",
          dataType: "json",
          success: function (respuesta) {
              itinerarios = respuesta;

              seleccionar = JSON.parse(localStorage.getItem("itinerario"));
              
              MostrarItems(seleccionar[0],seleccionar[1]);
          }
        });
      
    }
  });


  function MostrarItems(cod, lang){
 
    let imprimir ="";

    /* Titulo */
    imprimir = imprimir + `<h2 class="text-center destinos__paquetes">${itinerarios[cod-1].destinos}</h2>`;
    imprimir = imprimir + `<h3 class="text-center ">${itinerarios[cod-1].dias} dias</h3>`;
    /* Carrousel de imagenes */

    
    /**Aca armo la lista con collapsable items */
    imprimir = imprimir + `<div class="accordion" id="accordionExample">`;

    for (let i=1; i<=itinerarios[cod-1].itinerario.length;i++){
        imprimir = imprimir + 
        `  
        <div class="accordion-item">
              <h2 class="accordion-header" id="heading-${i}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${i}" aria-expanded="true" aria-controls="collapse-${i}">
                    DIA ${i}: ${dia[parseInt (itinerarios[cod-1].itinerario[i-1])-1].titulo} | ${dia[parseInt (itinerarios[cod-1].itinerario[i-1])-1].subtitulo }
                </button>
              </h2>
              <div id="collapse-${i}" class="accordion-collapse collapse" aria-labelledby="heading-${i}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="row">
                      <img class="col col-md-6" src="${dia[parseInt (itinerarios[cod-1].itinerario[i-1])-1].url }" alt="buenos aires dia - ${i}">
                      <p class="col col-md-6">${dia[parseInt (itinerarios[cod-1].itinerario[i-1])-1].detalle[lang] }</p>
                  </div>
                </div>
              </div>
            </div>
        `;
                                
    }
    imprimir = imprimir + `</div>`;

    $('#mostarItems').html(imprimir);
  
  }  

