document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    const participantsContainer = document.getElementById('participantsContainer');
    const addParticipantButton = document.getElementById('addParticipantButton');
    const form = document.getElementById('registrationForm');
    const summary = document.getElementById('summary');

    // Function to add a new participant input set
    function addParticipant() {
        participantCount++;
        const participantDiv = document.createElement('div');
        participantDiv.classList.add('participant');

        participantDiv.innerHTML = `
            <label for="participantName${participantCount}">Participant Name:</label>
            <input type="text" class="participant-name" id="participantName${participantCount}" name="participantName" required>

            <label for="participantFee${participantCount}">Fee ($):</label>
            <input type="number" class="participant-fee" id="participantFee${participantCount}" name="participantFee" required>
        `;

        participantsContainer.appendChild(participantDiv);
    }

    // Add event listener to "Add Participant" button
    addParticipantButton.addEventListener('click', addParticipant);

    // Submit event handler
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Get the adult name
        const adultName = document.getElementById('adultName').value;

        // Calculate the total fee and count participants
        const feeInputs = document.querySelectorAll('.participant-fee');
        let totalFee = 0;
        feeInputs.forEach(input => totalFee += parseFloat(input.value) || 0);
        
        const participantNames = document.querySelectorAll('.participant-name');
        const numParticipants = participantNames.length;

        // Hide the form and show the summary
        form.classList.add('hide');
        summary.classList.remove('hide');
        summary.textContent = `Thank you ${adultName} for registering. You have registered ${numParticipants} participants and owe $${totalFee} in Fees.`;
    });
});
