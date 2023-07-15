const form = document.querySelectorAll("form");
const input = document.querySelector("input");
let iframe = document.getElementById("iframe");
let urlbarhomepage = document.querySelector('#urlbarhomepage input');
let urlbartop = document.querySelector('#searchbar');

let userKey = new URLSearchParams(window.location.search).get("userKey")
if (userKey === null) {
  userKey = "Guest"
}
form.forEach(item => {
  item.addEventListener("submit", async (event) => {
    event.preventDefault();

  });
})

function go(value) {
  let iframe = document.querySelector(".iframe.active");
  window.navigator.serviceWorker
    .register("./sw.js?userkey=" + userKey, {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = value.trim();
      if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "https://" + url;
      iframe.style.display = "block"
      iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
      //var iframeurl = __uv$config.decodeUrl(iframe.src)
      var iframeurl = iframe.src.substring(iframe.src.indexOf("/service/") + 9);
      //document.querySelector("#urlbartop input").value = iframeurl.substring(iframeurl.indexOf("/service/") + 0);
      document.querySelector("#urlbartop input").value = __uv$config.decodeUrl(iframeurl)

      //getIframeFavicon(iframeurl.substring(iframeurl.indexOf("/service/") + 0))
      getIframeFavicon(__uv$config.decodeUrl(iframeurl))
    });
}

async function getIframeFavicon(value) {

  document.querySelector(".tab.active .tabfavicon").src = "https://s2.googleusercontent.com/s2/favicons?domain_url=" + value

}

urlbarhomepage.onkeydown = function (event) {
  if (event.key === 'Enter') {
    event.preventDefault
    go(urlbarhomepage.value.replace("http://", "https://"));
  }
}

urlbartop.onkeydown = function (event) {
  if (event.key === 'Enter') {
    event.preventDefault
    go(urlbartop.value.replace("http://", "https://"));
  }
}


function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

// TABS
var nextNumber = 1
var zIndex = 10
let tabsection = document.getElementsByClassName("tabsection")[0]
let body = document.querySelector("body")
var tabOrder = new Array();
var goOrNot = 1

createTabAndIframe();





function openTab(tabNumber) {
  var tab = document.querySelector("#" + tabNumber.replace("iframe", ""))
  var tabimg = document.querySelector("#" + tabNumber.replace("iframe", "") + " .tabclose")

  if (tabimg.getAttribute("listener") !== "true") {
    tabimg.addEventListener("click", () => {
      document.querySelector("#" + tabNumber).outerHTML = ""
      tab.outerHTML = ""
      tabOrder.splice(tabOrder.indexOf(tabNumber), 1);
      openTab(tabOrder.slice(-1)[0])
    })
  }

  tabimg.setAttribute("listener", "true")

  if (tabOrder.indexOf(tabNumber) > -1) {
    tabOrder.splice(tabOrder.indexOf(tabNumber), 1);
  }
  tabOrder[tabOrder.length] = tabNumber;

  if (typeof (document.querySelector(".iframe.active")) != "undefined" && document.querySelector(".iframe.active") != null) {
    document.querySelector(".iframe.active").style.display = "none"
    document.querySelector(".iframe.active").classList.remove("active")
  }

  var iframes = document.querySelectorAll(".iframe")
  iframes.forEach(elmnt => elmnt.style.display = "none")
  var iframe = document.getElementById(tabNumber);
  iframe.classList.add("active");
  iframe.style.zIndex = zIndex
  zIndex = zIndex + 2
  var url = __uv$config.decodeUrl(iframe.src)
  document.querySelector("#urlbartop input").value = url.substring(url.indexOf("https://") + 0);
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(elmnt => elmnt.className = "tab");
  if (iframe.src !== "") {
    iframe.style.display = "block"
  } else {
    document.querySelector("#urlbarhomepage input").value = ""
  }
  tab.className += " active";
}

function createTabAndIframe() {
  tabdiv = document.createElement("div");
  tabdiv.classList.add("tab");
  tabdiv.id = "tab" + nextNumber
  tabsection.appendChild(tabdiv);
  tabdiv.setAttribute("onclick", "openTab('tab" + nextNumber + "iframe')")

  tabdivfavicon = document.createElement("img")
  tabdivfavicon.src = "img.png"
  tabdivfavicon.classList.add("tabfavicon");
  tabdiv.appendChild(tabdivfavicon);

  tabdivp = document.createElement("p");
  tabdivp.innerHTML = "Tab"
  tabdiv.appendChild(tabdivp)

  tabdivclose = document.createElement("img");
  tabdivclose.src = "no.png"
  tabdivclose.classList.add("invert");
  tabdiv.appendChild(tabdivclose);
  tabdivclose.classList.add("tabclose");
  tabdivclose.setAttribute("listener", "false");

  iframe = document.createElement("iframe");
  iframe.classList.add("iframe");
  iframe.id = "tab" + nextNumber + "iframe"
  body.appendChild(iframe);

  tabdiv.style.width = "100%"

  openTab("tab" + nextNumber + "iframe");

  nextNumber = nextNumber + 1
}
