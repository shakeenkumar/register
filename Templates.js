let participantCount = 1;

// Function to create a new participant input set
function createParticipantElement() {
    participantCount++;
    const participantDiv = document.createElement('div');
    participantDiv.classList.add('participant');

    participantDiv.innerHTML = `
        <label for="participantName${participantCount}">Participant Name:</label>
        <input type="text" class="participant-name" id="participantName${participantCount}" name="participantName" required>

        <label for="participantFee${participantCount}">Fee ($):</label>
        <input type="number" class="participant-fee" id="participantFee${participantCount}" name="participantFee" required>
    `;
    return participantDiv;
}
