document.getElementById("calculate_btb").addEventListener("click", function () {
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

  // Calculate output values
  document.getElementById("out_1").textContent = input_1;

  document.getElementById("out_2.1").textContent = input_1;
  let out_2_2_date = new Date(dateInput_1.getTime() + duration_2_1);
  document.getElementById("out_2.2").textContent = out_2_2_date.toISOString().slice(0, 16).replace("T", " ");

  document.getElementById("out_3.1").textContent = document.getElementById("out_2.2").textContent;
  document.getElementById("out_3.2").textContent = input_2_2;

  document.getElementById("out_4.1").textContent = input_2_2;
  document.getElementById("out_4.2").textContent = document.getElementById("out_6.1").textContent;

  document.getElementById("out_5.1").textContent = document.getElementById("out_6.1").textContent;
  document.getElementById("out_5.2").textContent = input_3_1;

  let out_6_1_date = new Date(dateInput_4.getTime() - duration_3_2);
  document.getElementById("out_6.1").textContent = out_6_1_date.toISOString().slice(0, 16).replace("T", " ");
  document.getElementById("out_6.2").textContent = input_4;

  document.getElementById("out_7").textContent = input_4;
});
