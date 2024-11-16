"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");




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

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll('.fade-in');
  elements.forEach(function (el, index) {
    el.style.animation = 'none'; // Annule l'animation initiale
    setTimeout(function () {
      el.style.animation = ''; // Redémarre l'animation
    }, 0);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var fullScreenMenu = document.querySelector('#navbar-default');
  var body = document.body;
  navbarToggler.addEventListener('click', function () {
    var isOpen = fullScreenMenu.classList.toggle('show');
    body.classList.toggle('menu-open', isOpen);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler'); // Bouton menu burger
  var navbarClose = document.querySelector('.navbar-close'); // Bouton croix
  var fullScreenMenu = document.querySelector('#navbar-default'); // Menu complet
  var body = document.body;

  // Ouvrir le menu
  navbarToggler.addEventListener('click', function () {
    var isOpen = fullScreenMenu.classList.toggle('show'); // Toggle de la classe 'show'
    body.classList.toggle('menu-open', isOpen); // Empêche le scroll si ouvert
  });

  // Fermer le menu avec la croix
  navbarClose.addEventListener('click', function () {
    fullScreenMenu.classList.remove('show'); // Retire la classe 'show'
    body.classList.remove('menu-open'); // Réactive le scroll
  });
});

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-647e5c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICdib290c3RyYXAnO1xyXG5cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvblRleHRcIik7XHJcbi8vICAgICBjb25zdCB0ZXh0ID0gXCJIaSwgSSdhbSBNb3VoYW1lZCDwn5GLXCI7XHJcbi8vICAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuLy8gICAgIGZ1bmN0aW9uIHR5cGVXcml0ZXIoKSB7XHJcbi8vICAgICAgICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgKz0gdGV4dC5jaGFyQXQoaW5kZXgpO1xyXG4vLyAgICAgICAgIGluZGV4Kys7XHJcbi8vICAgICAgICAgaWYgKGluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuLy8gICAgICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCAxMDApO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICB0eXBlV3JpdGVyKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0NVUlNPUi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgY3Vyc29yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnNvcicpO1xyXG4vLyAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpcmNsZScpO1xyXG5cclxuLy8gICAgIC8vIFZhcmlhYmxlcyBwb3VyIHN0b2NrZXIgbGEgZGVybmnDqHJlIHBvc2l0aW9uIGRlIGxhIHNvdXJpc1xyXG4vLyAgICAgbGV0IGxhc3RNb3VzZVggPSAwO1xyXG4vLyAgICAgbGV0IGxhc3RNb3VzZVkgPSAwO1xyXG5cclxuLy8gICAgIC8vIEZvbmN0aW9uIHBvdXIgbWV0dHJlIMOgIGpvdXIgbGEgcG9zaXRpb24gZHUgY3Vyc2V1ciBldCBkdSBjZXJjbGVcclxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnNvclBvc2l0aW9uKHgsIHkpIHtcclxuLy8gICAgICAgICBjdXJzb3Iuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG4vLyAgICAgICAgIGN1cnNvci5zdHlsZS50b3AgPSB5ICsgJ3B4JztcclxuICAgICAgICBcclxuLy8gICAgICAgICBjaXJjbGUuc3R5bGUubGVmdCA9ICh4IC0gMjUpICsgJ3B4JzsgLy8gQ2VudHJlciBsZSBjZXJjbGUgYXV0b3VyIGR1IGN1cnNldXJcclxuLy8gICAgICAgICBjaXJjbGUuc3R5bGUudG9wID0gKHkgLSAyNSkgKyAncHgnO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vIMOJY291dGV1ciBkZSBtb3V2ZW1lbnQgZGUgbGEgc291cmlzXHJcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG4vLyAgICAgICAgIGxhc3RNb3VzZVggPSBlLmNsaWVudFg7IC8vIEVucmVnaXN0cmUgbGEgcG9zaXRpb24gYWN0dWVsbGUgZGUgbGEgc291cmlzXHJcbi8vICAgICAgICAgbGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcclxuICAgICAgICBcclxuLy8gICAgICAgICB1cGRhdGVDdXJzb3JQb3NpdGlvbihsYXN0TW91c2VYLCBsYXN0TW91c2VZKTsgLy8gTWV0IMOgIGpvdXIgaW1tw6lkaWF0ZW1lbnQgbGEgcG9zaXRpb25cclxuLy8gICAgIH0pO1xyXG5cclxuLy8gICAgIC8vIMOJY291dGV1ciBkZSBkw6lmaWxlbWVudFxyXG4vLyAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4vLyAgICAgICAgIC8vIMOAIGNoYXF1ZSBkw6lmaWxlbWVudCwgbWV0dHJlIMOgIGpvdXIgbGEgcG9zaXRpb24gZHUgY2VyY2xlXHJcbi8vICAgICAgICAgdXBkYXRlQ3Vyc29yUG9zaXRpb24obGFzdE1vdXNlWCwgbGFzdE1vdXNlWSk7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG5cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhZGUtaW4nKTtcclxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9ICdub25lJzsgLy8gQW5udWxlIGwnYW5pbWF0aW9uIGluaXRpYWxlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmFuaW1hdGlvbiA9ICcnOyAvLyBSZWTDqW1hcnJlIGwnYW5pbWF0aW9uXHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZXInKTtcclxuICAgIGNvbnN0IGZ1bGxTY3JlZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci1kZWZhdWx0Jyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICBuYXZiYXJUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzT3BlbiA9IGZ1bGxTY3JlZW5NZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicsIGlzT3Blbik7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2YmFyVG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItdG9nZ2xlcicpOyAvLyBCb3V0b24gbWVudSBidXJnZXJcclxuICAgIGNvbnN0IG5hdmJhckNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci1jbG9zZScpOyAvLyBCb3V0b24gY3JvaXhcclxuICAgIGNvbnN0IGZ1bGxTY3JlZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmJhci1kZWZhdWx0Jyk7IC8vIE1lbnUgY29tcGxldFxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgLy8gT3V2cmlyIGxlIG1lbnVcclxuICAgIG5hdmJhclRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gZnVsbFNjcmVlbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAvLyBUb2dnbGUgZGUgbGEgY2xhc3NlICdzaG93J1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJywgaXNPcGVuKTsgLy8gRW1ww6pjaGUgbGUgc2Nyb2xsIHNpIG91dmVydFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIGxlIG1lbnUgYXZlYyBsYSBjcm9peFxyXG4gICAgbmF2YmFyQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZnVsbFNjcmVlbk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpOyAvLyBSZXRpcmUgbGEgY2xhc3NlICdzaG93J1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1vcGVuJyk7IC8vIFLDqWFjdGl2ZSBsZSBzY3JvbGxcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImluZGV4Iiwic3R5bGUiLCJhbmltYXRpb24iLCJzZXRUaW1lb3V0IiwibmF2YmFyVG9nZ2xlciIsInF1ZXJ5U2VsZWN0b3IiLCJmdWxsU2NyZWVuTWVudSIsImJvZHkiLCJpc09wZW4iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuYXZiYXJDbG9zZSIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=