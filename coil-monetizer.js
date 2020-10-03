//detect support for coil web monetization, and when someone starts and stops paying 

var coilMonetizer = {
	supported: false, //is web monetization supported
	isPaying: false, //is currently paying?
	startPayingHandler: null, //if it's a function will be called when the startPaying event fires 
	stopPayingHandler: null, //if it's a function will be called when the stopPaying event fires 
	init: function() {
		if (document.monetization) {
			coilMonetizer.supported = true;
			console.log("monetization supported")
		}
		
		else {
			console.log("monetization not supported")
		}
		
		if (coilMonetizer.supported) {
			document.monetization.addEventListener('monetizationstart', coilMonetizer.startedPaying);
			document.monetization.addEventListener('monetizationstop', coilMonetizer.stoppedPaying);
		
		}
	},
	
	startedPaying: function() {
		//called when the user starts paying
		
		coilMonetizer.isPaying = true;
		console.log("started paying")
		
		if (coilMonetizer.startPayingHandler) {
			coilMonetizer.startPayingHandler()
		} 
		
	},
	
	stoppedPaying: function() {
		//called when the user stops paying
		
		coilMonetizer.isPaying = true;
		console.log("stopped paying");
		
		if (coilMonetizer.stopPayingHandler) {
			coilMonetizer.startPayingHandler()
		} 
	}
	
}

window.addEventListener("DOMContentLoaded", coilMonetizer.init, false)