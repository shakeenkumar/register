// Set initial participant count
let participantCount = 1;

// Event listener for "Add Participant" button
document.getElementById("addParticipant").addEventListener("click", function() {
    participantCount++;
    const participantsFieldset = document.querySelector("fieldset");
    participantsFieldset.insertAdjacentHTML("beforeend", participantTemplate(participantCount));
});

// Template for a new participant's HTML section
function participantTemplate(count) {
    return `
        <section class="participant" id="participant${count}">
            <label for="name${count}">Participant ${count} Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>

            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" min="0" step="0.01" required>
        </section>
    `;
}

// Calculate total fees function
function totalFees() {
    const feeElements = document.querySelectorAll("[id^=fee]");
    const total = Array.from(feeElements).reduce((sum, fee) => {
        return sum + (parseFloat(fee.value) || 0);
    }, 0);
    return total;
}

// Template for success message
function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.count} participants and owe $${info.total.toFixed(2)} in Fees.`;
}

// Event listener for form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const fees = totalFees();
    const adultName = document.querySelector("#name1").value;

    // Hide the form and show summary message
    document.getElementById("registrationForm").style.display = "none";
    const summaryElement = document.getElementById("summary");
    summaryElement.classList.remove("hide");
    summaryElement.innerHTML = successTemplate({ name: adultName, count: participantCount, total: fees });
});
