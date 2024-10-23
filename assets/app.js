/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import 'bootstrap';


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animationText");
    const text = "I'M DIOP MOUHAMED";
    let index = 0;

    function typeWriter() {
        textElement.textContent += text.charAt(index);
        index++;
        if (index < text.length) {
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});

///////////////////////////////CURSOR//////////////////////////////
// // Récupération des éléments HTML du point et du cercle
// const cursor = document.getElementById('cursor');
// const circle = document.getElementById('circle');

// // Fonction qui met à jour la position des éléments selon le mouvement de la souris
// document.addEventListener('mousemove', (e) => {
//     // Position du petit point (rapide et proche de la souris)
//     cursor.style.left = e.pageX + 'px';
//     cursor.style.top = e.pageY + 'px';
    
//     // Position du cercle avec un léger décalage pour créer un effet de traînée
//     circle.style.left = e.pageX - 25 + 'px'; // Décalage pour centrer le cercle autour de la souris
//     circle.style.top = e.pageY - 25 + 'px';
// });

