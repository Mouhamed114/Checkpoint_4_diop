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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDbUI7O0FBR25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7RUFDdERELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsS0FBSyxFQUFLO0lBQzVCRCxFQUFFLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzdCQyxVQUFVLENBQUMsWUFBTTtNQUNiSixFQUFFLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDMUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcclxuLy8gICAgIGNvbnN0IHRleHQgPSBcIkhpLCBJJ2FtIE1vdWhhbWVkIPCfkYtcIjtcclxuLy8gICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcclxuLy8gICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCArPSB0ZXh0LmNoYXJBdChpbmRleCk7XHJcbi8vICAgICAgICAgaW5kZXgrKztcclxuLy8gICAgICAgICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDEwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGVXcml0ZXIoKTtcclxuLy8gfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQ1VSU09SLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbi8vICAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vyc29yJyk7XHJcbi8vICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2lyY2xlJyk7XHJcblxyXG4vLyAgICAgLy8gVmFyaWFibGVzIHBvdXIgc3RvY2tlciBsYSBkZXJuacOocmUgcG9zaXRpb24gZGUgbGEgc291cmlzXHJcbi8vICAgICBsZXQgbGFzdE1vdXNlWCA9IDA7XHJcbi8vICAgICBsZXQgbGFzdE1vdXNlWSA9IDA7XHJcblxyXG4vLyAgICAgLy8gRm9uY3Rpb24gcG91ciBtZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBjdXJzZXVyIGV0IGR1IGNlcmNsZVxyXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlQ3Vyc29yUG9zaXRpb24oeCwgeSkge1xyXG4vLyAgICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcbi8vICAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGNpcmNsZS5zdHlsZS5sZWZ0ID0gKHggLSAyNSkgKyAncHgnOyAvLyBDZW50cmVyIGxlIGNlcmNsZSBhdXRvdXIgZHUgY3Vyc2V1clxyXG4vLyAgICAgICAgIGNpcmNsZS5zdHlsZS50b3AgPSAoeSAtIDI1KSArICdweCc7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gw4ljb3V0ZXVyIGRlIG1vdXZlbWVudCBkZSBsYSBzb3VyaXNcclxuLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbi8vICAgICAgICAgbGFzdE1vdXNlWCA9IGUuY2xpZW50WDsgLy8gRW5yZWdpc3RyZSBsYSBwb3NpdGlvbiBhY3R1ZWxsZSBkZSBsYSBzb3VyaXNcclxuLy8gICAgICAgICBsYXN0TW91c2VZID0gZS5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHVwZGF0ZUN1cnNvclBvc2l0aW9uKGxhc3RNb3VzZVgsIGxhc3RNb3VzZVkpOyAvLyBNZXQgw6Agam91ciBpbW3DqWRpYXRlbWVudCBsYSBwb3NpdGlvblxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgLy8gw4ljb3V0ZXVyIGRlIGTDqWZpbGVtZW50XHJcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbi8vICAgICAgICAgLy8gw4AgY2hhcXVlIGTDqWZpbGVtZW50LCBtZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBjZXJjbGVcclxuLy8gICAgICAgICB1cGRhdGVDdXJzb3JQb3NpdGlvbihsYXN0TW91c2VYLCBsYXN0TW91c2VZKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFkZS1pbicpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gJ25vbmUnOyAvLyBBbm51bGUgbCdhbmltYXRpb24gaW5pdGlhbGVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZWwuc3R5bGUuYW5pbWF0aW9uID0gJyc7IC8vIFJlZMOpbWFycmUgbCdhbmltYXRpb25cclxuICAgICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJzdHlsZSIsImFuaW1hdGlvbiIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9