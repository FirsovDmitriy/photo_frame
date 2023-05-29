import useFetch from '@/hooks/useFetch'

const BASE_URL = 'https://api.unsplash.com/'

const PhotosService = {
  getAll(pageParam, searchQuery) {
    return useFetch(
      `${BASE_URL}search/photos?page=${pageParam}&query=${searchQuery}&per_page=12&client_id=${
        import.meta.env.VITE_UNSPLASH_KEY
      }`
    )
  },

  start(pageParam) {
    return useFetch(
      `${BASE_URL}photos?page=${pageParam}&client_id=${
        import.meta.env.VITE_UNSPLASH_KEY
      }`
    )
  },
}

export default PhotosService
