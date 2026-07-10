//Tracking Time
function updateTime()  {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

//Welcome Window
var welcomeScreen = document.querySelector("#welcome");

var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

//APP ICON SELECT
var selectedIcon = undefined;

//Cat Gallery
var catGalleryScreen = document.querySelector("#catgallery");

var catGalleryScreenClose = document.querySelector("#catgalleryclose");
var catGalleryScreenOpen = document.querySelector("#catgalleryopen");

//Tapped Window
var biggestIndex = 1;

//Topbar
var topBar = document.querySelector("#topbar");

//WINDOW INITIALIZATIONS

//Welcome Window
//welcome.initializeWindow(self)
//welcomeclose.initializeWindow(self)
//welcomeopen.initializeWindow(self)

//Cat Gallery APP 
//catgallery.initializeWindow(self)
//initializeWindow(catgalleryclose)
//initializeWindow(catgalleryopen)

//Top Bar
//initializeWindow(topbar)

//Event Detecting
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

catGalleryScreenClose.addEventListener("click", function() {
  closeWindow(catGalleryScreen); 
});

catGalleryScreenOpen.addEventListener("click", function() {
  openWindow(catGalleryScreen);
});

//Makes sure the clicked window is ontop
addWindowTapHandling(welcomeScreen);
addWindowTapHandling(catGalleryScreen);

//FUNCTIONS
function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "flex"
    biggestIndex++;  // Increment biggestIndex by 1
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
}



function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element
}

function deselectIcon(element) {
    element.classList.remove("selected");
    selectedIcon = undefined
}

function handleIconTap(element) {
    if (element.classList.contains("selected")) {
      openWindow(catGalleryScreen)
      deselectIcon(element)
    } else {
      selectIcon(element)
    }
}



function addWindowTapHandling(element) {
  element.addEventListener("mousedown", function() {
    handleWindowTap(element)
  });
};

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon);
}

function initializeWindow(element) {
  var screen = document.querySelector("#" + element);
  addWindowTapHandling(screen);
  dragElement(screen);
}

// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("catgallery"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

