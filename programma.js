

let foglio = document.getElementById("foglio");

let disegno = foglio.getContext("2d");

disegno.fillStyle = "pink"

disegno.fillRect(199,199, 100, 50)
 
disegno.fillStyle = "red"

disegno.fillRect(200, 200, 50, 100) 

disegno.fillStyle = "blue"

disegno.fillRect(230, 230, 50, 100)