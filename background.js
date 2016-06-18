chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://www.bing.com"};
    },

    {
        urls: [
            "https://www.google.com/",
            "https://www.google.ca/?gws_rd=ssl"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);