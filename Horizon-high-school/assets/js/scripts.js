function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// main section
// Function to animate counting up for stats
function countUp(elementId, endValue) {
    const element = document.getElementById(elementId);
    let startValue = 0;
    const duration = 2000; // Duration in milliseconds
    const increment = endValue / (duration / 100); // Increment based on duration

    // Interval to update the counter
    const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
            element.textContent = endValue; // Final value
            clearInterval(interval); // Stop the interval
        } else {
            element.textContent = Math.floor(startValue); // Update the number
        }
    }, 100); // Update every 100 milliseconds
}

// Initializing counters with values
countUp('schools', 3);
countUp('teachers', 150);
countUp('students', 1200);

// contact us
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('successMessage').style.display = 'block'; // Show success message
            document.getElementById('contactForm').reset(); // Reset the form fields
        } else {
            alert('Failed to submit form: ' + data.message); // Show error if any
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
});

