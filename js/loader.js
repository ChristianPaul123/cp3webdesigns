  //loader scripts
  window.onload = function() {
    var loader = document.querySelector(".loader");
    setTimeout (function(){
        loader.style.opacity = "0";
    setTimeout (function() {
      loader.style.display = "none";
    },1000);
  },2000);
};
