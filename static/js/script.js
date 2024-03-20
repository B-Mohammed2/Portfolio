// List of colors
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

const neonGroup = document.querySelector('.neonGroup');

// Function to create neon divs based on container width
function createNeonDivs(containerWidth) {
    const neonDivWidth = 19; // Width of each neon div in pixels
    const numDivs = Math.ceil(containerWidth / neonDivWidth); // Calculate number of divs needed to fill the container width

    // Clear previous divs
    neonGroup.innerHTML = '';

    // Loop for creating divs
    for (let i = 0; i < numDivs; i++) {
        // Creating div
        const container = document.createElement("div");
        // Adding class name for the div
        container.className = "neonDiv";
        neonGroup.appendChild(container);

        // Set random color from list colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        container.style.backgroundColor = randomColor;
    }
}

// Function to update number of neon divs based on container size
function updateNeonDivsCount() {
    const containerWidth = neonGroup.offsetWidth; // Width of the container
    createNeonDivs(containerWidth); // Create neon divs based on container width
}

// Initial creation of neon divs
updateNeonDivsCount();

// Update number of neon divs on window resize
window.addEventListener('resize', updateNeonDivsCount);


// !typing text effect
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const text = [
        "Hello, I'm Begard",
        "I'm a Junior software developer..."
    ]; 
   
    // Text to be typed
    let index = 0;
    let charIndex = 0; // Initialize the character index

    function typeText() {
        if (index < text.length) {
            if (charIndex < text[index].length) {
                // Append each character with a line break
                textElement.innerHTML += text[index].charAt(charIndex);
                
                charIndex++;
                setTimeout(typeText, 100); // Adjust typing speed (milliseconds)
            
            } else {
                index++;
                charIndex = 0;
                textElement.innerHTML += '<br>'; // Add line break between strings
                setTimeout(typeText, 1000); // Delay between strings (milliseconds)
            }
        }
    }
    typeText();
});


//  function to remove a navlist when listItem clicked

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.listItem');
    const checkbox = document.getElementById('check');

    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Uncheck the checkbox
            checkbox.checked = false;
        });
    });
});



