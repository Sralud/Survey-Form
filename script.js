document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('survey-form');
    const clearBtn = document.getElementById('clearBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        let formValues = {};

        for (let [key, value] of formData.entries()) {
            formValues[key] = value;
        }

        const selectedSports = [];
        document.querySelectorAll('input[name="sport"]:checked').forEach(checkbox => {
            selectedSports.push(checkbox.value);
        });

        formValues.sports = selectedSports.length > 0 ? selectedSports.join(', ') : 'None selected';

        let formattedData = `Survey Submission:\n\n`;
        formattedData += `First Name: ${formValues.firstName || 'Not provided'}\n`;
        formattedData += `Middle Initial: ${formValues.mi || 'Not provided'}\n`;
        formattedData += `Last Name: ${formValues.lastName || 'Not provided'}\n`;
        formattedData += `City: ${formValues.city || 'Not provided'}\n`;
        formattedData += `State: ${formValues.state || 'Not provided'}\n`;
        formattedData += `Zip Code: ${formValues.zipCode || 'Not provided'}\n`;
        formattedData += `Sports: ${formValues.sports}\n`;

        const selectedYear = document.querySelector('input[name="year"]:checked');
        formattedData += `Year: ${selectedYear ? selectedYear.value : 'None selected'}\n`;

        formattedData += `Favorite Food: ${formValues.food || 'None selected'}\n`;

        formattedData += `Comments: ${formValues.comments || 'No comments provided'}`;

        alert(formattedData);

        console.log('Form submitted with values:', formValues);

    });

    clearBtn.addEventListener('click', function() {
        form.reset();

        document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
            input.checked = false;
        });
    });
});