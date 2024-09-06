let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)


// Create and add the pine tree
let pineTree = document.createElement('img');
pineTree.src = 'assets/pine-tree.png';
pineTree.style.position = 'absolute';
pineTree.style.left = '450px';
pineTree.style.bottom = '200px';
document.body.append(pineTree);

// Define a function to create and add new images
function newImage(src, left, bottom) {
    const img = document.createElement('img');
    img.src = src;
    img.style.position = 'absolute';
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
    return img;
}

// Define a function to create and add new items with double-click event listener
function newItem(src, left, bottom) {
    const item = newImage(src, left, bottom);
    item.addEventListener('dblclick', () => {
        item.remove();
    });
}

// Add the background images
function addBackgroundImage(src, width, height) {
    for (let x = 0; x < window.innerWidth; x += width) {
        for (let y = 0; y < window.innerHeight; y += height) {
            newImage(src, `${x}px`, `${y}px`);
        }
    }
}

// Add sky and grass background images
addBackgroundImage('assets/sky.png', 100, 100,);
addBackgroundImage('assets/grass.png', 100, 100, 0);

// Use newImage to add static images
newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

// Use newItem to add items
newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');
