const CONTEXT_MENU_ID = "ris_context_menu"

// create the context menu item
chrome.contextMenus.create({
    title: "Reverse Image Search with Google",
    contexts: ["image"],
    id: CONTEXT_MENU_ID
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // image search url
    const reverseImageSearchUrl = 'https://www.google.com/searchbyimage?image_url=';

    // run the search in a new tab, ez
    chrome.tabs.create({  
        url: reverseImageSearchUrl + info.srcUrl
    });
})