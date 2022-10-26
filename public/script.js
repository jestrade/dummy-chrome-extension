const fetchData = async () => {
    const api = "https://dog.ceo/api/breeds/image/random";
    const res = await fetch(api);
    const result = await res.json();
    document.getElementById("dog").src = result.message;
}
fetchData();

const getword = (info) => {
    console.log("Word " + info.selectionText + " was clicked!");
    chrome.tabs.create({
        url: "https://www.google.com/search?q=" + info.selectionText
    });
}
chrome.contextMenus.create({
    title: "HS search: %s",
    contexts: ["selection"],
    onclick: getword
});


/*
    Ref: https://github.com/GoogleChrome/chrome-extensions-samples
    Ref: https://developer.chrome.com/docs/extensions/reference/contextMenus/
    Ref: https://stackoverflow.com/questions/13783500/context-menus-in-chrome-extensions
    Ref: https://neilpatel.com/blog/chrome-extension
*/