let participantCount = 1;

document.getElementById('addParticipant').addEventListener('click', addParticipant);
document.getElementById('registrationForm').addEventListener('submit', submitForm);

function addParticipant() {
    participantCount++;
    const participantHTML = participantTemplate(participantCount);
    const addButton = document.getElementById('addParticipant');
    addButton.insertAdjacentHTML('beforebegin', participantHTML);
}

function participantTemplate(count) {
    return `
        <div class="participant${count}">
            <label for="fee${count}">Participant Fee:</label>
            <input type="number" id="fee${count}" class="fee" required>
        </div>
    `;
}

function submitForm(event) {
    event.preventDefault();
    const totalFeesAmount = totalFees();
    const adultName = document.getElementById('adultName').value;
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('summary').innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFees: totalFeesAmount
    });
    document.getElementById('summary').classList.remove('hide');
}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeElement) => sum + Number(feeElement.value), 0);
    return total;
}

function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in fees.`;
}
