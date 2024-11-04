import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

// Event listener to add a new participant when "Add Participant" is clicked
document.getElementById("addParticipant").addEventListener("click", function() {
    participantCount++;
    const participantsFieldset = document.querySelector("fieldset");
    participantsFieldset.insertAdjacentHTML("beforeend", participantTemplate(participantCount));
});

// Function to calculate the total fees for all participants
function totalFees() {
    // Selects elements with IDs that start with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    // Convert NodeList to Array
    feeElements = [...feeElements];
    
    // Sum up the fees using Array.reduce()
    const total = feeElements.reduce((sum, fee) => {
        return sum + (parseFloat(fee.value) || 0); // Parses the value and treats empty as 0
    }, 0);

    return total; // Returns the total fees
}

// Event listener to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting traditionally (page reload)

    // Calculate the total fees
    const fees = totalFees();
    // Get the adult's name (assuming it's the first participant's name field)
    const adultName = document.querySelector("#name1").value;

    // Hide the form
    document.getElementById("registrationForm").style.display = "none";
    
    // Show the summary message
    const summaryElement = document.getElementById("summary");
    summaryElement.classList.remove("hide");
    summaryElement.innerHTML = successTemplate({ name: adultName, count: participantCount, total: fees });
});
