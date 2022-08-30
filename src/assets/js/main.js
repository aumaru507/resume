window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "#f36c60";
  } else {
    document.getElementById("navbar").style.background = "none";
  }
}

// ============================ pro ============================================
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

// ===================================================================================









