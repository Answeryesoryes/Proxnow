

let root = document.querySelector(":root")

let colorTheme = getCookie("colorTheme")
if (colorTheme == "light") {
    lightMode()
}
else if (colorTheme == "dark") {
    darkMode()
}
else {
    darkMode()
}

function darkMode() {
    setCookie("colorTheme", "dark", "365");

    root.style.setProperty("--element-background", "");
    root.style.setProperty("--background-color", "");
    root.style.setProperty("--font-color", "");
    root.style.setProperty("--border", "")
    root.style.setProperty("--tab-active-background", "");
    root.style.setProperty("--invert", "");

    document.querySelector("body").style.background = ""

    document.querySelector(".newtabandsettings").style.background = "";
    document.querySelectorAll(".newtabandsettings img").forEach(elmnt => elmnt.style.background = "");
    document.querySelector("#newtabbutton").style.background = "#d3d3d3"
    document.querySelector("#settingssidebar").style.background = "";
}

function lightMode() {
    setCookie("colorTheme", "light", "365");

    root.style.setProperty("--element-background", "#DFDFDFcc");
    root.style.setProperty("--background-color", "#F4F4F4cc");
    root.style.setProperty("--font-color", "black");
    root.style.setProperty("--border", "1.75px solid #b3b1ad")
    root.style.setProperty("--tab-active-background", "#CFCFCFcc");
    root.style.setProperty("--invert", "0");

    document.querySelector("body").style.background = "#e7e7e7"

    document.querySelector(".newtabandsettings").style.background = "var(--element-background)";
    document.querySelectorAll(".newtabandsettings img").forEach(elmnt => elmnt.style.background = "#EEEEEE");
    document.querySelector("#newtabbutton").style.background = "#EEEEEE"

    document.querySelector("#settingssidebar").style.background = "var(--element-background)";
}
