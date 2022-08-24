
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "#0A6C8B";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}

