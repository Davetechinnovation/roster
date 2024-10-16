// Grab the button and content elements
const toggleButton = document.getElementById("toggleButton");
const toggleContent = document.getElementById("toggleContent");

// Add click event listener to the button
toggleButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    // Toggle the "show" class
    if (toggleContent.classList.contains("show")) {
        toggleContent.classList.remove("show");
    } else {
        toggleContent.classList.add("show");
    }
});

hamburge.addEventListener("click", function() {
    toggleContent.classList.remove("show"); 
});


// Grab the button and content elements
const toggleButto = document.getElementById("toggleButto");
const toggleConten = document.getElementById("toggleConten");
const hamburger = document.getElementById("hamburger");

// Add click event listener to the button
toggleButto.addEventListener("click", function() {
    toggleConten.classList.toggle("sho"); // Slide in/out
});


hamburger.addEventListener("click", function() {
    toggleConten.classList.remove("sho"); 
});


// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


const mondayParagraphs = document.querySelectorAll('#monday .shuffle-text');
const thursdayParagraphs = document.querySelectorAll('#thursday .shuffle-text');


const shuffleButton = document.getElementById('shuffleButton');


shuffleButton.addEventListener('click', function() {
   
    const mondayContent = [];
    const thursdayContent = [];

    
    mondayParagraphs.forEach(function(paragraph) {
        mondayContent.push(paragraph.textContent);
    });

    
    thursdayParagraphs.forEach(function(paragraph) {
        thursdayContent.push(paragraph.textContent);
    });

    
    const shuffledMondayContent = shuffleArray(mondayContent);
    const shuffledThursdayContent = shuffleArray(thursdayContent);

   
    mondayParagraphs.forEach(function(paragraph, index) {
        paragraph.textContent = shuffledMondayContent[index];
    });

   
    thursdayParagraphs.forEach(function(paragraph, index) {
        paragraph.textContent = shuffledThursdayContent[index];
    });
});




