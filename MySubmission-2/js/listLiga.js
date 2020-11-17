document.addEventListener("DOMContentLoaded", function() {
  // Activate sidebar nav
  var elems = document.querySelectorAll(".nav-content");
  M.Sidenav.init(elems);
  loadNavContent();

  function loadNavContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;

        // Muat daftar tautan menu
        document.querySelectorAll(".nav-content, .tab").forEach(function(elm) {
          elm.innerHTML = xhttp.responseText;
        });

        // Daftarkan event listener untuk setiap tautan menu
        document
          .querySelectorAll(".nav-content a, tab a")
          .forEach(function(elm) {
            elm.addEventListener("click", function(event) {
              Liga = event.target.getAttribute("href").substr(1);
              loadPage(Liga);
            });
          });
      }
    };
    xhttp.open("GET", "navContent.html", true);
    xhttp.send();
  }
  var Liga = window.location.hash.substr(1);
  if (Liga == "") Liga = "uefa";
 
  loadPage(Liga);

function loadPage(Liga)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4){
      var content = document.querySelector(".body-content");
      if(Liga === "uefa") {
        getDataUefa();
      }
      if(Liga === "LigaJerman") {
        getDataBundesLiga();
      }if(Liga === "LigaBelanda"){
        getDataEredivisie();
      }if(Liga === "LigaInggris"){
        getDataPrimierLeague();
      }if(Liga === "LigaSpanyol"){
        getDataPrimeraDivision();
      }if(Liga === "LigaPerancis"){
        getDataLigeu1();
      }
      if(this.status == 200) {
        content.innerHTML = xhttp.responseText;
      } else if(this.status == 404) {
        content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
      } else {
        content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
      }
    }
  };
  xhttp.open("GET", 'Liga/'+Liga+'.html', true);
  xhttp.send();
}

});
