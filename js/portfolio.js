document.addEventListener("readystatechange", function (e) {
  if (document.readyState === "complete") {
    /*
    var projItems = document.getElementsByClassName("kc-mywork-item"),
        projNames = {},
        projSection = document.getElementById("work-section");

    Array.prototype.forEach.call(projItems, function (el) {
      if (el.id) {
        projNames[el] = el.id.substr(7);
      } else {
        console.warn("No ID for", el);
      }
    });
    */

    var projSection = document.getElementById("work-section"),
        projPopup = document.getElementsByClassName("project-popup")[0],
        inTransition = 0; // Control transitions

    projSection.addEventListener('click', function (e) {
      if (inTransition !== 0) return;

      function getWorkItem(el) {
        if (el == null) return;
        if (el.classList.contains("kc-mywork-item")) {
          return el;
        } else {
          return getWorkItem(el.parentElement);
        }
      }

      var projItem = getWorkItem(e.target),
          project = (projItem != null) ? projItem.id.substr(7) : null,
          projDescs = projPopup.getElementsByClassName("projdesc");

      if (project) {
        inTransition = 1;
        Array.prototype.forEach.call(projDescs, function (el) {
          if (el.id.substr(9) === project) {
            el.classList.remove("noshow");
          } else {
            el.classList.add("noshow");
          }
        });
        projPopup.classList.remove("noshow");
        document.body.classList.add("inTransition");
        setTimeout(function () {
          projPopup.classList.add("up");
          setTimeout(function () {
            inTransition = 2;
            document.body.classList.remove("inTransition");
          }, 1000);
        }, 10);
      }
    });

    projPopup.getElementsByClassName("exitbutton")[0].addEventListener("click", function (e) {
      if (inTransition !== 2) return;
      inTransition = 3;
      document.body.classList.add("inTransition");
      projPopup.classList.remove("up");
      setTimeout(function () {
        projPopup.classList.add("noshow");
        inTransition = 0;
        document.body.classList.remove("inTransition");
      }, 1000);
    });
  }
});