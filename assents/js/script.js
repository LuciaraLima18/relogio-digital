const hora = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    hora.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    
    function abrirAlerta(){
        alert("Cuidado para nao se atrasar!")
        setInterval (abrirAlerta, 60000);

    }
})

