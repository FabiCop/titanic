document.addEventListener('DOMContentLoaded', function() {
    const formSpese = document.getElementById('form-spese');
    const speseContainer = document.getElementById('spese-container');
    let spese = [];

    formSpese.addEventListener('submit', function(e) {
        e.preventDefault();
        const descrizione = document.getElementById('descrizione').value;
        const importo = document.getElementById('importo').value;
        const data = document.getElementById('data').value;

        spese.push({ descrizione, importo, data });
        aggiornaElencoSpese();
    });

    function aggiornaElencoSpese() {
        speseContainer.innerHTML = '';
        spese.forEach(spesa => {
            const spesaElement = document.createElement('div');
            spesaElement.textContent = `${spesa.descrizione} - €${spesa.importo} - ${spesa.data}`;
            speseContainer.appendChild(spesaElement);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Precedente implementazione...
    
    const formRisparmio = document.getElementById('form-risparmio');
    const risultatoRisparmio = document.getElementById('risultato-risparmio');
    let obiettivoRisparmio = 0;
    let sommaAccantonata = 0;

    formRisparmio.addEventListener('submit', function(e) {
        e.preventDefault();
        obiettivoRisparmio = parseFloat(document.getElementById('totale-risparmio').value);
        const sommaDaAccantonare = parseFloat(document.getElementById('somma-accantonare').value);
        sommaAccantonata += sommaDaAccantonare;
        
        aggiornaRisparmio();
    });

    function aggiornaRisparmio() {
        risultatoRisparmio.innerHTML = `Totale Accantonato: €${sommaAccantonata.toFixed(2)} su un obiettivo di €${obiettivoRisparmio.toFixed(2)}`;
        
        if (sommaAccantonata >= obiettivoRisparmio) {
            risultatoRisparmio.innerHTML += `<br>Hai raggiunto il tuo obiettivo di risparmio!`;
        }
    }
});
