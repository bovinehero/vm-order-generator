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

// Get the base url for where all the API mocks are hosted
let baseUrl = document.URL;

let formSelectList = ['cpus', 'memory', 'disks', 'oss', 'envs', 'locations']

/**
 * Loads the help text
 */
function loadHelp() {

}

/**
 * Loads the order form modal
 */
function launchModal() { 
    // location of the fake API for the form options
    let url = `${baseUrl}/assets/mocks/sample.json`;
    
    modal.style.display = "block";
    // Mocked API Call to fetch the data from a web resourse
    fetch(url)
    .then(r => r.json())
    .then(data => populateForm(data, formSelectList))
}

/**
 * Function to complete the modal data from the remote call
 * @param {*} data 
 */
function populateForm(data, selectList) {
  // Clean form first to reset the options
  cleanForm(selectList);
  // Populate the form options
  addOptions(data['RequestParams']['CPUCount'], 'cpus')
  addOptions(data['RequestParams']['MemorySize'], 'memory')
  addOptions(data['RequestParams']['DiskSize'], 'disks')
  addOptions(data['RequestParams']['OperatingSystem'], 'oss')
  addOptions(data['RequestParams']['Environment'], 'envs')
  addOptions(data['RequestParams']['Location'], 'locations')

}

/**
 * Function to add <select> options given an id
 * @param {*} optionList
 * @param {*} selectId 
 */
function addOptions(optionList, selectId) {
  console.log(optionList, selectId)
  let selectedId = document.getElementById(selectId);
  for (let i in optionList) {
    let opt = document.createElement('option');
    opt.value = optionList[i];
    opt.innerHTML = optionList[i];
    selectedId.appendChild(opt);
  }
}

function removeAll(selectId) {
  let selectedId = document.getElementById(selectId);
  while (selectedId.options.length > 0) {
    selectedId.remove(0);
  }
}

function cleanForm(selectList) {
  for (let i in selectList) {
    removeAll(selectList[i])
  }
}

/**
* Clears the order form to allow the user to reset all inputs
*/
function clearOrder() {
  launchModal();
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