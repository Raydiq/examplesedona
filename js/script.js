var link = document.querySelector(".search-hotel");
var popup = document.querySelector(".form-frame");
 link.addEventListener("click", function (evt) {
 	evt.preventDefault(); 
 popup.classList.toggle("form-frame");
 popup.classList.toggle("form-frame-none");  
 }); 