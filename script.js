function updateDate() {
    const dateElement = document.getElementById('dateText');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); 
    const daysOfWeek = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    dateElement.textContent = formattedDate + ", " +daysOfWeek[currentDate.getDay()];
}


setInterval(updateDate, 1000);
updateDate

