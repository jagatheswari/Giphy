const getGif = animal => {
    document.querySelector('#gifDiv').innerHTML = ''
    fetch(`https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=JOsUuF2tt7tMIwoHw2QpR5AZ9zXWcz6d&limit=10&rating=g`)
    .then(r => r.json())
    .then(gifs => {
      gifs.data.forEach(gif => {
        let gifElem = document.createElement('img')
        gifElem.setAttribute('src', gif.images.fixed_height.url)
        document.querySelector('#gifDiv').append(gifElem)
      })
    })
    .catch(e => console.error(e))
    }