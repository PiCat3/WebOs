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
var catGalleryPrevious = document.querySelector("#previousgallerypage")
var catGalleryNext = document.querySelector("#nextgallerypage")
var catGalleryImageSection = document.querySelector("#catgalleryimagessection")

//Cat Notes
var catNotesScreen = document.querySelector("#catnotes");

var catNotesScreenClose = document.querySelector("#catnotesclose");
var catNotesScreenOpen = document.querySelector("#catnotesopen");
var catNoteOpen = document.querySelector("#newcatnote")
var catNoteWritingSurf = document.querySelector("#catnotescontentsection")

//Calculator
var calculatorScreen = document.querySelector("#calculator");

var calculatorScreenClose = document.querySelector("#calculatorclose");
var calculatorScreenOpen = document.querySelector("#calculatoropen");

var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")
var b5 = document.querySelector("#b5")
var b6 = document.querySelector("#b6")
var b7 = document.querySelector("#b7")
var b8 = document.querySelector("#b8")
var b9 = document.querySelector("#b9")
var b0 = document.querySelector("#b0")

var bminus = document.querySelector("#minus")
var bplus = document.querySelector("#plus")
var bdivide = document.querySelector("#divide")
var bmultiply = document.querySelector("#multiply")
var bequal = document.querySelector("#equal")
var bprocent = document.querySelector("#procent")
var bDEL = document.querySelector("#DEL")
var bAC = document.querySelector("#AC")
var bdecimal = document.querySelector("#decimal")
var bsqrt = document.querySelector("#sqrt")

//Cat Scroll
var catScrollScreen = document.querySelector("#catscroll");

var catScrollScreenOpen = document.querySelector("#catscrollopen");
var catScrollScreenClose = document.querySelector("#catscrollclose");

//Tapped Window
var biggestIndex = 1;

//Current Note
var currentNoteIndex = 0;

//Current Gallery page
var currentGalleryIndex = 0;

//Topbar and XY pos
var topBar = document.querySelector("#topbar");

//STORING WINDOW INFO
var noteContent = [
  {
    title: `
      <span contenteditable="True">Welcome</span> `,
    date: new Date().toLocaleDateString("en-US"),
    content: `
        <p contenteditable="True">  
          <span contenteditable="true">Welcome to <strong>Cat Notes!</strong>
            </br>
            </br>
            Cat Notes is a digital notetaker available for <strong>CatOS</strong> users. 
            It is <strong>Cat friendly</strong>
            - being both <strong>intuitive</strong> and <strong>easy to use</strong>. Even cats can understand it <i>(probably)</i>.
            </br>
            Go ahead and try it!
          </span>
        </p>
    `
  }
];

for (let i = 0; i < noteContent.length; i++) {
  addToSideBar(i)
}

var galleryContent = [
  {
    title:"Mainpage",
    content: `
        <img class="catgalleryimages" src="graphics/images/catimagesn9.png">
        <img class="catgalleryimages" src="graphics/images/catimagesn8.2.png">
    `
  },
  {
    title:"Gifpage1",
    content:`
        <img class="catgalleryimages" src="graphics/gifs/cat-ice-cream-eating.gif">
        <img class="catgalleryimages" src="graphics/gifs/pov-baby-kaiif.gif">
        <img class="catgalleryimages" src="graphics/gifs/butter-cat.gif">
        <img class="catgalleryimages" src="graphics/gifs/cat-ball.gif">
        <img class="catgalleryimages" src="graphics/gifs/cat-black-cat.gif">
        <img class="catgalleryimages" src="graphics/gifs/cat-cat-sink.webp">
        <img class="catgalleryimages" src="graphics/gifs/cat-dog.gif">
        <img class="catgalleryimages" src="graphics/gifs/cat-meme.gif">
        <img class="catgalleryimages" src="graphics/gifs/cat-sleepy.gif">
        <img class="catgalleryimages" src="graphics/gifs/head-empty-cat.gif">
        <img class="catgalleryimages" src="graphics/gifs/kittycore-cat.gif">
        <img class="catgalleryimages" src="graphics/gifs/meow.webp">
        <img class="catgalleryimages" src="graphics/gifs/orange-cat-cat-hitting-cat.gif">
        <img class="catgalleryimages" src="graphics/gifs/qazqaz.gif">
        <img class="catgalleryimages" src="graphics/gifs/shocked-shocked-cat.gif">
    `
  },
];

var calculatorDisplayContent = [
  {
    title:"Display",
    content:` `
  }
];

//WINDOW INITIALIZATIONS
initializeWindow("welcome");
initializeWindow("catgallery");
initializeWindow("catnotes");
initializeWindow("calculator");
initializeWindow("catscroll");



//EVENT DETECTING
//Welcome
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

//Catgallery
catGalleryScreenClose.addEventListener("click", function() {
  closeWindow(catGalleryScreen); 
});

catGalleryScreenOpen.addEventListener("click", function() {
  handleIconTap(catGalleryScreenOpen, catGalleryScreen);
});

catGalleryPrevious.addEventListener("click", function() {
  currentGalleryIndex -= 1;
  if (currentGalleryIndex < 0)
    currentGalleryIndex = 1;
  setGalleryContent(currentGalleryIndex)
});

catGalleryNext.addEventListener("click", function() {
  currentGalleryIndex += 1;
  setGalleryContent(currentGalleryIndex % 2);
});

//Catnotes
catNotesScreenClose.addEventListener("click", function() {
  closeWindow(catNotesScreen); 
});

catNotesScreenOpen.addEventListener("click", function() {
  handleIconTap(catNotesScreenOpen, catNotesScreen);
});

