// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let previousColor;

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['js/changingColor.js'],
  });
});

// The body of this function will be executed as a content script inside the
// current page
