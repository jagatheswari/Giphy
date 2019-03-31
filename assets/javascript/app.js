let toggle = false
const getGif = animal => {
    document.querySelector('#gifDiv').innerHTML = ''
    fetch(`https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=JOsUuF2tt7tMIwoHw2QpR5AZ9zXWcz6d&limit=10&rating=g`)
    .then(r => r.json())
    .then(gifs => {
        console.log(gifs)
      gifs.data.forEach(gif => {
        let { url: animated } = gif.images.fixed_height
        let { url: still } = gif.images.fixed_height_still
        let gifElem = document.createElement('img')
        gifElem.setAttribute('src', gif.images.fixed_height.url)
        gifElem.setAttribute('data-still', still)
        gifElem.setAttribute('data-animated', animated)
        gifElem.setAttribute('class', "gifImg")
        document.querySelector('#gifDiv').append(gifElem)
      })
    })
    .catch(e => console.error(e))
    }

const pausePlay = gif => {
  let { animated, still } = gif.dataset
  toggle = !toggle
  gif.setAttribute('src', toggle ? animated : still)
}

const addanimal = input => {
    let btnelem = document.createElement('button')
    btnelem.className = 'getGif'
    btnelem.setAttribute('data-animal', input)
    btnelem.textContent = input
    document.querySelector('#btnDiv').append(btnelem)
}

document.addEventListener('click', e => {
  e.preventDefault()
  switch (e.target.className) {
    case 'getGif':
      console.log(e.target)
      getGif(e.target.dataset.animal)
      break
    case 'gifImg':
      pausePlay(e.target)
      break
    default:
      if(e.target.id === 'add-animal') {
        console.log("It's working")
          console.log(document.querySelector('#animal-input').value)
          let input = document.querySelector("#animal-input").value
          addanimal(input)
      }
      break
  }
})

