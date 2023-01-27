export const pageview = (url) => {
    window.gtag('config', 'G-FQ34EFWTZE', {
      page_path: url,
    })
  }