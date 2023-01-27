
export const getStrapiURL = (path = "") => {
  return `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337"
    }${path}`
}

export const getStrapiMediaURL = (media: any) => {
  if (!media?.data?.attributes) {
    return media
  }
  const { url } = media?.data?.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}