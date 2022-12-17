var fs = require('fs');
var path = require('path');


function testPath(defaultPath) {
	if (process.platform !== "darwin") {
		return null;
	}

	try {
		var homePath = path.join(process.env.HOME, defaultPath);
		fs.accessSync(homePath);
		return homePath;
	} catch (e) {
		try {
			fs.accessSync(defaultPath);
			return defaultPath;
		} catch (err) {
			return null;
		}
	}
}

function getChrome() {
	return testPath("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
}

function getEdge() {
	return testPath("/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge");
}


function getChromium() {
	//There is no chromium default install path for windows
	return getChrome() || getEdge();
}

function getFirefox() {
	return testPath("/Applications/Firefox.app/Contents/MacOS/firefox");
}


module.exports = { getChrome, getEdge, getChromium, getFirefox };