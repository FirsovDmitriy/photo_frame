const options = {
  rootMargin: '0px',
  threshold: 0,
}

const useObserver = (loadMore, target) => {
  const callback = (entries, observer) => {
    if(entries[0].isIntersecting) {
      loadMore()
    }
  }

  const observer = new IntersectionObserver(callback, options)
  observer.observe(target)
}

export default useObserver