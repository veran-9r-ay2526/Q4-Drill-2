function getHot() {
    let temp = Number(document.getElementById("temperature").value);
    let humidity = Number(document.getElementById("humidity").value);

    let HeatIndex = temp + (0.33 * humidity) - 4;
    let classification = "";

    if (HeatIndex <= 27) {
        classification = "Comfortable/Cool";
    } else if (HeatIndex <= 32) {
        classification = "Warm";
    } else if (HeatIndex <= 41) {
        classification = "Hot";
    } else if (HeatIndex <= 54) {
        classification = "Very Hot / Caution";
    } else {
        classification = "Extreme Heat / Danger";
    }

    alert("Heat Index: " + HeatIndex.toFixed(2) + " | Status: " + classification);
}