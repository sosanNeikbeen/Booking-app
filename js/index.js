/* When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

//Increment and decrement buttons
let x = 1;
let $span = document.querySelector("span");
let $incButton = document.querySelector(".increment-btn");
let $decButton = document.querySelector(".decrement-btn");

$incButton.addEventListener("click", function () {
  $span.textContent = x++;
});
$decButton.addEventListener("click", function () {
  if ($span.textContent && $span.textContent > 0) $span.textContent = x--;
});

//get todays date and put it as value to date input
document.getElementById("start").valueAsDate = new Date();
document.getElementById("end").valueAsDate = new Date();
