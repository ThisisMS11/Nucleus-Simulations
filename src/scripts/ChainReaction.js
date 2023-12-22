// Function to generate a random position within the cylinder
function getRandomPosition() {
    const radius = 40; // Assuming the cylinder has a radius of 40% to prevent images from overflowing
    const x = Math.random() * 100; // Random x-coordinate within the cylinder
    const y = Math.random() * 100; // Random y-coordinate within the cylinder
    return { x, y };
}

// Function to create and append random images to the cylinder
function createRandomImages() {
    const cylinder = document.getElementById('mainCylinder');

    for (let i = 0; i < 100; i++) { // Adjust the number of instances as needed
        console.log(i);
        const position = getRandomPosition();
        const img = document.createElement('div');
        img.className = 'random-image';
        img.style.left = `${position.x}%`;
        img.style.top = `${position.y}%`;
        cylinder.appendChild(img);
    }
}
