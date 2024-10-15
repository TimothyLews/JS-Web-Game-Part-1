// Declare variables for character's position and direction
let x = 100; // initial horizontal position
let y = 100; // initial vertical position
let direction = null; // initial direction

// Reference to the character element
const greenCharacter = document.querySelector('img[src="assets/green-character.gif"]');

// Function to move the character based on the current direction
function moveCharacter() {
    if (direction === 'north') {
        y += 1; // Move up
    } else if (direction === 'south') {
        y -= 1; // Move down
    } else if (direction === 'east') {
        x += 1; // Move right
    } else if (direction === 'west') {
        x -= 1; // Move left
    }

    // Update character's position
    greenCharacter.style.left = `${x}px`;
    greenCharacter.style.bottom = `${y}px`;

    // Update character's image based on direction
    updateCharacterImage();
}

// Function to update character image based on direction
function updateCharacterImage() {
    if (direction === 'north') {
        greenCharacter.src = 'assets/green-character-north.gif';
    } else if (direction === 'south') {
        greenCharacter.src = 'assets/green-character-south.gif';
    } else if (direction === 'east') {
        greenCharacter.src = 'assets/green-character-east.gif';
    } else if (direction === 'west') {
        greenCharacter.src = 'assets/green-character-west.gif';
    }
}

// Function to handle key down events
function handleKeyDown(e) {
    // Change direction based on the arrow key pressed
    if (e.key === 'ArrowUp') {
        direction = 'north';
    } else if (e.key === 'ArrowDown') {
        direction = 'south';
    } else if (e.key === 'ArrowRight') {
        direction = 'east';
    } else if (e.key === 'ArrowLeft') {
        direction = 'west';
    }
}

// Function to handle key up events
function handleKeyUp(e) {
    // Stop moving when the key is released
    if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(e.key)) {
        direction = null;
    }
}

// Function to start moving the character
function startMoving() {
    setInterval(moveCharacter, 100); // Move the character every 100ms
}

// Event listeners for key down and key up
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

// Start moving the character
startMoving();
