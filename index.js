/* SideBar Closure */
document.getElementById("close_sidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("hide_sidebar");
});

/* Mobile Sidebar */
document.getElementById("mobile_menu").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("hide_sidebar");
});

// console.log(document);

document.addEventListener("DOMContentLoaded", function () {
  var mainNavs = document.getElementsByClassName("mainNavItem");
  for (var i = 0; i < mainNavs.length; i++) {
    mainNavs[i].addEventListener("click", function () {
      var itemToHide = this.nextElementSibling;
      this.classList.toggle("active");
      itemToHide.classList.toggle("hideItem");
    });
  }
});
