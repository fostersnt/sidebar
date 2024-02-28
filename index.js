/* SideBar Closure */
document.getElementById("close_sidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("hide_sidebar");
});

document.getElementById("mobile_menu").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("hide_sidebar");
});

document.addEventListener("DOMContentLoaded", function () {
  var mainNavs = document.getElementsByClassName("mainNavItem");
  for (var i = 0; i < mainNavs.length; i++) {
    mainNavs[i].addEventListener("click", function () {
      // for (let index = 0; index < mainNavs.length; index++) {
      //   let check =
      //     mainNavs[index].nextElementSibling.classList.contains("hideItem");
      //   if (!check) {
      //     mainNavs[index].nextElementSibling.classList.add("hideItem");
      //     check = false;
      //   }
      // }
      var itemToHide = this.nextElementSibling;
      this.classList.toggle("active");
      itemToHide.classList.toggle("hideItem");
      // var itemToHide = this.nextElementSibling;
      // this.classList.toggle("active");
      // itemToHide.classList.toggle("hideItem");
      // let check = itemToHide.classList.contains("hideItem");
      // console.log(itemToHide);
      // console.log(check);
      // if (check) {
      //   itemToHide.classList.remove("hideItem");
      //   check = false;
      //   console.log("PRESENT");
      // } else {
      //   console.log("MISSING");
      //   itemToHide.classList.add("hideItem");
      //   check = true;
      // }
    });
  }
});
