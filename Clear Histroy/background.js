chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.history.deleteAll(function(callback){});
});
