// Initialize the participant count
let participantCount = 1;

// Function to generate the participant template
function participantTemplate(count) {
    return `
        <section class="participant" id="participant${count}">
            <label for="name${count}">Participant Name:</label>
            <input type="text" id="name${count}" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" required>
        </section>
    `;
}

// Add event listener for the Add Participant button
document.getElementById('add-participant').addEventListener('click', () => {
    participantCount++;
    const participantFieldset = document.getElementById('participants');
    // Insert the new participant template before the button
    participantFieldset.insertAdjacentHTML('beforeend', participantTemplate(participantCount));
});

// Function to calculate total fees
function totalFees() {
    // Select all fee inputs
    const feeElements = document.querySelectorAll("[id^='fee']");
    // Convert NodeList to an array and sum up the values
    return [...feeElements].reduce((total, input) => total + parseFloat(input.value) || 0, 0);
}

// Submit form handling
document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    const adultName = document.getElementById('adult-name').value; // Get adult name
    const totalFeesAmount = totalFees(); // Calculate total fees
    const summaryElement = document.getElementById('summary');
    
    // Hide the form and show the summary
    document.getElementById('registration-form').style.display = 'none';
    summaryElement.style.display = 'block';
    summaryElement.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFeesAmount} in Fees.`;
});
