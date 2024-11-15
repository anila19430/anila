

let foglio = document.getElementById("foglio");

let disegno = foglio.getContext("2d");

disegno.fillStyle = "pink"

disegno.fillRect(199,199, 100, 50)
 
disegno.fillStyle = "violet"

disegno.fillRect(200, 200, 50, 100) 

disegno.fillStyle = " blue"

disegno.fillRect(230, 230, 50, 100)

disegno.fillStyle = "black"

disegno.fillRect(250, 0, 10, 500)

disegno.fillStyle = "black"

disegno.fillRect(0, 250, 500, 10)

disegno.fillStyle = "yellow"

disegno.fillRect(260, 0, 250, 250)

disegno.fillStyle = "pink"

disegno.fillRect(0, 0, 250, 250)

let foglio2 = document.getElementById("foglio2");

let disegno2 = foglio2.getContext("2d");

foglio2.addEventListener('click', (evento)=> {
    disegno2.strokeRect (evento.offsetX, evento.offsetY, 500* Math.random(), 500 * Math.random());

});