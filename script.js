let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.navbar a'); 

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menuItems.forEach(item => {
    item.onclick = () => {
        menuicon.classList.remove('bx-x'); // Remove the x icon
        navbar.classList.remove('active'); // Close the navbar
    };
});



const navItems = document.querySelectorAll('header nav a');

function removeActiveClass() {
    navItems.forEach(item => {
      item.classList.remove('active');
    });
  }
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      removeActiveClass();

      this.classList.add('active');
  });
});

let titles = ["Web Developer", "Backend Developer", "UI/UX Designer"];
let index = 0; // Index for the titles array
let charIndex = 0; // Index for characters in the current title
let currentTitle = titles[index]; // Start with the first title
let isDeleting = false; // Track whether we are typing or deleting

function type() {
    const dynamicText = document.getElementById("dynamic-text");

    if (!isDeleting) {
        // Typing characters
        dynamicText.innerText = currentTitle.substring(0, charIndex);
        charIndex++;
        if (charIndex <= currentTitle.length) {
            setTimeout(type, 100); // Type speed of 100ms
        } else {
            // Finished typing, start deleting after a pause
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1000); // Pause for 1 second before deleting
        }
    } else {
        // Deleting characters
        dynamicText.innerText = currentTitle.substring(0, charIndex);
        charIndex--;
        if (charIndex >= 0) {
            setTimeout(type, 50); // Deleting speed of 50ms
        } else {
            // Finished deleting, move to the next title
            isDeleting = false;
            index = (index + 1) % titles.length; // Move to next title
            currentTitle = titles[index]; // Update current title
            setTimeout(type, 100); // Start typing the next title
        }
    }
}

// Start the typewriter effect
type();