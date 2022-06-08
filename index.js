const url = 'https://api.chucknorris.io/jokes/random'

async function getText() {
  const response = await fetch(url)
  const result = await response.json()
  render(result)
}

const root = document.getElementById('root')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  getText()
})

const render = (joke) => {

  main.innerHTML = ''

  const text = document.createElement('p')
  const img = document.createElement('IMG')

  text.innerHTML = joke.value
  img.src = joke.icon_url
  text.style.width = '50%'
  main.style.display = 'flex'


  main.append(text, img)
}