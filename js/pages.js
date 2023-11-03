const Pages = {
  home: {
    url: "../pages/home.htm",
    onmount: () => {
      console.log("home mounted")
    },
    onunmount: () => {
      console.log("home unmounted")
    },
  },
  about: {
    url: "../pages/about.htm",
    onmount: () => {
      console.log("about mounted")
    },
    onunmount: () => {
      console.log("about unmounted")
    },
  },
  lorem: {
    url: "../pages/qwerty.htm",
    onmount: () => {
      console.log("lorem mounted")
    },
    onunmount: () => {
      console.log("lorem unmounted")
    },
  },
  qwerty: {
    url: "../pages/loader.htm",
    onmount: () => {
      console.log("qwerty mounted")
    },
    onunmount: () => {
      console.log("qwerty unmounted")
    },
  },
}

export default Pages
