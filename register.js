import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

document.getElementById("addParticipant").addEventListener("click", function() {
    participantCount++;
    const participantsFieldset = document.querySelector("fieldset");
    participantsFieldset.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    const totalFees = calculateTotalFees();
    const adultName = document.querySelector("#name1").value; // Assuming the adult name is the first participant
    const summaryElement = document.getElementById("summary");
    
    // Hide the form and show summary
    this.style.display = "none";
    summaryElement.classList.remove('hide');
    summaryElement.innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFees: totalFees
    });
});

function calculateTotalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, input) => total + parseFloat(input.value) || 0, 0);
}
