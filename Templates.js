export function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <label for="name${count}">Participant Name:</label>
        <input type="text" id="name${count}" required>
        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" required>
    </section>
    `;
}

export function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in Fees.`;
}
