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
document.addEventListener('DOMContentLoaded', function () {
  var cursor = document.getElementById('cursor');
  var circle = document.getElementById('circle');

  // Variables pour stocker la dernière position de la souris
  var lastMouseX = 0;
  var lastMouseY = 0;

  // Fonction pour mettre à jour la position du curseur et du cercle
  function updateCursorPosition(x, y) {
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    circle.style.left = x - 25 + 'px'; // Centrer le cercle autour du curseur
    circle.style.top = y - 25 + 'px';
  }

  // Écouteur de mouvement de la souris
  document.addEventListener('mousemove', function (e) {
    lastMouseX = e.clientX; // Enregistre la position actuelle de la souris
    lastMouseY = e.clientY;
    updateCursorPosition(lastMouseX, lastMouseY); // Met à jour immédiatement la position
  });

  // Écouteur de défilement
  document.addEventListener('scroll', function () {
    // À chaque défilement, mettre à jour la position du cercle
    updateCursorPosition(lastMouseX, lastMouseY);
  });
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNwSEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25UZXh0XCIpO1xyXG4vLyAgICAgY29uc3QgdGV4dCA9IFwiSGksIEknYW0gTW91aGFtZWQg8J+Ri1wiO1xyXG4vLyAgICAgbGV0IGluZGV4ID0gMDtcclxuXHJcbi8vICAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xyXG4vLyAgICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQuY2hhckF0KGluZGV4KTtcclxuLy8gICAgICAgICBpbmRleCsrO1xyXG4vLyAgICAgICAgIGlmIChpbmRleCA8IHRleHQubGVuZ3RoKSB7XHJcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgMTAwKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgdHlwZVdyaXRlcigpO1xyXG4vLyB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9DVVJTT1IvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGN1cnNvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJzb3InKTtcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXJjbGUnKTtcclxuXHJcbiAgICAvLyBWYXJpYWJsZXMgcG91ciBzdG9ja2VyIGxhIGRlcm5pw6hyZSBwb3NpdGlvbiBkZSBsYSBzb3VyaXNcclxuICAgIGxldCBsYXN0TW91c2VYID0gMDtcclxuICAgIGxldCBsYXN0TW91c2VZID0gMDtcclxuXHJcbiAgICAvLyBGb25jdGlvbiBwb3VyIG1ldHRyZSDDoCBqb3VyIGxhIHBvc2l0aW9uIGR1IGN1cnNldXIgZXQgZHUgY2VyY2xlXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVDdXJzb3JQb3NpdGlvbih4LCB5KSB7XHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcclxuICAgICAgICBjdXJzb3Iuc3R5bGUudG9wID0geSArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2lyY2xlLnN0eWxlLmxlZnQgPSAoeCAtIDI1KSArICdweCc7IC8vIENlbnRyZXIgbGUgY2VyY2xlIGF1dG91ciBkdSBjdXJzZXVyXHJcbiAgICAgICAgY2lyY2xlLnN0eWxlLnRvcCA9ICh5IC0gMjUpICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICAvLyDDiWNvdXRldXIgZGUgbW91dmVtZW50IGRlIGxhIHNvdXJpc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBsYXN0TW91c2VYID0gZS5jbGllbnRYOyAvLyBFbnJlZ2lzdHJlIGxhIHBvc2l0aW9uIGFjdHVlbGxlIGRlIGxhIHNvdXJpc1xyXG4gICAgICAgIGxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlQ3Vyc29yUG9zaXRpb24obGFzdE1vdXNlWCwgbGFzdE1vdXNlWSk7IC8vIE1ldCDDoCBqb3VyIGltbcOpZGlhdGVtZW50IGxhIHBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDDiWNvdXRldXIgZGUgZMOpZmlsZW1lbnRcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICAvLyDDgCBjaGFxdWUgZMOpZmlsZW1lbnQsIG1ldHRyZSDDoCBqb3VyIGxhIHBvc2l0aW9uIGR1IGNlcmNsZVxyXG4gICAgICAgIHVwZGF0ZUN1cnNvclBvc2l0aW9uKGxhc3RNb3VzZVgsIGxhc3RNb3VzZVkpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWRlLWluJyk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSAnbm9uZSc7IC8vIEFubnVsZSBsJ2FuaW1hdGlvbiBpbml0aWFsZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5hbmltYXRpb24gPSAnJzsgLy8gUmVkw6ltYXJyZSBsJ2FuaW1hdGlvblxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuYXZiYXJUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhci10b2dnbGVyJyk7XHJcbiAgICBjb25zdCBmdWxsU2NyZWVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItZGVmYXVsdCcpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgbmF2YmFyVG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc09wZW4gPSBmdWxsU2NyZWVuTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nLCBpc09wZW4pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IG5hdmJhclRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZXInKTsgLy8gQm91dG9uIG1lbnUgYnVyZ2VyXHJcbiAgICBjb25zdCBuYXZiYXJDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXItY2xvc2UnKTsgLy8gQm91dG9uIGNyb2l4XHJcbiAgICBjb25zdCBmdWxsU2NyZWVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZiYXItZGVmYXVsdCcpOyAvLyBNZW51IGNvbXBsZXRcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAgIC8vIE91dnJpciBsZSBtZW51IGJ1cmdlclxyXG4gICAgbmF2YmFyVG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc09wZW4gPSBmdWxsU2NyZWVuTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7IC8vIFRvZ2dsZSBkZSBsYSBjbGFzc2UgJ3Nob3cnXHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LW9wZW4nLCBpc09wZW4pOyAvLyBFbXDDqmNoZSBsZSBzY3JvbGwgc2kgb3V2ZXJ0XHJcblxyXG4gICAgICAgIC8vIEdlc3Rpb24gZGUgbCdhZmZpY2hhZ2UgZGUgbGEgY3JvaXhcclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIG5hdmJhckNsb3NlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvLyBNb250cmUgbGEgY3JvaXhcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZiYXJDbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBDYWNoZSBsYSBjcm9peFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZlcm1lciBsZSBtZW51IGF2ZWMgbGEgY3JvaXhcclxuICAgIG5hdmJhckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGZ1bGxTY3JlZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTsgLy8gUmV0aXJlIGxhIGNsYXNzZSAnc2hvdydcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpOyAvLyBSw6lhY3RpdmUgbGUgc2Nyb2xsXHJcbiAgICAgICAgbmF2YmFyQ2xvc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gQ2FjaGUgbGEgY3JvaXhcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJzb3IiLCJnZXRFbGVtZW50QnlJZCIsImNpcmNsZSIsImxhc3RNb3VzZVgiLCJsYXN0TW91c2VZIiwidXBkYXRlQ3Vyc29yUG9zaXRpb24iLCJ4IiwieSIsInN0eWxlIiwibGVmdCIsInRvcCIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImluZGV4IiwiYW5pbWF0aW9uIiwic2V0VGltZW91dCIsIm5hdmJhclRvZ2dsZXIiLCJxdWVyeVNlbGVjdG9yIiwiZnVsbFNjcmVlbk1lbnUiLCJib2R5IiwiaXNPcGVuIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibmF2YmFyQ2xvc2UiLCJkaXNwbGF5IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==