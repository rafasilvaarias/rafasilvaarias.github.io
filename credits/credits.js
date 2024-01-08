// Function to set the width and height of the element with id 'titleDiv'
function setElementSize() {
    const titleDiv = document.getElementById('titleDiv');
    const width = window.innerWidth;
    const height = window.innerHeight;
    titleDiv.style.width = `${width}px`;
    titleDiv.style.height = `${height}px`;
}

// Event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', setElementSize);

// Event listener for the 'resize' event
window.addEventListener('resize', setElementSize);
