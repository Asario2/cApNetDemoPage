function dark() {
    let currentmode = document.getElementById("dark").getAttribute("src")
    if (currentmode == "icons/lightmode.png") {
        document.getElementById("dark").setAttribute("src", "icons/darkmode.png");
    } else {
        document.getElementById("dark").setAttribute("src", "icons/lightmode.png");
    }
    var elements = document.getElementsByTagName("*");
    var header = document.getElementsByTagName("header")[0];
    var bgcolor = document.body

    for (let x = 0; x < elements.length; x++) {
        //grab element from array 
        let element = elements[x]

        //grab element's CSS values using built-in function
        let elementStyle = getComputedStyle(element)

        if (element.tagName === "H1" || element.tagName === "H2" || element.tagName === "H3" || element.tagName === "H4" || element.tagName === "H5" || element.tagName === "H6") {
            if (elementStyle.color === "rgb(0, 0, 0)" || elementStyle.color === "rgb(255, 255, 255)") {
                continue;
            }
        }

        if (elementStyle.color === "rgb(0, 0, 0)") {
            element.style.color = "rgb(255, 255, 255)";
        } else if (elementStyle.color === "rgb(255, 255, 255)") {
            element.style.color = "rgb(0, 0, 0)";
        }
        if (elementStyle.backgroundColor === "rgb(0, 0, 0)") {
            element.style.backgroundColor = "rgb(255, 255, 255)";
        } else if (elementStyle.backgroundColor === "rgb(255, 255, 255)") {
            element.style.backgroundColor = "rgb(0, 0, 0)";
        }
    }
}