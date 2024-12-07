function updateClock() {
  const now = new Date();

  // Get current hours, minutes, seconds, and milliseconds
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Format hours, minutes, and seconds for display
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Update the time display
  document.getElementById("hours").textContent = formattedHours;
  document.getElementById("minutes").textContent = formattedMinutes;
  document.getElementById("seconds").textContent = formattedSeconds;
  document.getElementById("ampm").textContent = ampm;

  // Calculate rotation angles
  const secondAngle = ((seconds * 1000 + milliseconds) / 60000) * 360; // Smooth rotation for seconds
  const minuteAngle = ((minutes * 60 + seconds) / 3600) * 360; // Smooth rotation for minutes
  const hourAngle =
    ((formattedHours * 3600 + minutes * 60 + seconds) / 43200) * 360; // Smooth rotation for hours

  // Apply rotations to dots
  document.querySelector(
    ".seconds .dot"
  ).style.transform = `translateX(-50%) rotate(${secondAngle}deg)`;
  document.querySelector(
    ".minutes .dot"
  ).style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
  document.querySelector(
    ".hours .dot"
  ).style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
}

// Update clock every 50ms for smooth animation
setInterval(updateClock, 50);
updateClock();
