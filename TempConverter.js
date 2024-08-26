function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputTemp;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    if (inputUnit === outputUnit) {
        outputTemp = inputTemp;
    } else {
        if (inputUnit === "celsius") {
            if (outputUnit === "fahrenheit") {
                outputTemp = (inputTemp * 9/5) + 32;
            } else if (outputUnit === "kelvin") {
                outputTemp = inputTemp + 273.15;
            }
        } else if (inputUnit === "fahrenheit") {
            if (outputUnit === "celsius") {
                outputTemp = (inputTemp - 32) * 5/9;
            } else if (outputUnit === "kelvin") {
                outputTemp = (inputTemp - 32) * 5/9 + 273.15;
            }
        } else if (inputUnit === "kelvin") {
            if (outputUnit === "celsius") {
                outputTemp = inputTemp - 273.15;
            } else if (outputUnit === "fahrenheit") {
                outputTemp = (inputTemp - 273.15) * 9/5 + 32;
            }
        }
    }

    document.getElementById('outputTemp').textContent = `Result: ${outputTemp.toFixed(2)} ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
}
