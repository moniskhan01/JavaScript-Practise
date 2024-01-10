const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#guide");

  // check some condtions so that code don't to be burst
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = ` ${height} is not a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = ` ${weight} is not a valid height`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Display the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      // const div = document.createElement("div");
      // div.style.backgroundColor = "red";
      // div.innerHTML = "You are Under Weight";
      // guide.appendChild(div);
      guide.innerHTML = "You are Under Weight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      // const div = document.createElement("div");
      // div.style.backgroundColor = "green";
      // div.innerHTML = "You are in Normal range";
      // guide.appendChild(div);
      guide.innerHTML = "You comes under the Normal range";
    } else {
      // const div = document.createElement("div");
      // div.style.backgroundColor = "orange";
      // div.innerHTML = "You are overweight";
      // guide.appendChild(div);
      guide.innerHTML = "Overweight";
    }
  }
});
