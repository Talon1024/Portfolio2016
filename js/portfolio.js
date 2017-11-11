document.addEventListener("readystatechange", function (e) {
  if(document.readyState === "complete") {
    var projItems = document.getElementsByClassName("kc-mywork-item"),
        projNames = [];

    Array.prototype.forEach.call(projItems, function (el) {
      if (el.id) {
        projNames.push(el.id.substr(7));
      } else {
        console.warn("No ID for", el);
      }
    });
  }
});