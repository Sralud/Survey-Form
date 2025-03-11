// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get form and clear button elements
    const form = document.getElementById('surveyForm');
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
        formValues.sports = selectedSports;
        
        // Display form data
        console.log('Form submitted with values:', formValues);
        alert('Form submitted successfully!');
        
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
        // .then(data => console.log('Success:', data))
        // .catch(error => console.error('Error:', error));
    });
    
    // Handle form clearing
    clearBtn.addEventListener('click', function() {
        form.reset();
        console.log('Form has been cleared');
    });
});