export default url => {
  return fetch(url)
    .then(response => {
      
      if(!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json()
    })
    .catch(error => console.log(error))
}