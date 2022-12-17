windows = require('./windows.js');
linux = require('./linux.js');
macos = require('./macos.js');


function getChromePath() {
	return windows.getChrome() || linux.getChrome() || macos.getChrome();
}

function getEdgePath() {
	return windows.getEdge() || linux.getEdge() || macos.getEdge();
}

function getChromiumPath() {
	//If not found, fallbacks to another Chromium-based browser
	//(only on linux there is a "real" chromium possible install path)
	return windows.getChromium() || linux.getChromium() || macos.getChromium();
}


function getFirefoxPath() {
	return windows.getFirefox() || linux.getFirefox() || macos.getFirefox();
}


module.exports = { getChromePath, getEdgePath, getChromiumPath, getFirefoxPath };