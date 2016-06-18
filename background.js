chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return ruleMatcher.redirectOnMatch("https://mail.google.com");
    }, 
    {
        urls : ["https://www.hotmail.com"]
    }, 
    ["blocking"]
);