"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


// document.addEventListener("DOMContentLoaded", function() {
//     const textElement = document.getElementById("animationText");
//     const text = "Hi, I'am Mouhamed 👋";
//     let index = 0;

//     function typeWriter() {
//         textElement.textContent += text.charAt(index);
//         index++;
//         if (index < text.length) {
//             setTimeout(typeWriter, 100);
//         }
//     }

//     typeWriter();
// });

///////////////////////////////CURSOR//////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//     const cursor = document.getElementById('cursor');
//     const circle = document.getElementById('circle');

//     // Variables pour stocker la dernière position de la souris
//     let lastMouseX = 0;
//     let lastMouseY = 0;

//     // Fonction pour mettre à jour la position du curseur et du cercle
//     function updateCursorPosition(x, y) {
//         cursor.style.left = x + 'px';
//         cursor.style.top = y + 'px';

//         circle.style.left = (x - 25) + 'px'; // Centrer le cercle autour du curseur
//         circle.style.top = (y - 25) + 'px';
//     }

//     // Écouteur de mouvement de la souris
//     document.addEventListener('mousemove', (e) => {
//         lastMouseX = e.clientX; // Enregistre la position actuelle de la souris
//         lastMouseY = e.clientY;

//         updateCursorPosition(lastMouseX, lastMouseY); // Met à jour immédiatement la position
//     });

//     // Écouteur de défilement
//     document.addEventListener('scroll', () => {
//         // À chaque défilement, mettre à jour la position du cercle
//         updateCursorPosition(lastMouseX, lastMouseY);
//     });
// });

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDbUI7O0FBR25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM3REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25UZXh0XCIpO1xyXG4vLyAgICAgY29uc3QgdGV4dCA9IFwiSGksIEknYW0gTW91aGFtZWQg8J+Ri1wiO1xyXG4vLyAgICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbi8vICAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xyXG4vLyAgICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQuY2hhckF0KGluZGV4KTtcclxuLy8gICAgICAgICBpbmRleCsrO1xyXG4vLyAgICAgICAgIGlmIChpbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgMTAwKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZVdyaXRlcigpO1xyXG4vLyB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9DVVJTT1IvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJzb3InKTtcclxuLy8gICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXJjbGUnKTtcclxuXHJcbi8vICAgICAvLyBWYXJpYWJsZXMgcG91ciBzdG9ja2VyIGxhIGRlcm5pw6hyZSBwb3NpdGlvbiBkZSBsYSBzb3VyaXNcclxuLy8gICAgIGxldCBsYXN0TW91c2VYID0gMDtcclxuLy8gICAgIGxldCBsYXN0TW91c2VZID0gMDtcclxuXHJcbi8vICAgICAvLyBGb25jdGlvbiBwb3VyIG1ldHRyZSDDoCBqb3VyIGxhIHBvc2l0aW9uIGR1IGN1cnNldXIgZXQgZHUgY2VyY2xlXHJcbi8vICAgICBmdW5jdGlvbiB1cGRhdGVDdXJzb3JQb3NpdGlvbih4LCB5KSB7XHJcbi8vICAgICAgICAgY3Vyc29yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuLy8gICAgICAgICBjdXJzb3Iuc3R5bGUudG9wID0geSArICdweCc7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgY2lyY2xlLnN0eWxlLmxlZnQgPSAoeCAtIDI1KSArICdweCc7IC8vIENlbnRyZXIgbGUgY2VyY2xlIGF1dG91ciBkdSBjdXJzZXVyXHJcbi8vICAgICAgICAgY2lyY2xlLnN0eWxlLnRvcCA9ICh5IC0gMjUpICsgJ3B4JztcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvLyDDiWNvdXRldXIgZGUgbW91dmVtZW50IGRlIGxhIHNvdXJpc1xyXG4vLyAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuLy8gICAgICAgICBsYXN0TW91c2VYID0gZS5jbGllbnRYOyAvLyBFbnJlZ2lzdHJlIGxhIHBvc2l0aW9uIGFjdHVlbGxlIGRlIGxhIHNvdXJpc1xyXG4vLyAgICAgICAgIGxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgdXBkYXRlQ3Vyc29yUG9zaXRpb24obGFzdE1vdXNlWCwgbGFzdE1vdXNlWSk7IC8vIE1ldCDDoCBqb3VyIGltbcOpZGlhdGVtZW50IGxhIHBvc2l0aW9uXHJcbi8vICAgICB9KTtcclxuXHJcbi8vICAgICAvLyDDiWNvdXRldXIgZGUgZMOpZmlsZW1lbnRcclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuLy8gICAgICAgICAvLyDDgCBjaGFxdWUgZMOpZmlsZW1lbnQsIG1ldHRyZSDDoCBqb3VyIGxhIHBvc2l0aW9uIGR1IGNlcmNsZVxyXG4vLyAgICAgICAgIHVwZGF0ZUN1cnNvclBvc2l0aW9uKGxhc3RNb3VzZVgsIGxhc3RNb3VzZVkpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=