let Router = require('./router')

document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector('.content');
    let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
    navItems.forEach(navItem => {
      navItem.addEventListener("click", () => {
        let name = navItem.innerText.toLowerCase();
        location.hash = name;
      });
    });
    window.location.hash = "#inbox";
    router = new Router(content);
    router.start();

})