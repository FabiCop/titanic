document.addEventListener('DOMContentLoaded', function() {
    caricaBudget();
    caricaObiettiviRisparmio();
    caricaSpese();

    document.getElementById('form-budget').addEventListener('submit', function(e) {
        e.preventDefault();
        const categoria = document.getElementById('categoria-budget').value;
        const importo = document.getElementById('importo-budget').value;
        aggiungiBudget(categoria, importo);
        salvaBudget();
        visualizzaBudget();
    });

    document.getElementById('form-obiettivi-risparmio').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome-obiettivo').value;
        const importo = document.getElementById('importo-obiettivo').value;
        aggiungiObiettivoRisparmio(nome, importo);
        salvaObiettiviRisparmio();
        visualizzaObiettiviRisparmio();
    });

    document.getElementById('form-spese').addEventListener('submit', function(e) {
        e.preventDefault();
        const data = document.getElementById('data').value;
        const descrizione = document.getElementById('descrizione').value;
        const categoria = document.getElementById('categoria').value;
        const importo = document.getElementById('importo').value;
        aggiungiSpesa(data, descrizione, categoria, importo);
        salvaSpese();
        visualizzaSpese();
    });
});

let budget = [];
let obiettiviRisparmio = [];
let spese = [];

function aggiungiBudget(categoria, importo) {
    budget.push({ categoria, importo });
}

function salvaBudget() {
    localStorage.setItem('budget', JSON.stringify(budget));
}

function caricaBudget() {
    const budgetSalvati = JSON.parse(localStorage.getItem('budget'));
    if (budgetSalvati) {
        budget = budgetSalvati;
        visualizzaBudget();
    }
}

function visualizzaBudget() {
    const lista = document.getElementById('lista-budget');
    lista.innerHTML = '';
    budget.forEach(function(b) {
        const div = document.createElement('div');
        div.textContent = `Categoria: ${b.categoria}, Budget: €${b.importo}`;
        lista.appendChild(div);
    });
}

function aggiungiObiettivoRisparmio(nome, importo) {
    obiettiviRisparmio.push({ nome, importo });
}

function salvaObiettiviRisparmio() {
    localStorage.setItem('obiettiviRisparmio', JSON.stringify(obiettiviRisparmio));
}

function caricaObiettiviRisparmio() {
    const obiettiviSalvati = JSON.parse(localStorage.getItem('obiettiviRisparmio'));
    if (obiettiviSalvati) {
        obiettiviRisparmio = obiettiviSalvati;
        visualizzaObiettiviRisparmio();
    }
}

function visualizzaObiettiviRisparmio() {
    const lista = document.getElementById('lista-obiettivi-risparmio');
    lista.innerHTML = '';
    obiettiviRisparmio.forEach(function(o) {
        const div = document.createElement('div');
        div.textContent = `Obiettivo: ${o.nome}, Importo: €${o.importo}`;
        lista.appendChild(div);
    });
}

function aggiungiSpesa(data, descrizione, categoria, importo) {
    spese.push({ data, descrizione, categoria, importo });
}

function salvaSpese() {
    localStorage.setItem('spese', JSON.stringify(spese));
}

function caricaSpese() {
    const speseSalvate = JSON.parse(localStorage.getItem('spese'));
    if (speseSalvate) {
        spese = speseSalvate;
        visualizzaSpese();
    }
}

function visualizzaSpese() {
    const lista = document.getElementById('lista-spese');
    lista.innerHTML = '';
    spese.forEach(function(s) {
        const div = document.createElement('div');
        div.textContent = `Data: ${s.data}, Descrizione: ${s.descrizione}, Categoria: ${s.categoria}, Importo: €${s.importo}`;
        lista.appendChild(div);
    });
}
