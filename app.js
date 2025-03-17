const UserMood = document.getElementById("mood")
const calenderViewBtn = document.getElementById("calenderView")
const dateDisplay = document.getElementById("dateDisplay")
const moodHistory = document.getElementById("moodHistory")
const now = new Date()

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}
const dateString = now.toLocaleDateString(undefined, options)

function getUserMood() {
    const userMoodEmoji = UserMood.value
    localStorage.setItem(dateString, userMoodEmoji)
    displayMoodHistory();
}

function displayMoodHistory() {
    moodHistory.innerHTML = ""

    for (let i = 0; i < localStorage.length; i++) {
        const date = localStorage.key(i)
        const mood = localStorage.getItem(date)

        const listItem = document.createElement("li")
        listItem.textContent = `${date} - ${mood}`
        moodHistory.appendChild(listItem)
    }
}

calenderViewBtn.addEventListener('click', () => {
    window.location.href = "calendar.html"
    window.location.reload
})