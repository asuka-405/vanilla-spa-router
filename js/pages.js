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
    url: "../pages/lorem.htm",
    onmount: () => {
      console.log("lorem mounted")
    },
    onunmount: () => {
      console.log("lorem unmounted")
    },
  },
  loader: {
    url: "../pages/loader.htm",
    onmount: () => {
      console.log("loader mounted")
    },
    onunmount: () => {
      console.log("loader unmounted")
    },
  },
}

export default Pages
