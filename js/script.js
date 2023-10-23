
//order window
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];

// When the button is clicked, set the modal to 'block'
btn.onclick = function() {
    modal.style.display = 'block';
}

// When the close button inside the modal is clicked, set the modal to 'none'
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


//form validation
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    var reviewName = document.getElementById('reviewName').value;
    var reviewEmail = document.getElementById('reviewEmail').value;
    var reviewText = document.getElementById('reviewText').value;
    var form = document.getElementById('reviewForm');

    // Remove existing error messages
    var existingAlerts = form.querySelectorAll('.custom-alert');
    existingAlerts.forEach(function(alert) {
        alert.remove();
    });

    // Validate name (it should not be empty)
    if (reviewName.trim() === '') {
        showAlert('Name is required', document.getElementById('reviewName'));
        event.preventDefault(); 
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(reviewEmail)) {
        showAlert('Invalid email address', document.getElementById('reviewEmail'));
        event.preventDefault(); 
    }

    // Validate review text length (at least 30 characters)
    if (reviewText.trim().length < 30) {
        showAlert('Review must be at least 30 characters long', document.getElementById('reviewText'));
        event.preventDefault(); 
    }

    // Function to show custom alert below the element
    function showAlert(message, element) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert';
        alertDiv.textContent = message;
        element.parentNode.insertBefore(alertDiv, element.nextSibling);
    }
});


