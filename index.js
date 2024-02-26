document.addEventListener("DOMContentLoaded", function () {
    var mainNavs = document.getElementsByClassName("mainNavItem");
    var subNavs = document.querySelectorAll(".sub");
    for (var i = 0; i < mainNavs.length; i++) {
      mainNavs[i].addEventListener("click", function () {
        // var childToHide = this.querySelector(".sub");
        var childToHide = this.nextElementSibling;
        if (childToHide) {
          childToHide.classList.toggle("hideItem");
        }
      });
    }
  });