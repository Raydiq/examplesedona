var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".form-frame");
var arrivalDate = popup.querySelector("[name=date]");
var adult = popup.querySelector("[name=adult]");
var child = popup.querySelector("[name=child]");
var form = document.querySelector("form");


 link.addEventListener("click", function (evt) {
 	evt.preventDefault(); 
 popup.classList.toggle("form-frame");
 popup.classList.toggle("form-frame-none");  
 });  
form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!arrivalDate.value && !adult.value && !child.value) {
    popup.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    popup.classList.add("modal-error");
  }
});