catNoteOpen.addEventListener("click", function() {
  addEmptyNote();
});

catNoteWritingSurf.addEventListener("input", function() {
  noteContent[currentNoteIndex].content = catNoteWritingSurf.innerHTML;
});

//Calculator
calculatorScreenOpen.addEventListener("click", function() {
  handleIconTap(calculatorScreenOpen, calculatorScreen);
});

calculatorScreenClose.addEventListener("click", function() {
  closeWindow(calculatorScreen);
  calculatorDisplayContent[0].content = "";
});

//Buttons
checkButton(b1, "1");
checkButton(b2, "2");
checkButton(b3, "3");
checkButton(b4, "4");
checkButton(b5, "5");
checkButton(b6, "6");
checkButton(b7, "7");
checkButton(b8, "8");
checkButton(b9, "9");
checkButton(b0, "0");
checkButton(bplus, "+");
checkButton(bminus, "-");
checkButton(bmultiply, "x");
checkButton(bdivide, "/");
checkButton(bdecimal, ".");
checkButton(bsqrt, "√");

bDEL.addEventListener("click", function() {
  var displayContent = document.querySelector("#calculatordisplay");
  calculatorDisplayContent[0].content = calculatorDisplayContent[0].content.slice(0,-1);
  displayContent.innerHTML = calculatorDisplayContent[0].content;
})

bAC.addEventListener("click", function() {
  var displayContent = document.querySelector("#calculatordisplay");
  calculatorDisplayContent[0].content = calculatorDisplayContent[0].content.slice(0,0);
  displayContent.innerHTML = calculatorDisplayContent[0].content;
})

bequal.addEventListener("click", function() {
  var displayContent = document.querySelector("#calculatordisplay");
  var result = 0
  //for (let i = 0; i < calculatorDisplayContent[0].content.length; i++) {
  //  let char = calculatorDisplayContent[0].content[i];
  var num_list = calculatorDisplayContent[0].content.split("+");
  var n1 = parseInt(num_list[0])
  var n2 = parseInt(num_list[1])
  result = n1 + n2;
  displayContent.innerHTML = result;
  console.log(calculatorDisplayContent[0].content);
  console.log(num_list);
  console.log(n1, n2);
})

//Cat Scroll
catScrollScreenOpen.addEventListener("click", function() {
  handleIconTap(catScrollScreenOpen, catScrollScreen);
});

catScrollScreenClose.addEventListener("click", function() {
  closeWindow(catScrollScreen);
});


//FUNCTIONS
//Tracking Time
function updateTime()  {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

function closeWindow(element) {
    element.style.display = "none";
};

function openWindow(element) {
    element.style.display = "flex";
    biggestIndex++;  // Increment biggestIndex by 1
    element.style.zIndex = biggestIndex;
    topBar.style.zIndex = biggestIndex + 1;
};

function setNotesContent(index) {
  currentNoteIndex = index
  var notesContent = document.querySelector("#catnotescontentsection");
  notesContent.innerHTML = noteContent[index].content;
};
setNotesContent(0);

function setGalleryContent(index) {
  currentGalleryIndex = index
  var gallerysContent = document.querySelector("#catgalleryimagessection");
  gallerysContent.innerHTML = galleryContent[index].content
}
setGalleryContent(0);

function addToSideBar(index) {
  var sidebar = document.querySelector("#catnotessidebar");
  var note = noteContent[index];
  var newDiv = document.createElement("div");

  newDiv.innerHTML = `
  <p contenteditable="True" style="margin-top: 10px; margin-bottom: 0px;">
    ${note.title}
  </p>
  <p style="font-size: 12px; margin: 0px;">
    ${note.date}
  </p>
  `;

  sidebar.appendChild(newDiv);

  newDiv.addEventListener("click", function() {
    setNotesContent(index);
  });
};

function addEmptyNote() {
  const newNote = {
    title: "New Note",
    date: new Date().toLocaleDateString("en-US"),
    content: `
      <p contenteditable="true">
        Write your text here...
      </p>
    `
  };

  noteContent.push(newNote);

  const newIndex = noteContent.length - 1;
  addToSideBar(newIndex);
  setNotesContent(newIndex);
};

function selectIcon(element) {
    element.classList.add("selected");
    selectedIcon = element;
};

function deselectIcon(element) {
    element.classList.remove("selected");
    selectedIcon = undefined;
};

function handleIconTap(element,screen) {
    if (element.classList.contains("selected")) {
      openWindow(screen);
      deselectIcon(element);
    } else {
      selectIcon(element);
    };
};

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", function() {
    handleWindowTap(element);
  });
};

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon);
};

function initializeWindow(element) {
  var screen = document.querySelector("#" + element);
  addWindowTapHandling(screen);
  dragElement(screen);
};

function setCalculatorDisplayContent(input) {
  var displayContent = document.querySelector("#calculatordisplay");
  calculatorDisplayContent[0].content += input;
  displayContent.innerHTML = calculatorDisplayContent[0].content
}

function checkButton(b, value) {
  b.addEventListener("click", function() {
    setCalculatorDisplayContent(value)
  })
}

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

    if (element.offsetTop < 300)
      element.style.top = "300px"
    if (element.offsetTop > window.innerHeight - 100)
      element.style.top = (window.innerHeight - 100) + "px";
    if (element.offsetLeft < 50)
      element.style.left = "50px";
    if (element.offsetLeft > window.innerWidth - 50)
      element.style.left = (window.innerWidth - 50) + "px";    

    //FIX THE WINDOW HIDING ISSUE (WHERE IT GOES BEYOND VIEWPORT AND CANNOT BE MOVED BACK :C)

  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

