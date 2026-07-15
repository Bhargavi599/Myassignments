// 1. Global variable
let browser = "Chrome";

// 2. Function that accepts a callback
function checkBrowserVersion(callback) {
    setTimeout(function () {
        callback(browser);
    }, 2000);
}

// 3. Callback function that logs the browser version
function printBrowserVersion(browserName) {
    console.log("Browser Version:", browserName);
}

// 4. Call checkBrowserVersion and pass the callback
checkBrowserVersion(printBrowserVersion);