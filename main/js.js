function calculateTimes() {
  let lastPullCardOutEventTime = document.getElementById("lastPullCardOutEventTime").value;
  if (!lastPullCardOutEventTime) return;

  lastPullCardOutEventTime = new Date(lastPullCardOutEventTime);

  function subtractDuration(id, durationId) {
    const duration = document.getElementById(durationId).value;
    if (!duration) return null;

    const [hours, minutes] = duration.split(":").map(Number);
    lastPullCardOutEventTime.setHours(lastPullCardOutEventTime.getHours() - hours);
    lastPullCardOutEventTime.setMinutes(lastPullCardOutEventTime.getMinutes() - minutes);

    const formattedDate = lastPullCardOutEventTime.toISOString().slice(0, 16);
    document.getElementById(id).value = formattedDate;
    return lastPullCardOutEventTime;
  }

  subtractDuration("truckEnd", "truckDuration");
  subtractDuration("startCountryTime", "startCountryDuration");
  subtractDuration("restEnd", "restDuration");
  subtractDuration("endCountryTime", "endCountryDuration");
  subtractDuration("workEnd", "workDuration");
}

function saveEntry() {
  const entries = [
    { time: document.getElementById("lastEventTime").value, text: "Вставил карту в тахограф - начало страны" },
    { time: document.getElementById("truckEnd").value, text: "Доезд от базы до грузовика" },
    { time: document.getElementById("startCountryTime").value, text: "Начало страны PL" },
    { time: document.getElementById("restEnd").value, text: "Отдых" },
    { time: document.getElementById("endCountryTime").value, text: "Конец страны PL" },
    { time: document.getElementById("workEnd").value, text: "Доезд от грузовика до базы" },
    { time: document.getElementById("workStart").value, text: "Изъял карту из тахографа" },
  ];

  // Sort in chronological order (earliest first)
  entries.sort((a, b) => new Date(a.time) - new Date(b.time));

  // Format output
  let output = "";
  entries.forEach(entry => {
    if (entry.time) {
      const date = new Date(entry.time);
      output += `${date.toLocaleDateString()} ${date.toLocaleTimeString()}  ${entry.text}\n`;
    }
  });

  document.getElementById("logOutput").innerText = output;

}

