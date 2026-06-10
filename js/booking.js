document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', function() {
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
    });
});

document.getElementById('dateInput').valueAsDate = new Date();

function handleContinue() {
    const date = document.getElementById('dateInput').value;
    const selectedTime = document.querySelector('.time-slot.selected');
    const location = document.getElementById('locationInput').value;
    const notes = document.getElementById('notesInput').value;

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (!date) {
        alert('Please select a date');
        return;
    }

    if (!selectedTime) {
        alert('Please select a time slot');
        return;
    }

    if (!location.trim()) {
        alert('Please enter a location');
        return;
    }

    const bookingData = {
        date: date,
        time: selectedTime.dataset.time,
        location: location,
        notes: notes
    };

    if (category) {
        bookingData.category = category;
    }

    const queryParams = new URLSearchParams(bookingData).toString();
    window.location.href = `payment.html?${queryParams}`;
}
function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
});