// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get form element (fixed ID issue)
    const form = document.getElementById('survey-form');
    const clearBtn = document.getElementById('clearBtn');

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

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
        formValues.sports = selectedSports.length > 0 ? selectedSports.join(', ') : 'None selected';

        // Format the data for display
        let formattedData = `Survey Submission:\n\n`;
        formattedData += `First Name: ${formValues.firstName || 'Not provided'}\n`;
        formattedData += `Middle Initial: ${formValues.mi || 'Not provided'}\n`;
        formattedData += `Last Name: ${formValues.lastName || 'Not provided'}\n`;
        formattedData += `City: ${formValues.city || 'Not provided'}\n`;
        formattedData += `State: ${formValues.state || 'Not provided'}\n`;
        formattedData += `Zip Code: ${formValues.zipCode || 'Not provided'}\n`;
        formattedData += `Sports: ${formValues.sports}\n`;

        // Get selected year (radio button)
        const selectedYear = document.querySelector('input[name="year"]:checked');
        formattedData += `Year: ${selectedYear ? selectedYear.value : 'None selected'}\n`;

        // Get favorite food
        formattedData += `Favorite Food: ${formValues.food || 'None selected'}\n`;

        // Get comments
        formattedData += `Comments: ${formValues.comments || 'No comments provided'}`;

        // Display form data in popup
        alert(formattedData);

        // Log to console for debugging
        console.log('Form submitted with values:', formValues);

        // Optional: Reset form after submission
        // form.reset();
    });

    clearBtn.addEventListener('click', function() {
        form.reset();

        document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
            input.checked = false;
        });
    });
});