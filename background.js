const links = {
  mail: "https://google.com",
  gh: "https://github.com"
};

chrome.omnibox.onInputEntered.addListener((text) => {
  const slug = text.trim().toLowerCase();
  const target = links[slug] || chrome.runtime.getURL("404.html");
  chrome.tabs.update({ url: target });
});