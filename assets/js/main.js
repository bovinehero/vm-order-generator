/**
* Main JavaScript for the site
*/
console.log("JavaScript Connected!");
// Get the modal
let modal = document.getElementById("vmRequestModal");
// Get the button that opens the modal
let btn = document.getElementById("vmRequest");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeRequest")[0];
// Get the base url for where all the API mocks are hosted
let baseUrl = document.URL;

let formSelectList = ['cpus', 'memory', 'disks', 'oss', 'envs', 'locations'];

/**
 * Loads the order form modal
 */
function launchModal() { 
    // location of the fake API for the form options
    let url = `${baseUrl}/assets/mocks/sample.json`;  
    console.log(url);
    modal.style.display = "block";
    // Mocked API Call to fetch the data from a web resourse
    fetch(url)
    .then(r => r.json())
    .then(data => populateForm(data, formSelectList));
}

/**
 * Function to complete the modal data from the remote call
 * @param {*} data 
 */
function populateForm(data, selectList) {
  // Clean form first to reset the options
  cleanForm(selectList);
  // Populate the form options
  addOptions(data.RequestParams.CPUCount, 'cpus');
  addOptions(data.RequestParams.MemorySize, 'memory');
  addOptions(data.RequestParams.DiskSize, 'disks');
  addOptions(data.RequestParams.OperatingSystem, 'oss');
  addOptions(data.RequestParams.Environment, 'envs');
  addOptions(data.RequestParams.Location, 'locations');

}

/**
 * Function to add <select> options given an id
 * @param {*} optionList
 * @param {*} selectId 
 */
function addOptions(optionList, selectId) {
  console.log(optionList, selectId);
  let selectedId = document.getElementById(selectId);
  for (let i in optionList) {
    // use of hasOwnProperty check for defensive coding
    if (optionList.hasOwnProperty(i)) {
    let opt = document.createElement('option');
    opt.value = optionList[i];
    opt.innerHTML = optionList[i];
    selectedId.appendChild(opt);
    }
  }
}

/**
 * removes all options from a <select>
 * @param {*} selectId 
 */
function removeAll(selectId) {
  let selectedId = document.getElementById(selectId);
  while (selectedId.options.length > 0) {
    selectedId.remove(0);
  }
}

/**
 * For loop wrapper for removeAll - I'm lazy
 * @param {} selectList 
 */
function cleanForm(selectList) {
  for (let i in selectList) {
    // use of hasOwnProperty check for defensive coding
    if (selectList.hasOwnProperty(i)) {
    removeAll(selectList[i]);
    }
  }
}

/**
* Clears the order form via reload of the modal
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
* writes a file for download
*/
function downloadOrder() {
  // fetch all key pairs from the form
  let name = "VM Request Order";
  let cpu = document.getElementById("cpus");
  let memory = document.getElementById("memory");
  let disk = document.getElementById("disks");
  let os = document.getElementById("oss");
  let env = document.getElementById("envs");
  let location = document.getElementById("locations");
  let notes = document.getElementById("notes");
  // create the output string
  let output = '\r Name: ' + name + ' \r\n ' + 
  'CPU Count: ' + cpu.value + ' \r\n ' + 
  'Memory: ' + memory.value + ' \r\n ' + 
  'Disk Size: ' + disk.value + ' \r\n ' + 
  'Operating System: ' + os.value + ' \r\n ' +
  'Backup Required: Confirm Backup type in Notes  \r\n ' +
  'Environment: ' + env.value + ' \r\n ' + 
  'Location: ' + location.value + ' \r\n ' + 
  'Notes: ' + notes.value;
  // new constructor to create a text blob from the output
  console.log(output);
  let outputToBLOB = new Blob([output], { type: 'text/plain' });
  // The file to save the data.
  let filename = 'vmOrder.txt';	  
  // create an anchor to vmOrder and assign download
  let fileLink = document.createElement("a");
  fileLink.download = filename;
  fileLink.href = window.webkitURL.createObjectURL(outputToBLOB);
  // call the download
  fileLink.click(); 
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
};