document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const events = []
    for (let i = 0; i < localStorage.length; i++) {
        const date = localStorage.key(i)
        const mood = localStorage.getItem(date)
        const formatDate = new Date(date).toISOString().split("T")[0]
        events.push({
            title: mood,
            start: formatDate,
        })
    }

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: events
    });
    calendar.render();
});

function goBack() {
    window.location.href = "index.html"
}