document.addEventListener("DOMContentLoaded", function () {
  var mainNavs = document.getElementsByClassName("mainNavItem");
  for (var i = 0; i < mainNavs.length; i++) {
    // console.log(mainNavs[i]);
    // mainNavs[i].classList.remove("active", "hideItem");
    mainNavs[i].addEventListener("click", function () {
      var itemToHide = this.nextElementSibling;

      for (let index = 0; index < mainNavs.length; index++) {
        mainNavs[index].classList.remove("active");
        mainNavs[index].nextElementSibling.classList.add("hideItem");
        // continue;
      }
      this.classList.toggle("active");
      if (itemToHide) {
        itemToHide.classList.toggle("hideItem");
      }
    });
  }
});
