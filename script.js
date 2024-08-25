document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarRight = document.querySelector('.navbar-right');
    const toggleIcon = navbarToggle.querySelector('i');
    const menuOptions = document.querySelectorAll('.menu-option');

    // Function to toggle the mobile menu and sections visibility
    const toggleMenu = () => {
        navbarRight.classList.toggle('show'); // Toggle visibility of navbar links
        toggleIcon.classList.toggle('fa-bars');
        toggleIcon.classList.toggle('fa-xmark');
    };

    // Function to close the menu
    const closeMenu = () => {
        navbarRight.classList.remove('show');
        toggleIcon.classList.add('fa-bars');
        toggleIcon.classList.remove('fa-xmark');
    };

    // Event listener for the navbar toggle button
    navbarToggle.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        toggleMenu();
    });

    // Event listeners for menu options
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Event listener for clicks outside the menu
    document.addEventListener('click', function(event) {
        if (!navbarRight.contains(event.target) && !navbarToggle.contains(event.target)) {
            closeMenu();
        }
    });

    navbarRight.addEventListener('click', function(event) {
        if (event.target.closest('a')) {
            closeMenu();
        }
    });
});

   
