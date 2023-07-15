// Settings

let settingsbackground = document.getElementById("settingsbackground")
let settings = document.getElementById("settings")
let settingsbutton = document.getElementById("settingsbutton")

settingsbutton.addEventListener("click", () => {
    moremenu.style.display = "none"
    settingsbackground.style.display = "flex"
})

window.addEventListener('mouseup', function (e) {
    if (event.target.closest("#settingsbackground") && !event.target.closest("#settings")) {
        settingsbackground.style.display = "none";
    }
});

function openSettingsTab(evt, tabNumber) {
    settingssection = document.querySelectorAll(".settingssection");
    settingssection.forEach(element => {
        element.style.display = "none";
    });
    settingstabs = document.querySelectorAll(".settingstab");
    settingstabs.forEach(elmnt => {
        elmnt.className = "settingstab";
    })
    document.getElementById(tabNumber).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Tab Cloaking

let newpageicon = document.getElementById("newpageicon")
let newpagetitle = document.getElementById("newpagetitle")

let pageIcon = getCookie("pageIcon")
if (pageIcon !== "") {
    changePageIcon(pageIcon)
}
else {
    void 0;
}

let pageTitle = getCookie("pageTitle")
if (pageTitle !== "") {
    changePageTitle(pageTitle)
}
else {
    void 0;
}

function changePageIcon(iconurl) {
    var pageicon = document.querySelector("link[rel~='icon']");
    setCookie("pageIcon", iconurl, "365");
    pageicon.href = iconurl
    newpageicon.value = iconurl
}

function changePageTitle(newtitle) {
    setCookie("pageTitle", newtitle, "365");
    document.title = newtitle
    newpagetitle.value = newtitle
}

newpageicon.onkeydown = function (event) {
    if (event.key === 'Enter') {
        changePageIcon(newpageicon.value);
    }
}

newpagetitle.onkeydown = function (event) {
    if (event.key === 'Enter') {
        changePageTitle(newpagetitle.value);
    }
}

function openAB() {
    var win = window.open()
    var url = window.location.href
    var iframe = win.document.createElement('iframe')
    var body = document.getElementById('body')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.style.margin = "0px";
    win.document.body.appendChild(iframe)
}


// Themes in theme.js


// Background

let homepageimage = document.getElementById("homepageimage")

let backgroundImage = getCookie("backgroundImage")
if (backgroundImage !== "") {
    changeBackground(backgroundImage)
}
else {
    void 0;
}

function changeBackground(backgroundurl) {
    setCookie("backgroundImage", backgroundurl, "365")
    homepageimage.style.width = "100%"
    homepageimage.style.backgroundPosition = "50%"
    homepageimage.style.backgroundSize = "cover"
    homepageimage.style.backgroundImage = "url(" + backgroundurl + ")"
}
