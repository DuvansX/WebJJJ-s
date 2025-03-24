document.addEventListener('DOMContentLoaded', function() {
    var today = new Date().getDay();
    var daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var cards = document.querySelectorAll('.day-card');

    cards.forEach((card, index) => {
        var dayName = card.querySelector('.day-name').textContent.trim(); 
        var dayIndex = daysOfWeek.indexOf(dayName); 

        if (dayIndex !== -1) {
            card.setAttribute('data-day', dayIndex); 
            if (dayIndex === today) {
                card.classList.add('today');
            }
        }
    });
});