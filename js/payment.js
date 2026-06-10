document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    
    const date = urlParams.get('date');
    const time = urlParams.get('time');
    const location = urlParams.get('location');
    const notes = urlParams.get('notes');
    const category = urlParams.get('category');
    const name = urlParams.get('name');
    if (location) {
        document.getElementById('displayAddress').textContent = location;
    }
    

    if (date && time) {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long',
            year: 'numeric'
        });
        document.getElementById('serviceDetails').textContent = `${category} Service - ${time} ${formattedDate}`;
        document.getElementById('serviceNotes').textContent = `Notes for Worker : ${notes ? notes : "No Additional Notes"}`;
   }
});

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