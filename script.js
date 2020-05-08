function setSearchEngine() {
  return document.querySelector("input[name=engine]:checked").value;
}

function init() {
  let myform = document.getElementById("searchForm");
  myform.addEventListener("submit", function () {
    myform.action = setSearchEngine();
  });
}
window.onload = init;
