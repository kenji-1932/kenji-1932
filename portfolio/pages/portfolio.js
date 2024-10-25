// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create a cursor element and append it to the body
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'white';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.1s ease, background-color 0.3s ease, width 0.3s ease, height 0.3s ease';
    document.body.appendChild(cursor);

    // Track mouse movement and update cursor position
    document.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;

        // Update cursor position
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
    });

    // Select all navigation items
    const navItems = document.querySelectorAll('.nav-item');

    // Add hover effect to each nav-item
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Change cursor size and color when hovering over a nav-item
            cursor.style.backgroundColor = '#3498db';
            cursor.style.width = '30px';
            cursor.style.height = '30px';
        });

        item.addEventListener('mouseleave', function() {
            // Revert cursor size and color when no longer hovering
            cursor.style.backgroundColor = 'white';
            cursor.style.width = '20px';
            cursor.style.height = '20px';
        });
    });
});
