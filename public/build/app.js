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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUMyQjs7QUFFM0I7QUFDbUI7O0FBR25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDO0VBQ2hELElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDRyxjQUFjLENBQUMsUUFBUSxDQUFDOztFQUVoRDtFQUNBLElBQUlFLFVBQVUsR0FBRyxDQUFDO0VBQ2xCLElBQUlDLFVBQVUsR0FBRyxDQUFDOztFQUVsQjtFQUNBLFNBQVNDLG9CQUFvQixDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtJQUNoQ1AsTUFBTSxDQUFDUSxLQUFLLENBQUNDLElBQUksR0FBR0gsQ0FBQyxHQUFHLElBQUk7SUFDNUJOLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDRSxHQUFHLEdBQUdILENBQUMsR0FBRyxJQUFJO0lBRTNCTCxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsSUFBSSxHQUFJSCxDQUFDLEdBQUcsRUFBRSxHQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3JDSixNQUFNLENBQUNNLEtBQUssQ0FBQ0UsR0FBRyxHQUFJSCxDQUFDLEdBQUcsRUFBRSxHQUFJLElBQUk7RUFDdEM7O0VBRUE7RUFDQVQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQ1ksQ0FBQyxFQUFLO0lBQzFDUixVQUFVLEdBQUdRLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7SUFDeEJSLFVBQVUsR0FBR08sQ0FBQyxDQUFDRSxPQUFPO0lBRXRCUixvQkFBb0IsQ0FBQ0YsVUFBVSxFQUFFQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ2xELENBQUMsQ0FBQzs7RUFFRjtFQUNBTixRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0lBQ3RDO0lBQ0FNLG9CQUFvQixDQUFDRixVQUFVLEVBQUVDLFVBQVUsQ0FBQztFQUNoRCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDN0RGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcclxuLy8gICAgIGNvbnN0IHRleHQgPSBcIkhpLCBJJ2FtIE1vdWhhbWVkIPCfkYtcIjtcclxuLy8gICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcclxuLy8gICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCArPSB0ZXh0LmNoYXJBdChpbmRleCk7XHJcbi8vICAgICAgICAgaW5kZXgrKztcclxuLy8gICAgICAgICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIDEwMCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHR5cGVXcml0ZXIoKTtcclxuLy8gfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQ1VSU09SLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vyc29yJyk7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2lyY2xlJyk7XHJcblxyXG4gICAgLy8gVmFyaWFibGVzIHBvdXIgc3RvY2tlciBsYSBkZXJuacOocmUgcG9zaXRpb24gZGUgbGEgc291cmlzXHJcbiAgICBsZXQgbGFzdE1vdXNlWCA9IDA7XHJcbiAgICBsZXQgbGFzdE1vdXNlWSA9IDA7XHJcblxyXG4gICAgLy8gRm9uY3Rpb24gcG91ciBtZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBjdXJzZXVyIGV0IGR1IGNlcmNsZVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ3Vyc29yUG9zaXRpb24oeCwgeSkge1xyXG4gICAgICAgIGN1cnNvci5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcbiAgICAgICAgY3Vyc29yLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNpcmNsZS5zdHlsZS5sZWZ0ID0gKHggLSAyNSkgKyAncHgnOyAvLyBDZW50cmVyIGxlIGNlcmNsZSBhdXRvdXIgZHUgY3Vyc2V1clxyXG4gICAgICAgIGNpcmNsZS5zdHlsZS50b3AgPSAoeSAtIDI1KSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gw4ljb3V0ZXVyIGRlIG1vdXZlbWVudCBkZSBsYSBzb3VyaXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgbGFzdE1vdXNlWCA9IGUuY2xpZW50WDsgLy8gRW5yZWdpc3RyZSBsYSBwb3NpdGlvbiBhY3R1ZWxsZSBkZSBsYSBzb3VyaXNcclxuICAgICAgICBsYXN0TW91c2VZID0gZS5jbGllbnRZO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHVwZGF0ZUN1cnNvclBvc2l0aW9uKGxhc3RNb3VzZVgsIGxhc3RNb3VzZVkpOyAvLyBNZXQgw6Agam91ciBpbW3DqWRpYXRlbWVudCBsYSBwb3NpdGlvblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gw4ljb3V0ZXVyIGRlIGTDqWZpbGVtZW50XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gw4AgY2hhcXVlIGTDqWZpbGVtZW50LCBtZXR0cmUgw6Agam91ciBsYSBwb3NpdGlvbiBkdSBjZXJjbGVcclxuICAgICAgICB1cGRhdGVDdXJzb3JQb3NpdGlvbihsYXN0TW91c2VYLCBsYXN0TW91c2VZKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnNvciIsImdldEVsZW1lbnRCeUlkIiwiY2lyY2xlIiwibGFzdE1vdXNlWCIsImxhc3RNb3VzZVkiLCJ1cGRhdGVDdXJzb3JQb3NpdGlvbiIsIngiLCJ5Iiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIl0sInNvdXJjZVJvb3QiOiIifQ==