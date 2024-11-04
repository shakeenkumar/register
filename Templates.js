// Function to create participant template
function participantTemplate(count) {
    return `
        <div class="participant${count}">
            <label for="fee${count}">Participant Fee:</label>
            <input type="number" id="fee${count}" class="fee" required>
        </div>
    `;
}

// Function to create success message template
function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in fees.`;
}
