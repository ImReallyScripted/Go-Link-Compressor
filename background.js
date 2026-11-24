import { decode } from "./codec.js";

chrome.omnibox.onInputEntered.addListener((text) => {
    const string = text.trim();
    const targetUrl = decode(string);

    if (targetUrl) {
        chrome.tabs.update({ url: targetUrl });
    } else {
        chrome.tabs.update({ url: chrome.runtime.getURL("404.html") });
    }
});
