/**
* Main JavaScript for the site
*/

console.log("JavaScript Connected!")

// Get the modal
let modal = document.getElementById("vmRequestModal");

// Get the button that opens the modal
let btn = document.getElementById("vmRequest");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeRequest")[0];

/**
 * Loads the help text
 */
function loadHelp() {

}

/**
 * Loads the order form modal
 */
function launchModal() {
    modal.style.display = "block";
}

/**
* Fetches the available configurations for the option: CPU
*/
function fetchCPUOptions() {

}

/**
* Fetches the available configurations for the option: Memory
*/
function fetchMemoryOptions() {

}

/**
* Fetches the available configurations for the option: Disk
*/
function fetchDiskOptions() {

}

/**
* Fetches the available configurations for the option: Operating Systems
*/
function fetchOSOptions() {

}

/**
* Fetches the available configurations for the option: Environments
*/
function fetchEnvironmentOptions() {

}

/**
* Fetches the available configurations for the option: Location
*/
function fetchLocationOptions() {

}

/**
* Clears the order form to allow the user to reset all inputs
*/
function clearOrder() {

}

/**
* Cancels order and return to the index page
*/
function cancelOrder() {
    modal.style.display = "none";
}

/**
* Submits order and return to the index page
*/
function submitOrder() {

}

/**
* Validates the order prioir to submit
*/
function validateOrder() {

}

/**
* writes a file for download
*/
function downloadOrder() {

}

// When the user clicks on Request Button open the modal
btn.addEventListener("click", launchModal);

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", cancelOrder);

// When the user clicks anywhere outside of the open modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    cancelOrder();
  }
}