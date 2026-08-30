```javascript id="v8n3px"
let display = document.getElementById("display");

function calculate(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function result() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Date and Time
function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", dateOptions);

    document.getElementById("time").textContent =
        now.toLocaleTimeString("en-US");
}

updateDateTime();

setInterval(updateDateTime, 1000);
```
