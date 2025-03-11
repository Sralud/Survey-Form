// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get form element - note the ID has a space in the HTML
    const form = document.getElementById('survey form');
    const clearBtn = document.getElementById('clearBtn');
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission behavior
        event.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        let formValues = {};
        
        // Convert FormData to regular object
        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        
        // Get selected sports (checkboxes can have multiple values)
        const selectedSports = [];
        document.querySelectorAll('input[name="sport"]:checked').forEach(checkbox => {
            selectedSports.push(checkbox.value);
        });
        
        // Add sports array to form values
        formValues.sports = selectedSports.length > 0 ? selectedSports : 'None selected';
        
        // Get selected year (radio button)
        const selectedYear = document.querySelector('input[name="year"]:checked');
        formValues.year = selectedYear ? selectedYear.value : 'None selected';
        
        // Format the data for display
        let formattedData = '';
        for (const [key, value] of Object.entries(formValues)) {
            if (key !== 'sports' && key !== 'sport') { // Avoid duplicate sport entries
                formattedData += `${key}: ${value}\n`;
            }
        }
        
        // Add sports separately for better formatting
        formattedData += `Sports: ${formValues.sports}\n`;
        
        // Display form data
        console.log('Form submitted with values:', formValues);
        alert('Form submitted successfully!\n\n' + formattedData);
        
        // You could send the data to a server here using fetch API
        // Example:
        // fetch('/submit-form', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formValues),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        //     alert('Form submitted to server successfully!');
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     alert('Error submitting form: ' + error.message);
        // });
    });
    
    // Handle form clearing
    clearBtn.addEventListener('click', function() {
        // Reset all form fields
        form.reset();
        
        // Additional cleanup for checkboxes and radio buttons if needed
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
        });
        
        // Reset select dropdown to first option
        document.getElementById('food').selectedIndex = 0;
        
        // Clear textarea
        document.getElementById('comments').value = '';
        
        console.log('Form has been cleared');
    });
    
    // Optional: Add validation for required fields
    const validateForm = () => {
        let isValid = true;
        
        // Example validation for first name
        const firstName = document.getElementById('firstName').value;
        if (!firstName.trim()) {
            isValid = false;
            // You could add visual indication of error here
            // document.getElementById('firstName').classList.add('error');
        }
        
        return isValid;
    };
    
    // Optional: Add event listeners for real-time validation
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.addEventListener('blur', function() {
            if (!this.value.trim() && this.id === 'firstName') {
                // Add validation styling
                // this.classList.add('error');
            } else {
                // Remove validation styling
                // this.classList.remove('error');
            }
        });
    });
});