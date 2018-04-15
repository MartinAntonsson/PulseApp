// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
	"use strict";

	document.addEventListener('deviceready', onDeviceReady, false);

	function onDeviceReady() {
		// Handle the Cordova pause and resume events
		document.addEventListener('pause', onPause.bind(this), false);
		document.addEventListener('resume', onResume.bind(this), false);

		// TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
		console.log(navigator.device.capture);
	};

	function onPause() {
		// TODO: This application has been suspended. Save application state here.
	};

	function onResume() {
		// TODO: This application has been reactivated. Restore application state here.
	};

	function init() {


		document.querySelector("#takeVideo").addEventListener("touchend", function () {
			console.log("Take video");
			navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 1 });
		}, false);

	}

	function captureError(e) {
		console.log("capture error: " + JSON.stringify(e));
	}

	function captureSuccess(s) {
		console.log("Success");
		console.dir(s[0]);
		var v = "<video controls='controls'>";
		v += "<source src='" + s[0].fullPath + "' type='video/mp4'>";
		v += "</video>";
		document.querySelector("#videoArea").innerHTML = v;
	}
})();