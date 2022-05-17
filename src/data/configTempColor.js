export const fixColorByTemp = (temperature, element) => {
    if (temperature) {
        if (temperature < 10) {
            document.querySelector(element).style.color = "#241571";
        } else if (temperature >= 10 && temperature < 18) {
            document.querySelector(element).style.color = "#1338BE";
        } else if (temperature >= 18 && temperature < 25) {
            document.querySelector(element).style.color = "rgb(0,228,0)";
        } else if (temperature >= 25 && temperature < 29) {
            document.querySelector(element).style.color = "rgb(250,237,39)";
        } else if (temperature >= 29 && temperature < 35) {
            document.querySelector(element).style.color = "rgb(237,126,0)";
        } else {
            document.querySelector(element).style.color = "rgb(255,0,0)";
        }
    }
}