let pages
let loader
let root

function initialize(pageList, loaderElement, rootElement) {
  pages = pageList
  loader = loaderElement
  root = rootElement
}

function loadLinks(linkContainer) {
  linkContainer
    .querySelectorAll(".internal-link")
    .forEach((a) => a.addEventListener("click", (e) => linkHandler(e)))
}

function linkHandler(e) {
  e = e || window.event
  e.preventDefault()

  history.pushState({}, "", `index.html?tab=${e.target.getAttribute("tab")}`)
  locationHandler()
}

function locationHandler() {
  const tab = new URLSearchParams(location.search).get("tab")
  if (!tab) {
    history.pushState({}, "", "index.html?tab=home")
    return locationHandler()
  }
  Object.values(pages).forEach((page) => {
    if (page.onunmount) page.onunmount()
  })
  const page = pages[tab] || { url: "./pages/404.htm" }
  root.innerHTML = loader
  fetch(page.url)
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html
      if (page.onmount) page.onmount()
      loadLinks(root)
    })

  // Add class active to clicked internal-link and remove from others
  document.querySelectorAll(".sidebar-actions__item").forEach((item) => {
    if (item.querySelector("a").getAttribute("tab") === tab) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

const Router = {
  loadLinks,
  linkHandler,
  locationHandler,
  initialize,
}

export default Router
