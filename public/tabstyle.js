
var tabstyle = "horizontal"
let verticaltabsbutton = document.querySelectorAll(".verticaltabsbutton")
let horizontaltabsbutton = document.querySelectorAll(".horizontaltabsbutton")
let verticaltabsbuttonimg = document.querySelector(".verticaltabsbuttonimg")
let horizontaltabsbuttonimg = document.querySelector(".horizontaltabsbuttonimg")

let tabStyle = getCookie("tabStyle")
if (tabStyle == "vertical") {
    verticalTabs()
}
else if (tabStyle == "horizonimage.png") {
    horizontalTabs()
}
else if (tabStyle == "floating") {
    floatingTabs()
}
else if (tabStyle == "gravity") {
    gravityTabs()
}
else {
    horizontalTabs()
}

function horizontalTabs() {
    setCookie("tabStyle", "horizontal", "365");

    horizontaltabsbutton.forEach(elmnt => elmnt.style.display = "none");
    verticaltabsbutton.forEach(elmnt => elmnt.style.display = "block");
    verticaltabsbuttonimg.style.display = "inline-flex"

    closeMenu();

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    topbar.insertBefore(tabsandmore, urlbartop)
    tabsandmore.style.position = ""
    tabsandmore.style.top = ""
    tabsandmore.style.width = ""
    tabsandmore.style.minWidth = ""
    tabsandmore.style.height = ""
    tabsandmore.style.flexDirection = ""
    tabsandmore.style.borderRadius = ""
    tabsandmore.style.padding = ""
    tabsandmore.style.background = ""
    tabsandmore.style.backdropFilter = ""

    let tabsection = document.querySelector(".tabsection")
    tabsection.style.flexDirection = ""

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]
    newtabandsettings.style.margin = ""
    newtabandsettings.style.marginBottom = ""
    function fixHorizontalElements() {
        tabstyle = "horizontal"
        let iframes = document.querySelectorAll(".iframe")

        iframes.forEach(elmnt => {
            elmnt.style.height = ""
            elmnt.style.width = ""
            elmnt.style.left = ""
            elmnt.style.top = ""
            elmnt.style.borderRadius = ""
        })
    }

    fixHorizontalElements();

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (tabstyle == "horizontal") {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    fixHorizontalElements();
                }
            }
        });
    });
    observer.observe(tabsection, { childList: true, subtree: true });
    observer.observe(document.querySelector("body"), { childList: true, subtree: true });

}

function verticalTabs() {
    horizontalTabs();
    setCookie("tabStyle", "vertical", "365");

    verticaltabsbutton.forEach(elmnt => elmnt.style.display = "none");
    horizontaltabsbutton.forEach(elmnt => elmnt.style.display = "block");
    horizontaltabsbuttonimg.style.display = "inline-flex"

    closeMenu();

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    body.insertBefore(tabsandmore, topbar)
    tabsandmore.style.position = "absolute"
    tabsandmore.style.top = "55px"
    tabsandmore.style.width = "150px"
    tabsandmore.style.minWidth = "0px"
    tabsandmore.style.height = "calc(100% - 65px)"
    tabsandmore.style.flexDirection = "column"
    tabsandmore.style.borderRadius = "0rem 0rem 0rem 10px"
    tabsandmore.style.padding = "20px 0px"
    tabsandmore.style.background = "var(--background-color)"
    tabsandmore.style.backdropFilter = "saturate(3) blur(20px)"

    let tabsection = document.querySelector(".tabsection")
    tabsection.style.flexDirection = "column"

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]
    newtabandsettings.style.margin = "0 auto"
    newtabandsettings.style.marginBottom = "5px"
    function fixVerticalElements() {
        tabstyle = "vertical"
        let iframes = document.querySelectorAll(".iframe")

        iframes.forEach(elmnt => {
            elmnt.style.height = "calc(100% - 65px)"
            elmnt.style.width = "calc(100% - 170px)"
            elmnt.style.left = "160px"
            elmnt.style.top = "55px"
            elmnt.style.borderRadius = "0rem 0rem 10px 0rem"
        })
    }

    fixVerticalElements();

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (tabstyle == "vertical") {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    fixVerticalElements();
                }
            }
        });
    });
    observer.observe(tabsection, { childList: true, subtree: true });
    observer.observe(document.querySelector("body"), { childList: true, subtree: true });

}

