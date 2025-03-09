document.getElementById("calculate_btb").addEventListener("click", function () {

  // Set default values
  document.getElementById("input_2.2").value = document.getElementById("input_2.2").value || "PL";
  document.getElementById("input_3.1").value = document.getElementById("input_3.1").value || "PL";
  document.getElementById("input_3.2").value = document.getElementById("input_3.2").value || "5:00";
  document.getElementById("input_2.1").value = document.getElementById("input_2.1").value || "4:00";

  // Get input values
  let input_1 = document.getElementById("input_1").value;
  let input_2_1 = document.getElementById("input_2.1").value;
  let input_2_2 = document.getElementById("input_2.2").value;
  let input_3_1 = document.getElementById("input_3.1").value;
  let input_3_2 = document.getElementById("input_3.2").value;
  let input_4 = document.getElementById("input_4").value;

  // Convert datetime values to Date objects
  let dateInput_1 = new Date(input_1);
  let dateInput_4 = new Date(input_4);

  // Convert duration inputs (hh:mm) to milliseconds
  function parseDuration(timeStr) {
    let [hours, minutes] = timeStr.split(":").map(Number);
    return (hours * 60 + minutes) * 60 * 1000;
  }

  let duration_2_1 = parseDuration(input_2_1);
  let duration_3_2 = parseDuration(input_3_2);

  // Function to format date
  function formatDate(date) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  // Calculate output values
  document.getElementById("out_1").textContent = formatDate(dateInput_1);

  document.getElementById("out_2.1").textContent = formatDate(dateInput_1);
  let out_2_2_date = new Date(dateInput_1.getTime() + duration_2_1);
  document.getElementById("out_2.2").textContent = formatDate(out_2_2_date);

  document.getElementById("out_3.1").textContent = document.getElementById("out_2.2").textContent;
  document.getElementById("out_3.2").textContent = input_2_2;

  document.getElementById("out_4.1").textContent = input_2_2;
  document.getElementById("out_4.2").textContent = document.getElementById("out_6.1").textContent;

  document.getElementById("out_5.1").textContent = document.getElementById("out_6.1").textContent;
  document.getElementById("out_5.2").textContent = input_3_1;

  let out_6_1_date = new Date(dateInput_4.getTime() - duration_3_2);
  document.getElementById("out_6.1").textContent = formatDate(out_6_1_date);
  document.getElementById("out_6.2").textContent = formatDate(dateInput_4);

  document.getElementById("out_7").textContent = formatDate(dateInput_4);
});
