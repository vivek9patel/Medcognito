function medcognito() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.windows.create({ url: tabs[0].url, incognito: true });
  });
}

chrome.browserAction.onClicked.addListener(function () {
  medcognito();
});

chrome.contextMenus.create(
  {
    title: "Go Medcognito",
    onclick: function (e) {
      medcognito();
    },
  },
  function () {}
);

chrome.commands.onCommand.addListener(function (command) {
  if (command == "medcognito") {
    medcognito();
  }
});
