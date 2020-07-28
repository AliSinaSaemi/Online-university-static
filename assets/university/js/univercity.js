$(".bookmark").click(function () {
  $(this).toggleClass("bookmarked");
});

var element = document.querySelectorAll("[data-limitedText]");
for (var i = 0; i < element.length; i++) {
  var attrVal = parseInt(element[i].attributes["data-limitedText"].value);
  if (element[i].innerHTML.length > attrVal) {
    var findSpace = false;
    for (var j = attrVal - 4; j > 1; j--) {
      if (element[i].innerHTML.substring(j - 1, j) == " ") {
        findSpace = true;
        element[i].innerHTML = element[i].innerHTML.substring(0, j) + " ...";
        break;
      }
    }
    if (!findSpace) {
      element[i].innerHTML = element[i].innerHTML.substring(0, attrVal);
    }
  }
}

$(".tab").on("click", function (evt) {
  evt.preventDefault();
  $(this)
    .parent(".card-division")
    .addClass("scale")
    .siblings()
    .removeClass("scale");
  var sel = this.getAttribute("data-toggle-target");
  $(".tab-content").removeClass("active").filter(sel).addClass("active");
});

const slider = document.querySelector(".x-scroll");
let isDown = false;
let startX;
let scrollLeft;

/*------------------- Touchable tabs to move them -----------------------*/
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
