(function() {
  const iconElem = document.querySelector(".menu-icon");
  const bodyElem = document.querySelector(".menu-body");

  function show() {
    bodyElem.style.visibility = "visible";
  }

  function unshow() {
    bodyElem.style.visibility = "hidden";
  }

  function menuHandler(e) {
    const targetElem = e.target;

    if (targetElem) {
      if (bodyElem.style.visibility === "hidden") {
        show();
      } else if (bodyElem.style.visibility === "visible") {
        unshow();
      }
    }
  }

  iconElem.addEventListener("click", menuHandler);
  unshow();
})();
