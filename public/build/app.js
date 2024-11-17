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

  // Ouvrir le menu burger
  navbarToggler.addEventListener('click', function () {
    var isOpen = fullScreenMenu.classList.toggle('show'); // Toggle de la classe 'show'
    body.classList.toggle('menu-open', isOpen); // Empêche le scroll si ouvert

    // Gestion de l'affichage de la croix
    if (isOpen) {
      navbarClose.style.display = 'block'; // Montre la croix
    } else {
      navbarClose.style.display = 'none'; // Cache la croix
    }
  });

  // Fermer le menu avec la croix
  navbarClose.addEventListener('click', function () {
    fullScreenMenu.classList.remove('show'); // Retire la classe 'show'
    body.classList.remove('menu-open'); // Réactive le scroll
    navbarClose.style.display = 'none'; // Cache la croix
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6Q04sSUFBSSxDQUFDRSxTQUFTLENBQUNJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BDRixXQUFXLENBQUNWLEtBQUssQ0FBQ1csT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ3hDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNwSEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcclxuLy8gICAgIGNvbnN0IHRleHQgPSBcIkhpLCBJJ2FtIE1vdWhhbWVkIPCfkYtcIjtcclxuLy8gICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcclxuLy8gICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCArPSB0ZXh0LmNoYXJBdChpbmRleCk7XHJcbi8vICAgICAgICAgaW5kZXgrKztcclxuLy8gICAgICAgICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDEwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGVXcml0ZXIoKTtcclxuLy8gfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQ1VSU09SLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vyc29yJyk7XHJcbi8vICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2lyY2xlJyk7XHJcblxyXG4vLyAgICAgLy8gVmFyaWFibGVzIHBvdXIgc3RvY2tlciBsYSBkZXJuacOocmUgcG9zaXRpb24gZGUgbGEgc291cmlzXHJcbi8vICAgICBsZXQgbGFzdE1vdXNlWCA9IDA7XHJcbi8vICAgICBsZXQgbGFzdE1vdXNlWSA9IDA7XHJcblxyXG4vLyAgICAgLy8gRm9uY3Rpb24gcG91ciBtZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBjdXJzZXVyIGV0IGR1IGNlcmNsZVxyXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlQ3Vyc29yUG9zaXRpb24oeCwgeSkge1xyXG4vLyAgICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcbi8vICAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGNpcmNsZS5zdHlsZS5sZWZ0ID0gKHggLSAyNSkgKyAncHgnOyAvLyBDZW50cmVyIGxlIGNlcmNsZSBhdXRvdXIgZHUgY3Vyc2V1clxyXG4vLyAgICAgICAgIGNpcmNsZS5zdHlsZS50b3AgPSAoeSAtIDI1KSArICdweCc7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gw4ljb3V0ZXVyIGRlIG1vdXZlbWVudCBkZSBsYSBzb3VyaXNcclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbi8vICAgICAgICAgbGFzdE1vdXNlWCA9IGUuY2xpZW50WDsgLy8gRW5yZWdpc3RyZSBsYSBwb3NpdGlvbiBhY3R1ZWxsZSBkZSBsYSBzb3VyaXNcclxuLy8gICAgICAgICBsYXN0TW91c2VZID0gZS5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHVwZGF0ZUN1cnNvclBvc2l0aW9uKGxhc3RNb3VzZVgsIGxhc3RNb3VzZVkpOyAvLyBNZXQgw6Agam91ciBpbW3DqWRpYXRlbWVudCBsYSBwb3NpdGlvblxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgLy8gw4ljb3V0ZXVyIGRlIGTDqWZpbGVtZW50XHJcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbi8vICAgICAgICAgLy8gw4AgY2hhcXVlIGTDqWZpbGVtZW50LCBtZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBjZXJjbGVcclxuLy8gICAgICAgICB1cGRhdGVDdXJzb3JQb3NpdGlvbihsYXN0TW91c2VYLCBsYXN0TW91c2VZKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFkZS1pbicpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gJ25vbmUnOyAvLyBBbm51bGUgbCdhbmltYXRpb24gaW5pdGlhbGVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gJyc7IC8vIFJlZMOpbWFycmUgbCdhbmltYXRpb25cclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2YmFyVG9nZ2xlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItdG9nZ2xlcicpO1xyXG4gICAgY29uc3QgZnVsbFNjcmVlbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLWRlZmF1bHQnKTtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIG5hdmJhclRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gZnVsbFNjcmVlbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJywgaXNPcGVuKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci10b2dnbGVyJyk7IC8vIEJvdXRvbiBtZW51IGJ1cmdlclxyXG4gICAgY29uc3QgbmF2YmFyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLWNsb3NlJyk7IC8vIEJvdXRvbiBjcm9peFxyXG4gICAgY29uc3QgZnVsbFNjcmVlbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2YmFyLWRlZmF1bHQnKTsgLy8gTWVudSBjb21wbGV0XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICAvLyBPdXZyaXIgbGUgbWVudSBidXJnZXJcclxuICAgIG5hdmJhclRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNPcGVuID0gZnVsbFNjcmVlbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpOyAvLyBUb2dnbGUgZGUgbGEgY2xhc3NlICdzaG93J1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1vcGVuJywgaXNPcGVuKTsgLy8gRW1ww6pjaGUgbGUgc2Nyb2xsIHNpIG91dmVydFxyXG5cclxuICAgICAgICAvLyBHZXN0aW9uIGRlIGwnYWZmaWNoYWdlIGRlIGxhIGNyb2l4XHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICBuYXZiYXJDbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gTW9udHJlIGxhIGNyb2l4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF2YmFyQ2xvc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gQ2FjaGUgbGEgY3JvaXhcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGZXJtZXIgbGUgbWVudSBhdmVjIGxhIGNyb2l4XHJcbiAgICBuYXZiYXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBmdWxsU2NyZWVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7IC8vIFJldGlyZSBsYSBjbGFzc2UgJ3Nob3cnXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTsgLy8gUsOpYWN0aXZlIGxlIHNjcm9sbFxyXG4gICAgICAgIG5hdmJhckNsb3NlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIENhY2hlIGxhIGNyb2l4XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJzdHlsZSIsImFuaW1hdGlvbiIsInNldFRpbWVvdXQiLCJuYXZiYXJUb2dnbGVyIiwicXVlcnlTZWxlY3RvciIsImZ1bGxTY3JlZW5NZW51IiwiYm9keSIsImlzT3BlbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm5hdmJhckNsb3NlIiwiZGlzcGxheSIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=