function floatingTabs() {
    horizontalTabs();
    setCookie("tabStyle", "floating", "365")

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    body.insertBefore(topbar, topbar)
    topbar.style.position = "absolute"
    topbar.style.top = "-150px"
    topbar.style.height = "120px"
    topbar.style.padding = "20px"
    topbar.style.flexDirection = "column"
    topbar.style.borderRadius = "10px"
    topbar.style.left = "50%"
    topbar.style.right = "50%"
    topbar.style.transform = "translate(-50%, -50%)"
    // Postitioning

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]

    function fixFloatingElements() {
        tabstyle = "floating"
        var newwidth = 0
        document.querySelectorAll(".tab").forEach(elmnt => {
            newwidth = newwidth + elmnt.offsetWidth + 10
        })
        newwidth = newwidth + newtabandsettings.offsetWidth
        newwidth = newwidth + 90 + "px"
        document.getElementsByClassName("topbar")[0].style.width = newwidth

        let iframes = document.querySelectorAll(".iframe")
        iframes.forEach(elmnt => {
            elmnt.style.height = "calc(100% - 20px)"
            elmnt.style.width = "calc(100% - 20px)"
            elmnt.style.left = "10px"
            elmnt.style.top = "10px"
            elmnt.style.borderRadius = "10px"
        })
    }

    fixFloatingElements();

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (tabstyle == "floating") {
                fixFloatingElements();
            }
        });
    });
    observer.observe(tabsection, { childList: true, subtree: true });

    //Enabling

    function closeFloatingTabs() {
        topbar.style.top = "-150px"
        closeMenu();
    }

    onmousemove = function (e) {
        if (e.clientY < 10) {
            topbar.style.top = "95px"
        }
        topbar.onmouseleave = function (e) {

            if (e.clientY < 35) {
                return;
            }
            //if(moremenu.style.display == "block" && e.clientX > moremenu.getBoundingClientRect().x && e.clientX < moremenu.getBoundingClientRect().x + 101){
            if (moremenu.style.display == "block") {
                return;
            }
            else {
                closeFloatingTabs();
            }
        }
        if (moremenu.style.display == "block") {
            return;
        }
        else if (e.clientX < topbar.getBoundingClientRect().x) {
            closeFloatingTabs();
        }
        else if (e.clientX > topbar.getBoundingClientRect().x + topbar.offsetWidth) {
            closeFloatingTabs();
        }
        else if (e.clientY > 155) {
            closeFloatingTabs();
        }
        // else{
        //     closeFloatingTabs();
        // }

    }

}

function gravityTabs() {
    horizontalTabs();
    setCookie("tabStyle", "gravity", "365")

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    let searchbar = document.querySelector("#urlbartop input")
    let pageimagelinks = document.getElementById("pageimagelinks")
    let urlbarhomepage = document.getElementById("urlbarhomepage")
    let header = document.querySelector("header")
    let openinnewtab = document.getElementById("openinnewtab")

    body.insertBefore(tabsandmore, topbar)
    tabsandmore.style.position = "absolute"
    tabsandmore.style.top = "15px"
    tabsandmore.style.left = "15px"
    tabsandmore.style.borderRadius = "10px"
    tabsandmore.style.background = "var(--background-color)"
    tabsandmore.style.width = "calc(100% - 30px)"
    tabsandmore.style.minWidth = "0"
    tabsandmore.style.backdropFilter = "saturate(3) blur(20px)"

    body.appendChild(urlbartop)
    urlbartop.style.position = "absolute"
    urlbartop.style.bottom = "15px"
    urlbartop.style.left = "15px"
    urlbartop.style.borderRadius = "8px"
    urlbartop.style.background = "var(--background-color)"
    urlbartop.style.width = "calc(100% - 30px)"
    urlbartop.style.backdropFilter = "saturate(3) blur(20px)"
    var urlbarInner = urlbartop.innerHTML;
    //var newgamesforurlbar = "<img class=\"invert\"src=\"discord.png\" width=\"35px\" height=\"35px\" onclick=\"go('discord.com')\"> <img class=\"invert\"src=\"roblox.png\" width=\"35px\" height=\"35px\" onclick=\"go('https://v3.now.gg/play/5349')\"> <img class=\"invert\"src=\"games.png\" width=\"35px\" height=\"35px\" onclick=\"window.open('./games.html', '_blank')\"> <img class=\"invert\"src=\"geforce.png\" width=\"35px\" height=\"35px\" onclick=\"go('play.geforcenow.com')\">" 
    urlbartop.insertBefore(pageimagelinks, searchbar)
    urlbarhomepage.remove();

    pageimagelinks.style.marginBottom = "5px"
    pageimagelinks.style.marginLeft = "3px"
    let pageimagelinkdivs = document.querySelectorAll("#pageimagelinks div");
    let pageimagelinkimages = document.querySelectorAll("#pageimagelinks img");
    pageimagelinkdivs.forEach(elmnt => {
        elmnt.style.width = "25px"
        elmnt.style.height = "25px"
    })
    pageimagelinkimages.forEach(elmnt => {
        elmnt.style.width = "25px"
        elmnt.style.height = "25px"
    })
    openinnewtab.style.marginRight = "4px";
    topbar.style.display = "none"
    //pageimagelinks.remove();
    header.style.fontSize = "75px";

    function fixGravityTabs() {
        tabstyle = "gravity"

        let tabs = document.querySelectorAll(".tab")

        let iframes = document.querySelectorAll(".iframe")
        iframes.forEach(elmnt => {
            elmnt.style.height = "calc(100% - 130px)"
            elmnt.style.width = "calc(100% - 30px)"
            elmnt.style.left = "15px"
            elmnt.style.top = "70px"
            elmnt.style.borderRadius = "8px"
        })
    }

    fixGravityTabs();

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (tabstyle == "gravity") {
                fixGravityTabs();
            }
        });
    });
    observer.observe(tabsection, { childList: true, subtree: true });

}
