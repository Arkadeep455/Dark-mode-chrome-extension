document.getElementById("toggle-dark-mode").addEventListener("click", function() {
    chrome.tabs.executeScript({
      code: 'document.body.classList.toggle("dark-mode");'
    });
  });

  chrome.tabs.insertCSS({
    file: "popup.css"
});