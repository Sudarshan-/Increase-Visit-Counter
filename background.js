chrome.extension.onMessage.addListener(function (message,sender,callback){
  chrome.tabs.reload(sender.tab.id);
});
